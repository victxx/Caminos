import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ConnectWallet from '../components/ConnectWallet';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [location, setLocation] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      setQrData(data);
      getLocationAndSendData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const getLocationAndSendData = async (qrData) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        try {
          const response = await fetch('/api/collect', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ qrData, latitude, longitude }),
          });
          const data = await response.json();
          alert(`Server Response: ${data.message}`);
        } catch (error) {
          console.error('Error sending data to server:', error);
        }
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Caminos</h1>
      <div style={styles.connectButton}>
        <ConnectWallet setWalletAddress={setWalletAddress} />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleScan()} style={styles.button}>escanear sello</button>
        <button style={styles.button}>mi pasaporte</button>
      </div>
      <div style={styles.navContainer}>
        <Link href="/about">
          <button style={styles.navButton}>about</button>
        </Link>
        <Link href="/contact">
          <button style={styles.navButton}>contacto</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px'
  },
  title: {
    fontSize: '2em'
  },
  connectButton: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '50px',
    width: '100%'
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

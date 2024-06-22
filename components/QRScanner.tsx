// components/QRScanner.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = () => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
        scannerRef.current.id,
        { fps: 10, qrbox: 250 },
        false
      );
      scanner.render(
        (decodedText) => {
          setResult(decodedText);
          scanner.clear();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  return (
    <div>
      <div id="qr-reader" ref={scannerRef} style={{ width: '100%' }}></div>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default QRScanner;

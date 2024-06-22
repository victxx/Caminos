import React, { useRef, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner: React.FC = () => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (qrCodeRef.current) {
      const scanner = new Html5QrcodeScanner(
        qrCodeRef.current.id,
        { fps: 10, qrbox: 250 },
        false
      );

      scanner.render(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.warn(error);
        }
      );

      return () => {
        scanner.clear();
      };
    }
  }, []);

  return <div id="qr-scanner" ref={qrCodeRef} style={{ width: '300px', height: '300px' }} />;
};

export default QRScanner;



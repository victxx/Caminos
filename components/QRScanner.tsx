// components/QRScanner.tsx
import React, { useRef, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = () => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      qrCodeRef.current!,
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
  }, []);

  return <div ref={qrCodeRef} style={{ width: '300px', height: '300px' }} />;
};

export default QRScanner;

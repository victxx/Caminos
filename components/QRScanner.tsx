import React, { useState } from 'react';
import QrScanner from 'html5-qrcode';

const QRScanner: React.FC = () => {
  const [result, setResult] = useState('No result');

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
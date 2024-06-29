import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BlueCreateWalletButton } from '../components/BlueCreateWalletButton';
import { collectorClient, publicClient } from '../zoraSetup';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import Button from '../components/ui/Button';

// Importar QRScanner y Map de forma dinámica
const QRScanner = dynamic(() => import('../components/QRScanner'), { ssr: false });
const MapComponent = dynamic(() => import('../components/Map'), { ssr: false });

const Home: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleWalletSuccess = (address: string) => {
    setWalletAddress(address);
  };

  const handleWalletError = (error: any) => {
    console.error('Error connecting to wallet:', error);
  };

  const mintNFT = async () => {
    const tokenContract = "0x1234567890123456789012345678901234567890"; // Actualiza esto con la dirección del contrato
    const tokenId = BigInt(1);
    const mintToAddress: `0x${string}` = walletAddress! as `0x${string}`;
    const quantityToMint = 1;
    const minterAccount: `0x${string}` = walletAddress! as `0x${string}`;

    try {
      const { parameters } = await collectorClient.mint({
        mintType: "1155",
        tokenContract,
        tokenId,
        mintRecipient: mintToAddress,
        quantityToMint,
        minterAccount,
      });

      const { request } = await publicClient.simulateContract(parameters);
      // Aquí puedes enviar la transacción al blockchain usando `request`
      console.log('Minting transaction prepared:', request);
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <HomeIcon className="w-6 h-6" />
          </Link>
          <Link href="#" prefetch={false}>
            <MailsIcon className="w-6 h-6" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold">Caminos</h1>
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <UsersIcon className="w-6 h-6" />
          </Link>
          <Link href="#" prefetch={false}>
            <SettingsIcon className="w-6 h-6" />
          </Link>
        </div>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 py-12">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Username</h2>
            <p className="text-muted-foreground">{walletAddress || '0x1234567890abcdef'}</p>
          </div>
        </div>
        <div className="bg-muted rounded-xl w-full max-w-3xl aspect-[4/3]">
          <div className="flex items-center justify-center h-full text-4xl font-bold text-muted-foreground">
            <MapComponent />
          </div>
        </div>
        <BlueCreateWalletButton handleSuccess={handleWalletSuccess} handleError={handleWalletError} />
        <Button variant="ghost" size="lg" className="bg-muted-foreground rounded-full flex items-center justify-center" onClick={mintNFT}>
          Mint NFT
        </Button>
        <Button variant="ghost" size="lg" className="bg-muted-foreground rounded-full flex items-center justify-center">
          <CameraIcon className="w-6 h-6 text-background" />
          <span className="sr-only">Scan an Image File</span>
          <QRScanner />
        </Button>
      </div>
    </div>
  );
};

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default Home;

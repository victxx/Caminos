import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { BlueCreateWalletButton } from '../components/BlueCreateWalletButton';
import Button from '../components/ui/Button';


const QRScanner = dynamic(() => import('../components/QRScanner'), { ssr: false });
const MapComponent = dynamic(() => import('../components/Map'), { ssr: false });

const Home: React.FC = () => {
  const handleWalletSuccess = useCallback((address: string) => {
    toast.success(`Wallet connected: ${address}`);
  }, []);

  const handleWalletError = useCallback((error: any) => {
    toast.error(`Error connecting wallet: ${error.message}`);
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
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
            <p className="text-muted-foreground">0x1234567890abcdef</p>
          </div>
        </div>
        <div className="bg-muted rounded-xl w-full max-w-3xl aspect-[4/3]">
          <div className="flex items-center justify-center h-full text-4xl font-bold text-muted-foreground">
            <MapComponent />
          </div>
        </div>
        <Button
          variant="ghost"
          size="lg"
          className="bg-muted-foreground rounded-full flex items-center justify-center"
        >
          Mint NFT
        </Button>
        <BlueCreateWalletButton handleSuccess={handleWalletSuccess} handleError={handleWalletError} />
        <div className="flex items-center justify-center mt-8">
          <QRScanner />
        </div>
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


import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const QRScanner = dynamic(() => import('@/components/QRScanner'), { ssr: false });
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f5f5f5] p-6 rounded-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <Link href="#" prefetch={false}>
            <HomeIcon className="text-[#ff6347]" />
            <span className="sr-only">Home</span>
          </Link>
          <Link href="#" prefetch={false}>
            <MailsIcon className="text-[#ff6347]" />
            <span className="sr-only">Notifications</span>
          </Link>
        </div>
        <div className="text-sm">IT: {time}</div>
        <div className="flex space-x-4">
          <Link href="#" prefetch={false}>
            <SettingsIcon className="text-[#ff6347]" />
            <span className="sr-only">Settings</span>
          </Link>
          <Link href="#" prefetch={false}>
            <UsersIcon className="text-[#ff6347]" />
            <span className="sr-only">Profile</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <Avatar src="/placeholder-user.jpg" alt="User Avatar" fallback="U" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">Caminos</h2>
          <p className="text-sm text-gray-500">Collective Digital Stamps</p>
        </div>
      </div>
      <div className="mb-6">
        <Map />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-[#ff6347] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff6347]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Scan
        </Link>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-[#ff6347] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff6347]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Digital Wallet
        </Link>
      </div>
      <div className="mb-6">
        <QRScanner />
      </div>
    </div>
  );
}

function HomeIcon(props) {
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

function MailsIcon(props) {
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

function SettingsIcon(props) {
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

function UsersIcon(props) {
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

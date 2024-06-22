import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import { connectWallet } from '../wallet';

interface ConnectWalletProps {
  setWalletAddress: (address: string) => void;
}

const ConnectWallet = ({ setWalletAddress }: ConnectWalletProps) => {
  const handleConnectWallet = async () => {
    const accounts = await connectWallet();
    if (accounts) {
      setWalletAddress(accounts[0]);
    }
  };

  return (
    <div>
      <ConnectAccount onConnect={handleConnectWallet} />
    </div>
  );
};

export default ConnectWallet;

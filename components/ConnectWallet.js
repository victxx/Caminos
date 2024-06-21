import { useState } from 'react';
import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import { connectWallet } from '../wallet';

const ConnectWallet = ({ setWalletAddress }) => {
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


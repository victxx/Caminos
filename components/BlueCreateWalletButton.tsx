import React, { useCallback } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';

const buttonStyles: React.CSSProperties = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 18,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};

interface BlueCreateWalletButtonProps {
  handleSuccess: (address: string) => void;
  handleError: (error: any) => void;
}

export const BlueCreateWalletButton: React.FC<BlueCreateWalletButtonProps> = ({ handleSuccess, handleError }) => {
  const createWallet = useCallback(async () => {
    try {
      const sdk = new CoinbaseWalletSDK({
        appName: 'Caminos',
        appChainIds: [8453],
        appLogoUrl: 'https://example.com/logo.png', // Actualiza esto con tu logo
      });
      const provider = sdk.makeWeb3Provider();
      const [address] = await provider.request({
        method: 'eth_requestAccounts',
      });
      handleSuccess(address);
    } catch (error) {
      handleError(error);
    }
  }, [handleSuccess, handleError]);

  return (
    <button style={buttonStyles} onClick={createWallet}>
      <CoinbaseWalletLogo />
      Create Wallet
    </button>
  );
};

function CoinbaseWalletLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3 8.75H8.75V11h-1.5V8.75H5V7.25h2.25V5h1.5v2.25H11v1.5z" />
    </svg>
  );
}





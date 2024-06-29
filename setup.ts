import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';

let sdk: CoinbaseWalletSDK | null = null;
if (typeof window !== 'undefined') {
  sdk = new CoinbaseWalletSDK({
    appName: 'Caminos',
    appChainIds: [8453],
    appLogoUrl: 'https://example.com/logo.png', // Actualiza esto con tu logo
  });
}

export const getProvider = () => {
  if (!sdk) {
    throw new Error('CoinbaseWalletSDK not initialized');
  }
  return sdk.makeWeb3Provider();
};

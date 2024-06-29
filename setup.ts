import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';

const sdk = new CoinbaseWalletSDK({
  appName: 'Caminos',
  appChainIds: [8453],
  appLogoUrl: 'https://example.com/logo.png', // Actualiza esto con tu logo
});

export const provider = sdk.makeWeb3Provider();


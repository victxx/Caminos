// provider.ts
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';

const sdk = new CoinbaseWalletSDK({
  appName: 'Caminos',
  appChainIds: [8453], // Base chain ID
});

export const provider = sdk.makeWeb3Provider({ options: 'smartWalletOnly' });

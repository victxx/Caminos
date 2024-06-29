// lib/coinbaseSetup.ts
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';

const sdk = new CoinbaseWalletSDK({
  appName: 'Caminos',
  appChainIds: [8453],
});

export const provider = sdk.makeWeb3Provider({ options: 'smartWalletOnly' });

export const wallet = new CoinbaseWalletSDK({
  appName: 'Caminos',
  darkMode: false,
});

export const connectWallet = async () => {
  try {
    const provider = wallet.makeWeb3Provider();
    await provider.enable();
    return true; // Connection successful
  } catch (error) {
    console.error("Wallet connection failed:", error);
    return false; // Connection failed
  }
};
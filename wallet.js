import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Web3 from 'web3';

const APP_NAME = 'Caminos';
const APP_LOGO_URL = 'https://assets-global.website-files.com/662003de4bd13013740a80b4/6620ef88b90653591aa5f84b_prueba.gif'; // Actualiza esto con tu logo
const DEFAULT_CHAIN_ID = 84532;

const walletSDK = new CoinbaseWalletSDK({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
    appChainId: DEFAULT_CHAIN_ID,
});

const ethereum = walletSDK.makeWeb3Provider();
const web3 = new Web3(ethereum);

export const connectWallet = async () => {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
    } catch (error) {
        console.error('Error connecting to wallet:', error);
        return null;
    }
};

export { web3 };

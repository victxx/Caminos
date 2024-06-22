import React, { createContext, useContext, useState, useEffect } from 'react'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from 'web3'

const Web3Context = createContext<any>(null)

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [account, setAccount] = useState<string | null>(null)

  const connectWallet = async () => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: 'Caminos',
      appLogoUrl: 'https://example.com/logo.png',
      darkMode: false
    })
    const ethereum = coinbaseWallet.makeWeb3Provider('https://mainnet.base.org', 8453)
    const web3Instance = new Web3(ethereum)
    setWeb3(web3Instance)

    const accounts = await web3Instance.eth.requestAccounts()
    setAccount(accounts[0])
  }

  return (
    <Web3Context.Provider value={{ web3, account, connectWallet }}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}
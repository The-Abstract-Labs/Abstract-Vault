import '../styles/globals.css'
import type { AppProps } from 'next/app'
import web3wallet from '../lib/web3wallet'
import { useEffect } from 'react'
import { Web3WalletProvider } from '../contexts/Web3Wallet'
import { ApprovalSystemProvider } from '../contexts/ApprovalSystem'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApprovalSystemProvider>
      <Web3WalletProvider>
        <Component {...pageProps} />
      </Web3WalletProvider>
    </ApprovalSystemProvider>
  )
}

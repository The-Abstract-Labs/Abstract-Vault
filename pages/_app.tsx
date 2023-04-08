import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3WalletProvider } from '../contexts/Web3Wallet'
import { ApprovalSystemProvider } from '../contexts/ApprovalSystem'
import { AccountManagerProvider } from '../contexts/AccountManager'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountManagerProvider>
      <ApprovalSystemProvider>
        <Web3WalletProvider>
          <Component {...pageProps} />
        </Web3WalletProvider>
      </ApprovalSystemProvider>
    </AccountManagerProvider>
  )
}

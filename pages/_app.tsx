import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3WalletProvider } from "../contexts/Web3Wallet";
import { ApprovalSystemProvider } from "../contexts/ApprovalSystem";
import { AccountManagerProvider } from "../contexts/AccountManager";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AccountManagerProvider>
        <ApprovalSystemProvider>
          <Web3WalletProvider>
            <Component {...pageProps} />
          </Web3WalletProvider>
        </ApprovalSystemProvider>
      </AccountManagerProvider>
    </QueryClientProvider>
  );
}

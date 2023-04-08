import Client from "@walletconnect/web3wallet";
import { createContext, useEffect, useState, useContext } from "react";
import web3walletPromise from "../../lib/web3wallet";
import { ApprovalSystemContext, ApprovalModalType } from "../ApprovalSystem";

export const Web3WalletContext = createContext<Client | undefined>(undefined);

export function Web3WalletProvider({ children }: {
    children: any
}) {
    const [web3Wallet, setWeb3Wallet] = useState<Client>();
    const displayApprovalModal = useContext(ApprovalSystemContext);

    if ( web3Wallet ) {
        web3Wallet.on('session_proposal', async proposal => {
            displayApprovalModal({
                type: ApprovalModalType.CONNECTION
            })
        })
    }


    useEffect(() => {
        web3walletPromise.then(_web3Wallet => setWeb3Wallet(_web3Wallet));
    }, [])

    return (
        <Web3WalletContext.Provider value={web3Wallet}>
            {web3Wallet ? children : "Loading...."}
        </Web3WalletContext.Provider>
    )
}

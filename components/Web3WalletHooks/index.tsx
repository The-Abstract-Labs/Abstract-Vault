import React, { useContext } from "react";
import { Web3WalletContext } from "../../contexts/Web3Wallet";
import { ApprovalModalType, ApprovalSystemContext } from "../../contexts/ApprovalSystem";

export function Web3WalletHooks() {
    const web3Wallet = useContext(Web3WalletContext)!;
    const useModal = useContext(ApprovalSystemContext);

    if ( web3Wallet ) {
        web3Wallet.on('session_proposal', async proposal => {
            const { id, params } = proposal;

            useModal!({
                type: ApprovalModalType.CONNECTION,
                id,
                proposal: params
            })
        })

        web3Wallet.on('session_request', async proposal => {
            console.log(proposal);
        })
    }

    return <></>
}
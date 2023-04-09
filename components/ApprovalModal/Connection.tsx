import React, { useContext } from "react";
import styles from "./ApprovalModal.module.css";
import Web3 from "web3";
import { AccountManagerContext } from "../../contexts/AccountManager";
import { Web3WalletContext } from "../../contexts/Web3Wallet";
import { getSdkError, buildApprovedNamespaces } from '@walletconnect/utils';
import { ProposalTypes } from "@walletconnect/types";
import { ApprovalModalType, ApprovalSystemContext } from "../../contexts/ApprovalSystem";

export type ConnectionParameters = {
    type: ApprovalModalType.CONNECTION;
    id: number;
    proposal: ProposalTypes.Struct
}

const ConnectionModal = ({ params }: {
    params: ConnectionParameters
}) => {
    const web3Wallet = useContext(Web3WalletContext)!;
    const { accounts } = useContext(AccountManagerContext);
    const useModal = useContext(ApprovalSystemContext)

    async function acceptSession() {
        await web3Wallet.approveSession({
            id: params.id,
            namespaces: buildApprovedNamespaces({
                proposal: params.proposal,
                supportedNamespaces: {
                    eip155: {
                        chains: ['eip155:1'],
                        methods: ['eth_sendTransaction'],
                        events: [],
                        accounts: [`eip155:1:${accounts[0]}`]
                    }
                }
            })
        })

        useModal!({
            type: ApprovalModalType.NONE
        })
    }

    async function rejectSession() {
        await web3Wallet.rejectSession({
            id: params.id,
            reason: getSdkError('USER_REJECTED_METHODS')
        })
        
        useModal!({
            type: ApprovalModalType.NONE
        })
    }

  return (
    <div className={styles.Modal}>
      <div className={styles.ModalContent}>
        <h2 className={styles.ModalHeader}>Connection Request</h2>
        <div className={styles.ModalBody}>
            Do you want to make connection with this d-app? <br /><br />
            <ul>
                {
                    (accounts as string[]).map(account => <li>{account}</li>)
                }
            </ul>
        </div>
      </div>
      <div className={styles.ModalFooter}>
        <div className={styles.buttonDecline}>
          <img src="./decline.svg" alt="" className={styles.imgDecline} />
          <p className={styles.declinetext} onClick={rejectSession}>Decline</p>
        </div>
        <div className={styles.buttonAccept}>
          <img src="./approve.svg" alt="" className={styles.imgAccept} />
          <p className={styles.approvetext} onClick={acceptSession}>Approve</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionModal;

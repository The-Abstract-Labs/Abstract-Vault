import React, { useContext } from "react";
import styles from "./ApprovalModal.module.css";
import Web3 from "web3";
import axios from 'axios';
import { Web3WalletContext } from "../../contexts/Web3Wallet";
import { ApprovalModalType, ApprovalSystemContext } from "../../contexts/ApprovalSystem";

export type TransactionParameters = {
    type: ApprovalModalType.TRANSACTION;
    id: any;
    topic: string;
    from: string;
    to: string;
    value?: string;
    gasPrice?: string;
    gas?: string;
    data: string;
}

const TransactionModal = ({ params }: {
    params: TransactionParameters
}) => {
    const web3Wallet = useContext(Web3WalletContext)!;
    const useModal = useContext(ApprovalSystemContext)

    const cost = Web3.utils.toBN(params.value ?? 0);
    const gasCost = Web3.utils.toBN(params.gasPrice ?? 0).mul(Web3.utils.toBN(params.gas ?? 0));
    const totalCost = Web3.utils.toBN(params.value ?? 0).add(gasCost);

    async function acceptTransaction() {
        const res = await axios.post('/api/handleOps', {
            sender: params.from,
            contractAddress: params.to,
            nonce: 0,
            value: 0,
            calldata: params.data,
            signature: []
        })

        await web3Wallet.respondSessionRequest({
            topic: params.topic,
            response: {
                id: params.id,
                result: res.data,
                jsonrpc: '2.0'
            }
        })

        useModal!({
            type: ApprovalModalType.NONE
        })
    }

    async function rejectTransaction() {
        await web3Wallet.respondSessionRequest({
            topic: params.topic,
            response: {
                id: params.id,
                error: {
                    code: 5000,
                    message: 'User rejected.'
                },
                jsonrpc: '2.0'
            }
        })

        useModal!({
            type: ApprovalModalType.NONE
        })
    }


  return (
    <div className={styles.Modal}>
      <div className={styles.ModalContent}>
        <h2 className={styles.ModalHeader}>Transactions Request</h2>
        <div className={styles.ModalBody}>
            <div className={styles.TransactionModalAccount}>
                From: { params.from.slice(0, 7) }...
            </div>
            <div className={styles.TransactionModalAccount}>
                To: { params.to.slice(0, 7) }...
            </div>
            <div className={styles.TransactionModalBreakup} style={{ paddingTop: '30px' }}>
                <div className={""}>
                    Cost
                </div>
                <div className={""}>
                    { Web3.utils.fromWei(cost) } ether
                </div>
            </div>
            <div className={styles.TransactionModalBreakup}>
                <div className={""}>
                    Gas Cost
                </div>
                <div className={""}>
                    { Web3.utils.fromWei(gasCost) } ether
                </div>
            </div>
            <div className={styles.TransactionModalBreakup}>
                <div className={""}>
                    Total Cost
                </div>
                <div className={""}>
                    { Web3.utils.fromWei(totalCost) } ether
                </div>
            </div>
        </div>
      </div>
      <div className={styles.ModalFooter}>
        <div className={styles.buttonDecline}>
          <img src="./decline.svg" alt="" className={styles.imgDecline} />
          <p className={styles.declinetext} onClick={rejectTransaction}>Decline</p>
        </div>
        <div className={styles.buttonAccept}>
          <img src="./approve.svg" alt="" className={styles.imgAccept} />
          <p className={styles.approvetext} onClick={acceptTransaction}>Approve</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;

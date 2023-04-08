import React from "react";
import styles from "./ApprovalModal.module.css";
import Web3 from "web3";

export type TransactionParameters = {
    from: string;
    to: string;
    value?: string;
    gasPrice?: string;
    gas?: string;
}

const TransactionModal = ({ params }: {
    params: TransactionParameters
}) => {
    const cost = Web3.utils.toBN(params.value ?? 0);
    const gasCost = Web3.utils.toBN(params.gasPrice ?? 0).mul(Web3.utils.toBN(params.gas ?? 0));
    const totalCost = Web3.utils.toBN(params.value ?? 0).add(gasCost);

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
          <p className={styles.declinetext}>Decline</p>
        </div>
        <div className={styles.buttonAccept}>
          <img src="./approve.svg" alt="" className={styles.imgAccept} />
          <p className={styles.approvetext}>Approve</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;

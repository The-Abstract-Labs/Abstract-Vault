import React from "react";
import styles from "./ApprovalModal.module.css";

const ApprovalModal = () => {
  return (
    <div className={styles.Modal}>
      <div className={styles.ModalContent}>
        <h2 className={styles.ModalHeader}>Transactions Request</h2>
        <div className={styles.ModalBody}>
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
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

export default ApprovalModal;

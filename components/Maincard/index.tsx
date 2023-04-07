import React from "react";
import styles from "./Maincard.module.css";

const Maincard = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.main}>
        <div className={styles.mainbalance}>
          <img src="./eth.svg" alt="" className={styles.ethimg} />
          <p className={styles.mainbalancevalue}>0.02</p>
          <p className={styles.mainbalanceunit}>ETH</p>
        </div>

        <img src="./graph.svg" alt="" className={styles.graphimg} />

        <div className={styles.netgrow}>
          <p className={styles.netreturntext}>Net Return</p>
          <div className={styles.netreturn}>
            <img src="./upgrow.svg" alt="" className={styles.upgrowlogo} />
            <p className={styles.netreturnvalue}>0.00%</p>
          </div>
        </div>
      </div>

      <div className={styles.balance}>
        <div>
          <div className={styles.balanceTitle}>Balance</div>
          <div className={styles.balanceAmount}>$0.00</div>
        </div>
        <div>
          <div className={styles.sendButton}>send</div>
        </div>
      </div>
    </div>
  );
};

export default Maincard;

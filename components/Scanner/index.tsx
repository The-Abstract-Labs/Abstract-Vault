import React from "react";
import styles from "./Scanner.module.css";

const Scanner = () => {
  return (
    <div className={styles.scanner}>
      <img src="./Scanner.svg" alt="" className={styles.logo} />
    </div>
  );
};

export default Scanner;

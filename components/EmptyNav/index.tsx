import React from "react";
import styles from "./EmptyNav.module.css";

const EmptyNav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src="./logo.svg" alt="" className={styles.logo} />
      </div>
      <div className={styles.walletDetails}></div>
    </nav>
  );
};

export default EmptyNav;

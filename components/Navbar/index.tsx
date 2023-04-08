import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { AccountManagerContext } from "../../contexts/AccountManager";

const Navbar = () => {
  const { accounts } = useContext(AccountManagerContext);

  return (
    <nav className={styles.navbar}>
      <div>
        <img src="./logo.svg" alt="" className={styles.logo} />
      </div>
      <div className={styles.walletDetails}>
        <img src="./qrcode.svg" alt="" className={styles.swapLogo} />
        <img src="./arrow1.svg" alt="" className={styles.swapLogo} />
        <img src="./bell.svg" alt="" className={styles.bellLogo} />
        <div className={styles.walletAccount}>
          <img src="./randimg.png" alt="" className={styles.randImg} />
          <p className={styles.address}>{accounts[0].slice(0,7)}...</p>
          <img
            src="./walletArrow.svg"
            alt=""
            className={styles.walletArrowLogo}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

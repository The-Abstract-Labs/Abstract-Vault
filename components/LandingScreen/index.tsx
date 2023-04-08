import Link from "next/link";
import styles from "../../styles/Home.module.css";
import stylesLand from "../../styles/Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src="./landingsvg.gif" alt="" className={stylesLand.landingsvg} />
        <div className={stylesLand.safety}>
          <img src="./secure.svg" alt="" className={stylesLand.securelogo} />
          <p className={stylesLand.securetext}>
            Safety, sundarta and reliability
          </p>
        </div>
        <Link href={'/wallet'} legacyBehavior>
            <a className={stylesLand.startwallet}>Start Wallet</a>
        </Link>
      </div>
    </div>
  );
}

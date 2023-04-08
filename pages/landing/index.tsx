import styles from "../../styles/Home.module.css";
import stylesLand from "../../styles/Landing.module.css";
import EmptyNav from "../../components/EmptyNav";

export default function Landing() {
  return (
    <div className={styles.container}>
      <EmptyNav />
      <div className={styles.main}>
        <img src="./landingsvg.gif" alt="" className={stylesLand.landingsvg} />
        <div className={stylesLand.safety}>
          <img src="./secure.svg" alt="" className={stylesLand.securelogo} />
          <p className={stylesLand.securetext}>
            Safety, sundarta and reliability
          </p>
        </div>
        <div className={stylesLand.startwallet}>Start Wallet</div>
      </div>
    </div>
  );
}

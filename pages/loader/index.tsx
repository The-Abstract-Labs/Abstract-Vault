import styles from "../../styles/Home.module.css";
import stylesLoad from "../../styles/loader.module.css";
import EmptyNav from "../../components/EmptyNav";

export default function Landing() {
  return (
    <div className={styles.container}>
      <EmptyNav />
      <div className={styles.main}>
        <img src="./loader.gif" alt="" className={stylesLoad.loadergif} />
        <div className={stylesLoad.support}>
          <img src="./crycoin.gif" alt="" className={stylesLoad.crycoingif} />
          <p className={stylesLoad.supporttext}>Supports everything</p>
        </div>
      </div>
    </div>
  );
}

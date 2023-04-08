import styles from "../../styles/Home.module.css";
import stylesLand from "../../styles/Landing.module.css";
import EmptyNav from "../../components/EmptyNav";

export default function Password() {
  return (
    <div className={styles.container}>
      <EmptyNav />
      <div className={styles.main}>
        <img src="./lockkey.svg" alt="" className={stylesLand.landingsvg} />
        <div className={stylesLand.createPass}>
          <p className={stylesLand.securetext}>Create Passsword</p>
          <input type="password" className={stylesLand.password} />
        </div>
        <div className={stylesLand.startwallet}>Create Account</div>
      </div>
    </div>
  );
}

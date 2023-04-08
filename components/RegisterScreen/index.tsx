import { useContext, useState } from "react";
import styles from "../../styles/Home.module.css";
import stylesLand from "../../styles/Landing.module.css";
import { AccountManagerContext } from "../../contexts/AccountManager";

export default function RegisterScreen() {
    const [input, setInput] = useState<string>('');
    const { setupEOA } = useContext(AccountManagerContext);

    async function register() {
        setupEOA(input);
    }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src="./lockkey.svg" alt="" className={stylesLand.landingsvg} />
        <div className={stylesLand.createPass}>
          <p className={stylesLand.securetext}>Create Passsword</p>
          <input type="password" value={input} onChange={e => setInput(e.target.value)} className={stylesLand.password} />
        </div>
        <div className={stylesLand.startwallet} onClick={register}>Create Account</div>
      </div>
    </div>
  );
}

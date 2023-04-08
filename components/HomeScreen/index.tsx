import styles from "../../styles/Home.module.css";
import Navbar from "../Navbar";
import Maincard from "../Maincard";
import Scanner from "../Scanner";
import Device from "../Device";
import ApprovalModal from "../ApprovalModal";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.section}>
          <Maincard />
        </div>
        <div className={styles.section}>
          <div className={styles.deviceblock}>
            <div className={styles.managedevices}>
              <img
                src="./device.svg"
                alt=""
                className={styles.managedeviceslogo}
              />
              <p className={styles.managedevicestitle}>Manage Device</p>
            </div>
            <div className={styles.deviceArray}>
              <Device />
              <Device />
              <Device />
            </div>
          </div>
        </div>
      </div>
      <Scanner />
      <ApprovalModal />
    </div>
  );
}

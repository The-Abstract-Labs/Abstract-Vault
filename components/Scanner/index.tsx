import React, { useState } from "react";
import styles from "./Scanner.module.css";
import { Loader } from "../Loader";
import Scannerqr from "./Scannerqr";
import useQRSubmission from "../../hooks/useQRSubmission";

const Scanner = () => {
  const [showScanner, setShowScanner] = useState(false);
  return (
    <>
      <div className={styles.scanner} onClick={() => setShowScanner((e) => !e)}>
        <img src="./Scanner.svg" alt="" className={styles.logo} />
      </div>

      {showScanner ? (
        <div className={styles.scannerWrapper}>
          <Scannerqr />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Scanner;

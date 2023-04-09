import QrScanner from "qr-scanner";
import React, { useEffect, useRef, useState } from "react";

const Scannerqr = () => {
  const videoRef = useRef();

  useEffect(() => {
    QrScanner.WORKER_PATH =
      "../node_modules/qr-scanner/qr-scanner-worker.min.js";
    const scanner = new QrScanner(
      videoRef.current,
      (result) => {
        console.log(result);
        scanner.stop();
      },
      {
        onDecodeError: (error) => {},
        highlightScanRegion: true,
      }
    );
    scanner.start();
    return () => {
      scanner.stop();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} />
    </div>
  );
};

export default Scannerqr;

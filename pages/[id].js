import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/grid.module.css";

const MintPage = (props) => {
  const router = useRouter();
  const mintId = router.query.id;
  return (
    <Layout>
      <div className={styles.grid}>
        <div className={styles.one}>Mint: {mintId}</div>
        <div className={styles.two}></div>
        <div className={styles.three}>
          <figure className={styles.audio}>
            <audio controls src="/Woclott - Meek10x - Juwonmix_Master.wav">
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </div>
        <div className={styles.four}></div>
        <div className={styles.five}></div>
        <div className={styles.six}></div>
        <div className={styles.seven}></div>
      </div>
    </Layout>
  );
};

export default MintPage;

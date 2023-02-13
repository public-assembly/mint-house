"use client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "@/styles/Drops.module.css";
import Image from "next/image";

const MintPage = () => {
  const router = useRouter();

  return (
    <div className={styles.dropsPage}>
      <Layout>
        <div className={styles.grid}>
          <div className={styles.dropsContainer}>
            <Image
              height={400}
              width={400}
              src="/routes.svg"
              alt="Image"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MintPage;
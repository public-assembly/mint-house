import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src={"/pa-footer-white-logo.svg"}
        width={50}
        height={50}
        alt="public assembly logo"
      />
    </div>
  );
};

export default Footer;

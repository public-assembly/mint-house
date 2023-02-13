import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">Mint House</Link>
      </div>
      <div>
        <Link href="/">connect</Link>
      </div>
    </div>
  );
};

export default NavBar;

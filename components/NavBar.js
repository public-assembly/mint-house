import React from "react";
import Link from "next/link";
import styles from "../styles/styles.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">Mint House</Link>
      </div>
      <div>
        <button>connect</button>
      </div>
    </div>
  );
};

export default NavBar;

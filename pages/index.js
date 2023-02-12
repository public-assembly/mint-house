import React from "react";
import Layout from "../components/Layout";
import { marketData } from "../lib/market";
import styles from "../styles/styles.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <div className={styles.home}>
      <Layout />
      <main className={styles.homeContainer}>
        <div className={styles.header}>
          <p>Welcome to PA Mint House</p>
        </div>
        {marketData.nodes.map((collection) => (
          <div key={collection.token.url} className={styles.ideas}>
            <Link
              href={"/collections/".concat(
                `${collection.token.collectionAddress}`
              )}
            >
              {collection.token.name}
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
export default HomePage;

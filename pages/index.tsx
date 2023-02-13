import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from "../components/Layout";
import { marketData } from "../data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mint House</title>
        <meta name="description" content="Welcome to PA Mint House!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.homeContainer}>
          <Layout />
          <div className={styles.header}>
            {/* <p>Welcome to PA Mint House</p> */}
          </div>
          {marketData.nodes.map((collection) => (
            <div key={collection.token.collectionAddress} className={styles.ideas}>
              <Link
                href={"/drops/".concat(
                  `${collection.token.collectionAddress}`
                )}
              >
                {collection.token.name}
              </Link>
            </div>
          ))}
        </main>
    </>
  );
}

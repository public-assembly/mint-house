import React from 'react';
import Layout from '../components/Layout';
import { ideas } from "../lib/data";
import styles from "../styles/styles.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <Layout>
      <div className={styles.header}>
        <p>Welcome to PA Mint House</p>
      </div>
      {ideas.map((idea) => (
        <div key={idea.name} className={styles.ideas}>
          <Link href={"".concat(idea.name.replace(/\s/g, "-"))}>
            {idea.name}
          </Link>
        </div>
      ))}
    </Layout>
  );
}
export default HomePage;

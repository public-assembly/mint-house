import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styles from '../styles/styles.module.css'
import { ideas } from '../lib/data';
import Link from 'next/link';
import Footer from '../components/Footer';

function HomePage() {
  console.log(ideas)
  return (
    <div>
      <NavBar />
      <Header />
      {ideas.map((idea) => (
        <div key={idea.name} className={styles.ideas}>
          <Link href={idea.url}>{idea.name}</Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default HomePage;

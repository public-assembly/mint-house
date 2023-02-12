import React from 'react';
import styles from '../styles/styles.module.css'

const GridBox = () => {
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.one}>1</div>
        <div className={styles.two}>2</div>
        <div className={styles.three}>3</div>
        <div className={styles.four}>4</div>
        <div className={styles.five}>5</div>
        <div className={styles.six}>6</div>
        <div className={styles.seven}>7</div>
      </div>
    </div>
  );
}

export default GridBox;

import React from 'react';
import { css } from 'astroturf';

const styles = css`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, auto);
  }
  .grid > * {
    margin: 0 auto;
  }
  .item {
    width: 300px;
    height: 300px;
    background: green;
  }
`;

const Current = () => (
  <div className={styles.grid}>
    <div className={styles.item} />
    <div className={styles.item} />
    <div className={styles.item} />
    <div className={styles.item} />
    <div className={styles.item} />
  </div>
);

export default Current;

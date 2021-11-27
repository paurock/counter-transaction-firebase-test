import React from "react";
import styles from "./Counter.module.css";

export function Counter({ count, handleClick }) {
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <button className={styles.asyncButton} onClick={() => handleClick(-1)}>
          -1
        </button>
        <button className={styles.asyncButton} onClick={() => handleClick(1)}>
          +1
        </button>
      </div>
    </div>
  );
}

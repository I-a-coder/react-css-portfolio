import React from "react";
import styles from "./CustomTable.module.css";

function CustomTable({ rows, columns }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? styles.striped : ""}>
            {row.map((cell, cidx) => (
              <td key={cidx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
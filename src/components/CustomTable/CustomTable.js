import React from "react";
import styles from "./CustomTable.module.css";

function CustomTable({ data, columns }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? styles.striped : ""}>
            {columns.map((col, cidx) => (
              <td key={cidx}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
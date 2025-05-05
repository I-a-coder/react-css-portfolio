import React from "react";
import styles from "./CustomInput.module.css";

function CustomInput({ label, type = "text", value, onChange, name, required }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </label>
    </div>
  );
}

export default CustomInput;
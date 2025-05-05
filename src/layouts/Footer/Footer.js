import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
}

export default Footer;
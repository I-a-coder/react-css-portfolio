import React from 'react';
import styles from './SideNav.module.css';

function SideNav({ open, onClose }) {
  return (
    <div className={`${styles.sidenav} ${open ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
        ×
      </button>
      <nav className={styles.navLinks}>
        <a href="/" onClick={onClose}>Home</a>
        <a href="/about" onClick={onClose}>About</a>
        <a href="/education" onClick={onClose}>Education</a>
        <a href="/experience" onClick={onClose}>Experience</a>
        <a href="/projects" onClick={onClose}>Projects</a>
        <a href="/leadership" onClick={onClose}>Leadership</a>
        <a href="/skills" onClick={onClose}>Skills</a>
        <a href="/contact" onClick={onClose}>Contact</a>
      </nav>
    </div>
  );
}

export default SideNav;
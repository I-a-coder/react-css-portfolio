import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

function Header({ onMenuClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Sadia Shafeeq</div>
      <nav className={styles.navbar}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/education">Education</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/leadership">Leadership</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
      </nav>
      <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Open menu">
        ☰
      </button>
      <ThemeToggle />
    </header>
  );
}

export default Header;
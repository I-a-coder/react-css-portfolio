import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './SideNav.module.css';

function SideNav() {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:768px)');
  
  if (isMobile) return null;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className={`${styles.sidenav} ${isDarkMode ? styles.darkSidenav : styles.lightSidenav}`}>
      <nav className={styles.navLinks}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`${styles.navLink} ${location.pathname === link.path ? styles.activeLink : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SideNav;
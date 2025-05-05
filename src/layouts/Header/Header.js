import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './Header.module.css';

const Header = ({ isDarkMode, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
    <AppBar 
      position="fixed" 
      className={`${styles.header} ${isDarkMode ? styles.darkHeader : styles.lightHeader}`}
    >
      <Toolbar className={styles.toolbar}>
        {isMobile && (
          <IconButton 
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        {!isMobile && (
          <Box className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </Box>
        )}
        
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
        
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          className={`${styles.mobileMenu} ${isDarkMode ? styles.darkDrawer : styles.lightDrawer}`}
        >
          <Box className={styles.drawerHeader}>
            <IconButton onClick={toggleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} className={styles.mobileLink}>
                <Link 
                  to={link.path} 
                  className={styles.mobileNavLink}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
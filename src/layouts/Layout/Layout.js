import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import { useTheme } from "../../context/ThemeContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "./Layout.module.css";

function Layout() {
  const { isDarkMode, toggleTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  return (
    <div className={`${styles.layout} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className={styles.mainContent}>
        {!isMobile && <SideNav />}
        <div className={`${styles.content} ${isMobile ? styles.mobileContent : ''} ${isTablet ? styles.tabletContent : ''}`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout; 
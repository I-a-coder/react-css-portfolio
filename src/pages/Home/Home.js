import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography } from '@mui/material';
import styles from './Home.module.css';

function Home() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <div>
      <Header onMenuClick={() => setSideNavOpen(true)} />
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <img src="/assets/images/profile.jpg" alt="Profile" className={styles.avatar} />
          <Typography variant="h2" className={styles.name}>Sadia Shafeeq</Typography>
          <Typography variant="h5" className={styles.tagline}>
            Crafting intelligent solutions with creativity.
          </Typography>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
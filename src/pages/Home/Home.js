import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography } from '@mui/material';
import styles from './Home.module.css';

function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <main className={styles.mainContent}>
      <section className={styles.hero}>
        <img src="profile.jpg" alt="Profile" className={styles.avatar} />
        <Typography variant="h2" className={styles.name}>Sadia Shafeeq</Typography>
        <Typography variant="h5" className={styles.tagline}>
          Crafting intelligent solutions with creativity.
        </Typography>
      </section>
    </main>
  );
}

export default Home;
import React, { useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';

function Home() {
  // Get theme for responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get setTitle from PageTitleContext
  const { setTitle } = usePageTitle();

  // Set page title when component loads
  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <Box component="section" className={styles.container}>
      {/* Hero Section */}
      <Box className={styles.hero}>
        <Typography variant="h1" component="h1" className={styles.title}>
          Sadia Shafeeq
        </Typography>
        <Typography variant="h5" className={styles.subtitle}>
          Full Stack Developer
        </Typography>
        <Typography variant="body1" className={styles.description}>
          Passionate about creating beautiful and functional web applications
        </Typography>
        <Box className={styles.heroButtons}>
          <Button 
            variant="contained" 
            className={styles.primaryButton}
            href="/projects"
          >
            View Projects
          </Button>
          <Button 
            variant="outlined" 
            className={styles.secondaryButton}
            href="/contact"
          >
            Contact Me
          </Button>
        </Box>
      </Box>

      {/* Quick Introduction */}
      <Box className={styles.intro}>
        <Typography variant="h2" component="h2" className={styles.sectionTitle}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" className={styles.introText}>
          I'm a Full Stack Developer with a passion for creating modern web applications.
          Explore my portfolio to see my projects, skills, and experience.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
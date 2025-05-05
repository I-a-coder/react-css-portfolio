import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import CustomTable from '../../components/CustomTable/CustomTable';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography } from '@mui/material';
import styles from './Education.module.css';

function Education() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Education');
  }, [setTitle]);

  
  const columns = ['Degree', 'Institute', 'Year'];
  const rows = [
    ['BSc in AI', 'ITU, Lahore', '2023 - 2027'],
    ['FSc Pre-Engineering', 'Queen Mary College, Lahore', '2021 - 2023'],

  ];

  return (
    <div>
      <Header onMenuClick={() => setSideNavOpen(true)} />
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <Typography variant="h3" className={styles.sectionTitle}>Education</Typography>
          <CustomTable columns={columns} rows={rows} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Education;
import React, { useEffect } from 'react';
import CustomTable from '../../components/CustomTable/CustomTable';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography } from '@mui/material';
import styles from './Education.module.css';

function Education() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  const columns = ['Degree', 'Institute', 'Year'];
  const rows = [
    ['BSc in AI', 'ITU, Lahore', '2023 - 2027'],
    ['FSc Pre-Engineering', 'Queen Mary College, Lahore', '2021 - 2023'],
  ];

  return (
    <main className={styles.mainContent}>
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>Education</Typography>
        <CustomTable columns={columns} rows={rows} />
      </section>
    </main>
  );
}

export default Education; 
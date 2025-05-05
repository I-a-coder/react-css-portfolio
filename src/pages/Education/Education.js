import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';

function Education() {
  // Get theme for responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get setTitle from PageTitleContext
  const { setTitle } = usePageTitle();

  // Set page title when component loads
  useEffect(() => {
    setTitle('Education');
  }, [setTitle]);

  // Education data
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      year: '2020 - 2024',
      description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
    },
    {
      id: 2,
      degree: 'High School Diploma',
      school: 'School Name',
      year: '2018 - 2020',
      description: 'Focus on Mathematics and Computer Science'
    }
  ];

  return (
    <Box component="section" className={styles.container}>
      <Typography variant="h2" component="h1" className={styles.title}>
        Education
      </Typography>

      <Timeline className={styles.timeline}>
        {educationData.map((education) => (
          <TimelineItem key={education.id}>
            <TimelineSeparator>
              <TimelineDot className={styles.timelineDot}>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector className={styles.timelineConnector} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={styles.timelinePaper}>
                <Typography variant="h6" className={styles.degree}>
                  {education.degree}
                </Typography>
                <Typography variant="subtitle1" className={styles.school}>
                  {education.school}
                </Typography>
                <Typography variant="body2" className={styles.year}>
                  {education.year}
                </Typography>
                <Typography variant="body1" className={styles.description}>
                  {education.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Additional Information */}
      <Box className={styles.additionalInfo}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Certifications
        </Typography>
        <Box className={styles.certifications}>
          {[
            'Web Development Bootcamp',
            'React.js Certification',
            'JavaScript Advanced Concepts'
          ].map((cert, index) => (
            <Paper key={index} className={styles.certificationItem}>
              <Typography variant="body1">{cert}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Education;
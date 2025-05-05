import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import { usePageTitle } from "../../context/PageTitleContext";
import styles from "./Skills.module.css";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", value: 90, color: "success" },
      { name: "SQL", value: 80, color: "info" },
      { name: "JavaScript", value: 75, color: "primary" },
      { name: "Python (Beginner)", value: 60, color: "warning" },
    ],
  },
  {
    category: "Data Structures & Algorithms",
    items: [
      { name: "Linked Lists", value: 85, color: "success" },
      { name: "Vectors", value: 80, color: "info" },
      { name: "Trees", value: 70, color: "primary" },
      { name: "File Handling", value: 75, color: "warning" },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Android Studio", value: 80, color: "success" },
      { name: "Firebase", value: 75, color: "info" },
      { name: "Google Colab", value: 85, color: "primary" },
      { name: "VS Code", value: 90, color: "warning" },
    ],
  },
  {
    category: "Database Management",
    items: [
      { name: "MySQL", value: 80, color: "success" },
      { name: "Firebase Realtime Database", value: 75, color: "info" },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "GitHub", value: 85, color: "primary" },
    ],
  },
  {
    category: "Technical Writing",
    items: [
      { name: "Documentation", value: 90, color: "success" },
      { name: "Academic Writing", value: 80, color: "info" },
    ],
  },
];

function Skills() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Skills');
  }, [setPageTitle]);

  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Skills
      </Typography>
      <Box className={styles.skillsContainer}>
        {skills.map((category, idx) => (
          <Paper key={idx} className={styles.skillCard}>
            <Typography variant="h6" className={styles.categoryTitle}>
              {category.category}
            </Typography>
            {category.items.map((skill, skillIdx) => (
              <Box key={skillIdx} className={styles.skillItem}>
                <Typography variant="body1" className={styles.skillName}>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  color={skill.color}
                  className={styles.progressBar}
                />
                <Typography variant="body2" className={styles.skillPercentage}>
                  {skill.value}%
                </Typography>
              </Box>
            ))}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, link, linkText, image }) {
  const { isDarkMode } = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div className={`${styles.card} ${isDarkMode ? styles.darkCard : styles.lightCard} ${isMobile ? styles.mobileCard : ''}`}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.button} ${isDarkMode ? styles.darkButton : styles.lightButton}`}
        >
          {linkText || "View Project"}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
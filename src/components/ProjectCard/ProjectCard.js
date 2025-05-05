import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, link, linkText }) {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
        {linkText}
      </a>
    </div>
  );
}

export default ProjectCard;
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "VIM-Style Text Editor",
    description: "A command-line text editor using linked lists & vectors.",
    link: "https://github.com/I-a-coder/Notepad-VIM.git",
    linkText: "GitHub",
  },
  {
    title: "File Explorer System",
    description: "A file management system with tree-based directory navigation.",
    link: "https://github.com/I-a-coder/FileExplorer.git",
    linkText: "GitHub",
  },
  {
    title: "COVID-19 Data Visualization",
    description: "Interactive data visualization using Python & Matplotlib.",
    link: "https://colab.research.google.com/drive/16VYKvpbvDyZLdtdzkDavNdrkRdSM9svQ?usp=sharing",
    linkText: "Colab",
  },
  {
    title: "Dr. Bite - Nutrition App",
    description: "A mobile nutrition tracking app with Firebase integration.",
    link: "https://github.com/I-a-coder/NeutritionistApp-Dr.Bite.git",
    linkText: "GitHub",
  },
  {
    title: "Stop Watch in Assembly",
    description: "A stop watch application developed in iapx88 Assembly.",
    link: "https://github.com/I-a-coder/StopWatch-assembly.git",
    linkText: "GitHub",
  },
  {
    title: "Ping Pong Game",
    description: "Physics-based game with collision detection.",
    link: "https://github.com/I-a-coder/PongGame.git",
    linkText: "GitHub",
  },
  {
    title: "Augmented Reality Navigation",
    description: "Indoor navigation using Immersal SDK.",
    link: "https://github.com/Haseeb-Farooq1/Indoor-Navigation-using-AR",
    linkText: "GitHub",
  },
];

function Projects() {
  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Projects
      </Typography>
      <Grid container spacing={4} className={styles.gridContainer}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              linkText={project.linkText}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import Sidenav from "../../layouts/Sidenav/Sidenav";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Experience.module.css";

const experiences = [
  {
    title: "Coding Intern",
    subtitle: "AICP Internship (Feb 2024 - Apr 2024)",
    description: "Completed intensive 8-week certified internship focusing on advanced C++ programming. Developed and implemented multiple software solutions using industry-standard practices. Collaborated with team members on complex programming challenges.",
    link: "#",
    linkText: "View Details"
  },
  {
    title: "Freelance Developer & Content Writer",
    description: "Implemented custom Data Structures solutions for diverse client requirements. Authored technical blogs and documentation with focus on clarity and accuracy. Managed multiple projects while meeting strict deadlines.",
    link: "#",
    linkText: "View Details"
  },
  {
    title: "Research Intern",
    subtitle: "Cloud Auto",
    description: "Researching AWS services for cloud optimization. Collaborating with team to deliver findings.",
    link: "#",
    linkText: "View Details"
  },
];

function Experience() {
  return (
    <>
      <Header />
      <Sidenav />
      <Box className={styles.container}>
        <Typography variant="h2" className={styles.title}>
          Professional Experience
        </Typography>
        <Grid container spacing={3} className={styles.gridContainer}>
          {experiences.map((exp, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <ProjectCard
                title={exp.title}
                description={exp.description}
                link={exp.link}
                linkText={exp.linkText}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Experience;
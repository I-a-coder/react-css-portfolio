import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Leadership.module.css";

const leadershipRoles = [
  {
    title: "Technical Lead",
    description: "Led a team of developers in implementing a file management system. Coordinated development efforts and ensured code quality standards.",
    link: "#",
    linkText: "View Details"
  },
  {
    title: "Project Manager",
    description: "Managed the development of a nutrition tracking app. Oversaw project timelines, resource allocation, and stakeholder communication.",
    link: "#",
    linkText: "View Details"
  },
  {
    title: "Team Lead",
    description: "Led a team in developing an AR-based navigation system. Facilitated team collaboration and technical decision-making.",
    link: "#",
    linkText: "View Details"
  }
];

function Leadership() {
  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Leadership Experience
      </Typography>
      <Grid container spacing={3} className={styles.gridContainer}>
        {leadershipRoles.map((role, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <ProjectCard
              title={role.title}
              description={role.description}
              link={role.link}
              linkText={role.linkText}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Leadership;
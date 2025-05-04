import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
    <Box
      sx={{
        background: "linear-gradient(135deg, #2a042a, #3b1040)",
        minHeight: "60vh",
        padding: "50px 0",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "#ff79c6",
          borderBottom: "2px solid #ff79c6",
          display: "inline-block",
          paddingBottom: "5px",
          marginBottom: "20px",
          fontSize: "2rem",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: 1200, margin: "30px auto 0 auto" }}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              elevation={6}
              sx={{
                backgroundColor: "#240e26",
                color: "#f5e6f7",
                borderRadius: "12px",
                boxShadow: "0px 5px 15px rgba(255, 20, 147, 0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 10px 25px rgba(189, 147, 249, 0.3)",
                },
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ color: "#ff79c6" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#bd93f9", mb: 2 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="outlined"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "#ff79c6",
                    color: "#ff79c6",
                    "&:hover": {
                      backgroundColor: "#ff79c6",
                      color: "#1a0b1d",
                    },
                  }}
                >
                  {project.linkText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
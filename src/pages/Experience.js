import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const experiences = [
  {
    title: "Coding Intern",
    subtitle: "AICP Internship (Feb 2024 - Apr 2024)",
    details: [
      "Completed intensive 8-week certified internship focusing on advanced C++ programming.",
      "Developed and implemented multiple software solutions using industry-standard practices.",
      "Collaborated with team members on complex programming challenges.",
    ],
  },
  {
    title: "Freelance Developer & Content Writer",
    details: [
      "Implemented custom Data Structures solutions for diverse client requirements.",
      "Authored technical blogs and documentation with focus on clarity and accuracy.",
      "Managed multiple projects while meeting strict deadlines.",
    ],
  },
  {
    title: "Research Intern",
    subtitle: "Cloud Auto",
    details: [
      "Researching AWS services for cloud optimization.",
      "Collaborating with team to deliver findings.",
    ],
  },
];

function Experience() {
  return (
    <Box
      sx={{
        textAlign: "center",
        background: "linear-gradient(135deg, #2a042a, #3b1040)",
        padding: "50px 0",
        minHeight: "60vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#ff79c6",
          borderBottom: "2px solid #ff79c6",
          display: "inline-block",
          paddingBottom: "5px",
          marginBottom: "20px",
          fontSize: "2rem",
        }}
      >
        Professional Experience
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 900, margin: "30px auto 0 auto" }}>
        {experiences.map((exp, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Paper
              elevation={4}
              sx={{
                backgroundColor: "#240e26",
                color: "#f5e6f7",
                borderRadius: "12px",
                boxShadow: "0px 5px 15px rgba(255, 20, 147, 0.3)",
                padding: "20px",
                marginBottom: "20px",
                textAlign: "left",
                border: "2px solid #bd93f9",
              }}
            >
              <Typography variant="h5" sx={{ color: "#ff79c6" }}>
                {exp.title}
              </Typography>
              {exp.subtitle && (
                <Typography variant="subtitle1" sx={{ color: "#bd93f9" }}>
                  {exp.subtitle}
                </Typography>
              )}
              <ul>
                {exp.details.map((item, i) => (
                  <li key={i} style={{ color: "#bd93f9" }}>{item}</li>
                ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Experience;
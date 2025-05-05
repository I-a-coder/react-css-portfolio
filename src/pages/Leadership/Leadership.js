import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const leaderships = [
  {
    title: "Founder & Lead",
    subtitle: "CODE CRUSHERS (2024 - Present)",
    details: [
      "Founded and manage a coding platform fostering technical skill development.",
      "Organized and led successful GitHub workshop sessions.",
    ],
  },
  {
    title: "Student Ambassador",
    subtitle: "Search Opal",
    details: [
      "Represent and promote technical initiatives within the academic community.",
      "Facilitate technical learning sessions and community engagement.",
    ],
  },
  {
    title: "AICP Society Member",
    details: [
      "Participate in AI research initiatives and event organization.",
      "Contribute to internship programs and technical workshops.",
    ],
  },
  {
    title: "Islamic Society Member",
    details: [
      "Create and manage digital media content for Islamic awareness.",
      "Organize and facilitate educational webinars.",
    ],
  },
  {
    title: "Kaar-e-Kamal Welfare Foundation",
    details: [
      "Conduct donation drives and case investigations.",
      "Manage data collection and stakeholder communication.",
    ],
  },
];

function Leadership() {
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
        Leadership & Community Initiatives
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 900, margin: "30px auto 0 auto" }}>
        {leaderships.map((item, idx) => (
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
                {item.title}
              </Typography>
              {item.subtitle && (
                <Typography variant="subtitle1" sx={{ color: "#bd93f9" }}>
                  {item.subtitle}
                </Typography>
              )}
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i} style={{ color: "#bd93f9" }}>{detail}</li>
                ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Leadership;
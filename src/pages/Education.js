import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const educationData = [
  {
    degree: "BSc in AI",
    institution: "ITU, Lahore",
    year: "2023 - 2027",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Queen Mary College, Lahore",
    year: "2021 - 2023",
  },
];

function Education() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px",
        background: "linear-gradient(135deg, #2a042a, #3b1040)",
        borderRadius: "10px",
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
        Education
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 500,
          margin: "30px auto 0 auto",
        }}
      >
        {educationData.map((item, idx) => (
          <Grid item xs={12} key={idx}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#240e26",
                padding: "20px",
                borderRadius: "10px",
                border: "2px solid #bd93f9",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#ff79c6", marginBottom: "5px" }}
              >
                {item.degree}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#bd93f9", fontSize: "1.1rem", margin: "5px 0" }}
              >
                {item.institution}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#f5e6f7",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                {item.year}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Education;
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";

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
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2a042a, #3b1040)",
        minHeight: "60vh",
        padding: "50px 0",
        textAlign: "center",
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
        Skills
      </Typography>
      <Box sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
        {skills.map((cat, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              backgroundColor: "#240e26",
              color: "#f5e6f7",
              borderRadius: "12px",
              boxShadow: "0px 5px 15px rgba(255, 20, 147, 0.3)",
              padding: "20px",
              marginBottom: "30px",
              textAlign: "left",
              border: "2px solid #bd93f9",
            }}
          >
            <Typography variant="h5" sx={{ color: "#ff79c6", mb: 2 }}>
              {cat.category}
            </Typography>
            {cat.items.map((item, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: "#bd93f9" }}>
                  {item.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  color={item.color}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#3b1040",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#ff79c6", float: "right" }}
                >
                  {item.value}%
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

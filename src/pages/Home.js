import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function Home() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2a042a, #3b1040)",
        padding: "80px 0",
        textAlign: "center",
        minHeight: "60vh",
      }}
    >
      <Avatar
        src="/assets/images/profile.jpg"
        alt="Profile Picture"
        sx={{
          width: 180,
          height: 180,
          border: "5px solid #ff79c6",
          boxShadow: "0px 0px 15px #ff79c6",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 0px 25px #ff79c6",
          },
          margin: "0 auto",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#ff79c6",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mt: 2,
        }}
      >
        Sadia Shafeeq
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: "#bd93f9", fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}
      >
        Crafting intelligent solutions with creativity.
      </Typography>
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Typography variant="h4" sx={{ color: "#ff79c6", borderBottom: "2px solid #ff79c6", display: "inline-block", pb: "5px", mb: "20px" }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Passionate about AI, development, and problem-solving. I build intelligent systems, develop full-stack solutions, 
          and explore emerging technologies. I love transforming ideas into impactful projects.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
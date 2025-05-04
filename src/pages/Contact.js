import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

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
        Contact Me
      </Typography>
      <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, textAlign: "left" }}>
        <Typography variant="body1" sx={{ color: "#ff79c6", mb: 1 }}>
          Email:{" "}
          <Link href="mailto:sadiashafeeq3333@gmail.com" sx={{ color: "#ff79c6" }}>
            sadiashafeeq3333@gmail.com
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ color: "#ff79c6", mb: 1 }}>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/sadia-shafeeq-a9bbb5299/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#ff79c6" }}
          >
            linkedin.com/in/sadia-shafeeq-a9bbb5299
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ color: "#ff79c6", mb: 3 }}>
          GitHub:{" "}
          <Link
            href="https://github.com/I-a-coder"
            target="_blank"
            rel="noopener"
            sx={{ color: "#ff79c6" }}
          >
            github.com/I-a-coder
          </Link>
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            background: "#240e26",
            borderRadius: "12px",
            border: "2px solid #bd93f9",
            p: 3,
            mt: 2,
          }}
        >
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Message sent!
            </Alert>
          )}
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            sx={{ input: { color: "#ff79c6" } }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            sx={{ input: { color: "#ff79c6" } }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            sx={{ textarea: { color: "#ff79c6" } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#ff79c6",
              color: "#1a0b1d",
              "&:hover": { bgcolor: "#bd93f9" },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
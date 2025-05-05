import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import { usePageTitle } from "../../context/PageTitleContext";
import styles from "./Contact.module.css";

function Contact() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Get setTitle from PageTitleContext
  const { setTitle } = usePageTitle();

  // Set page title when component loads
  useEffect(() => {
    setTitle("Contact");
  }, [setTitle]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to a server
      console.log("Form submitted:", formData);
      
      // Show success message
      setIsSubmitted(true);
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <Box component="section" className={styles.container}>
      <Typography variant="h2" component="h1" className={styles.title}>
        Contact Me
      </Typography>

      <Box className={styles.content}>
        {/* Contact Information */}
        <Box className={styles.contactInfo}>
          <Typography variant="body1" className={styles.link}>
            Email:{" "}
            <Link href="mailto:sadiashafeeq3333@gmail.com" className={styles.link}>
              sadiashafeeq3333@gmail.com
            </Link>
          </Typography>
          
          <Typography variant="body1" className={styles.link}>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/sadia-shafeeq-a9bbb5299/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              linkedin.com/in/sadia-shafeeq-a9bbb5299
            </Link>
          </Typography>
          
          <Typography variant="body1" className={styles.link}>
            GitHub:{" "}
            <Link
              href="https://github.com/I-a-coder"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              github.com/I-a-coder
            </Link>
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          {isSubmitted && (
            <Alert severity="success" className={styles.alert}>
              Message sent successfully!
            </Alert>
          )}

          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            className={styles.input}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            className={styles.input}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            className={styles.input}
          />

          <Button 
            type="submit" 
            variant="contained" 
            className={styles.button}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
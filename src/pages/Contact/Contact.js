import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "./Contact.module.css";

// Contact information data
const contactInfo = [
  {
    type: "Email",
    value: "sadiashafeeq3333@gmail.com",
    href: "mailto:sadiashafeeq3333@gmail.com"
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/sadia-shafeeq-a9bbb5299",
    href: "https://www.linkedin.com/in/sadia-shafeeq-a9bbb5299/"
  },
  {
    type: "GitHub",
    value: "github.com/I-a-coder",
    href: "https://github.com/I-a-coder"
  }
];

// Form validation schema
const validationSchema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters")
});

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      setIsSubmitted(true);
      formik.resetForm();
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  });

  const renderContactInfo = () => (
    <Box className={styles.contactInfo}>
      {contactInfo.map((info, index) => (
        <Typography key={index} variant="body1" className={styles.link}>
          {info.type}:{" "}
          <Link href={info.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {info.value}
          </Link>
        </Typography>
      ))}
    </Box>
  );

  const renderForm = () => (
    <Box component="form" onSubmit={formik.handleSubmit} className={styles.form}>
      {isSubmitted && <Alert severity="success" className={styles.alert}>Message sent successfully!</Alert>}

      {["name", "email", "message"].map((field) => (
        <div key={field}>
          <CustomInput
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            type={field === "email" ? "email" : field === "message" ? "textarea" : "text"}
            value={formik.values[field]}
            onChange={formik.handleChange}
            required
          />
          {formik.touched[field] && formik.errors[field] && (
            <Typography color="error" variant="caption" className={styles.errorText}>
              {formik.errors[field]}
            </Typography>
          )}
        </div>
      ))}

      <Button 
        type="submit" 
        variant="contained" 
        className={styles.button}
        disabled={formik.isSubmitting}
      >
        Send Message
      </Button>
    </Box>
  );

  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>Contact Me</Typography>
      <Box className={styles.content}>
        {renderContactInfo()}
        {renderForm()}
      </Box>
    </Box>
  );
}

export default Contact;
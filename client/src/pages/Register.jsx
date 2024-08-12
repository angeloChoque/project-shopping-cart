import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Alert,
  Paper,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ px: 4, py: 2, mt: 3, borderRadius: 5 }}>
        <Box>
          <Typography textAlign={"center"} mb={1} component="h1" variant="h4">
            Register
          </Typography>
          <Typography mb={3}>Please create your account.</Typography>
          <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
              agreeToTerms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                const response = await axios.post(
                  "http://localhost:5001/api/register",
                  values
                );
                if (response.status === 200) {
                  navigate("/login");
                  console.log(response.data);
                }
              } catch (error) {
                setErrors({ api: "Failed to register. Try again." });
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                {errors.api && <Alert severity="error">{errors.api}</Alert>}
                <Box mb={2}>
                  <InputLabel>User Name</InputLabel>
                  <Field
                    as={TextField}
                    fullWidth
                    id="userName"
                    name="userName"
                    autoComplete="userName"
                    autoFocus
                    helperText={touched.userName ? errors.userName : ""}
                    error={touched.userName && Boolean(errors.userName)}
                  />
                </Box>
                <Box mb={2}>
                  <InputLabel>Email</InputLabel>
                  <Field
                    as={TextField}
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                  />
                </Box>
                <Box mb={2}>
                  <InputLabel>Password</InputLabel>
                  <Field
                    as={TextField}
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                  />
                </Box>
                <Box mb={2}>
                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        name="agreeToTerms"
                        color="primary"
                        sx={{ transform: "scale(0.9)" }} 
                      />
                    }
                    label="I agree to the terms and conditions"
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                    }}
                  />
                  {touched.agreeToTerms && Boolean(errors.agreeToTerms) && (
                    <Typography fontSize={12} color="error">
                      {errors.agreeToTerms}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{ borderRadius: "10px" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    Create
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;

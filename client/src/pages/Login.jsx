import React from "react";
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
  Stack,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ px: 4, py: 2, mt: 5, borderRadius: 5 }}>
        <Box>
          <Typography textAlign={"center"} mb={2} component="h1" variant="h4">
            Sign In
          </Typography>
          <Typography mb={2}>Please Login to your account.</Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              axios.post("http://localhost:5001/api/login", values, { withCredentials: true }) 
                .then((response) => {
                  if (response.status === 200) {
                    console.log(response.data);
                    navigate("/");
                  }
                })
                .catch((error) => {
                  setErrors({
                    api: "Invalid email or password",
                  });
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                {errors.api && (
                  <Alert sx={{ mb: 1 }} severity="error">
                    {errors.api}
                  </Alert>
                )}
                <Box mb={2}>
                  <InputLabel>Email:</InputLabel>
                  <Field
                    as={TextField}
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                  />
                </Box>
                <Box mb={2}>
                  <InputLabel>Password:</InputLabel>
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
                <Stack direction={"column"}>
                  <Typography
                    sx={{ textDecoration: "none" }}
                    mb={1}
                    component={Link}
                    to={"/"}
                    variant="body2"
                  >
                    {" "}
                    Forgot your password?
                  </Typography>
                  <Typography
                    sx={{ textDecoration: "none" }}
                    mb={1}
                    component={Link}
                    to={"/register"}
                    variant="body2"
                  >
                    {" "}
                    create account
                  </Typography>
                </Stack>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

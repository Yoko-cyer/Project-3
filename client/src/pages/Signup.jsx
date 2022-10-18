import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {

  const navigate = useNavigate();
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmErrText, setConfirmErrText] = useState("");
  const [loading, setLoading] = useState(false);
  
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  // const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField 
        fullWidth 
        id="username" 
        label="user name" 
        margin="normal"
        name="username"
        required
        helperText={usernameErrText}
        error={usernameErrText !== ""}
        disabled={loading}
      />
      <TextField 
        fullWidth 
        id="password" 
        label="password" 
        margin="normal"
        name="password"
        type="password"
        required
        helperText={passwordErrText}
        error={passwordErrText !== ""}
        disabled={loading}
      />
      <TextField 
        fullWidth 
        id="confirmPassword" 
        label="confirm password" 
        margin="normal"
        name="confirmPassword"
        type="password"
        required
        helperText={confirmErrText}
        error={confirmErrText !== ""}
        disabled={loading}
      />
      <LoadingButton 
        sx={{ mt: 3, mb: 2}} 
        fullWidth 
        type="submit"
        loading={loading}
        color="primary"
        variant="outlined"
      >
        Create Account
      </LoadingButton>    
    </Box>
      <Button component={Link} to="/login">
        Do you already have an account? Log in
      </Button>
    </>
  );
};

export default Signup;



// const Register = () => {

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUsernameErrText("");
//     setPasswordErrText("");
//     setConfirmErrText("");

//     // get data from the front-end
//     const data = new FormData(e.target);
//     const username = data.get("username").trim();
//     const password = data.get("password").trim();
//     const confirmPassword = data.get("confirmPassword").trim();
//     console.log(username);
//     console.log(password);
//     console.log(confirmPassword);

//     let error = false;

//     if (username === "") {
//       error = true;
//       setUsernameErrText("Enter your username.");
//     }
//     if (password === "") {
//       error = true;
//       setPasswordErrText("Enter your password.");
//     }
//     if (confirmPassword === "") {
//       error = true;
//       setConfirmErrText("Enter your confirmed password.");
//     }
//     if (password !== confirmPassword) {
//       error = true;
//       setConfirmErrText("Password and confirmed password don't match.");
//     }
    
//     if (error) return;

//     setLoading(true);

//     // register api
//     try {
//       const res = await authApi.register({
//         username,
//         password,
//         confirmPassword
//       });
//       setLoading(false);
//       localStorage.setItem("token", res.token);
//       console.log("register successful");
//       navigate("/");
//     } catch (err) {
//       const errors = err.data.errors;
//       console.log(errors);
//       errors.forEach((err) => {
//         if (err.param === "username") {
//           setUsernameErrText(err.msg);
//         }
//         if (err.param === "password") {
//           setPasswordErrText(err.msg);
//         }
//         if (err.param === "confirmPassword") {
//           setConfirmErrText(err.msg);
//         }
//       });
//       setLoading(false);
//     }
//   };
 
// };

// export default Register
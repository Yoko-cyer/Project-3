import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {

  const navigate = useNavigate();
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmErrText, setConfirmErrText] = useState("");
  const [loading, setLoading] = useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    
  });

  const handleSubmit = async (e) => {
        e.preventDefault();
        setUsernameErrText("");
        setPasswordErrText("");
        setConfirmErrText("");
  }
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
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.addProfile.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <>
    
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      noValidate 
    >
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


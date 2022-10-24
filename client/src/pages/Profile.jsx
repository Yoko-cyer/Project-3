import React, { useState } from 'react';
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { UPDATE_USER } from '../utils/mutations';
import { QUERY_USERS } from '../utils/queries';
import { useMutation } from '@apollo/client';
import Auth from '../../src/utils/auth';

const Profile = () => {

  const [addUser, { error }] = useMutation(UPDATE_USER, {
    update(cache, { data: { addUser } }) {
      try {
        const { users } = cache.readQuery({ query: QUERY_USERS });
        
        cache.writeQuery({
          query: QUERY_USERS,
          data: { users: [addUser, ...users] },
        });
      } catch (e) {
        console.error(e);
      }
      
    },
  });
  // const [phonenumber, setPhonenumber] = useState("");
  // const [text, setText] = useState("");
  
  const [formState, setFormState] = useState({
    phonenumber: "", 
    introduction: "",
  });

  const handleChange = (event) => {
		const { id, value } = event.target;
		setFormState({
			...formState,
			[id]: value,
		});
	};
  
  // add data to user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
			variables: { ...formState },
		});
		const token = mutationResponse.data.addUser.token; //removed token
		Auth.getUser(token); //revised AuthService value
  };

  const navigate = useNavigate((event) => {
		event.preventDefault();
	});

  const success =() => {
		navigate('/dashboard')
	}


  return (
    <div>
      <h3>
        This is Profile page. you can edit your profile.
      </h3>
      <h4>Your phone number</h4>

      <TextField 
        fullWidth 
        id="phonenumber" 
        label="phonenumber" 
        margin="normal"
        name="phonenumber"
        required
        // helperText={usernameErrText}
        // error={usernameErrText !== ""}
        // disabled={loading}
      />
    

      <h4>Tell us about yourself.</h4>
      <TextField 
        fullWidth 
        id="introduction" 
        label="introduction" 
        margin="normal"
        name="introduction"
        required
        // helperText={usernameErrText}
        // error={usernameErrText !== ""}
        // disabled={loading}
      />
      

      <LoadingButton 
        sx={{ mt: 3, mb: 2}} 
        fullWidth 
        type="submit"
        // loading={loading}
        color="primary"
        variant="outlined"
        onSubmit={handleFormSubmit}
        onClick={success}
      >
        Add my profile
      </LoadingButton>
    </div>
  )
}

export default Profile
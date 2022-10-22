import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const Profile = () => {

  const [formState, setFormState] = useState({
    phonenumber: '',
    introduction: '',
    wanttobabysit: '',
    haslicense: '',
    howmuchexperience: '',
    candolightduties: '',
    candopickupdropoff: '',
    covidvaccinated: '',
    availabledays: ''
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <h3>
        This is Profile page. you can edit your profile.
      </h3>

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
      <h4>Will you be a baby sitter?</h4>
      <Checkbox {...label} />

      <h4>How long is your experience as a baby sitter?</h4>
      <TextField 
        fullWidth 
        id="experience" 
        label="your experience" 
        margin="normal"
        name="experience"
        required
        // helperText={usernameErrText}
        // error={usernameErrText !== ""}
        // disabled={loading}
      />
      <h4>Do you have your Blue card ?</h4>
      <Checkbox {...label} />

      <h4>Can you do light duties?</h4>
      <Checkbox {...label} />
      
      <h4>Can you do pick up and drop off?</h4>
      <Checkbox {...label} />
      
      <h4>Are you Covid vaccinated?</h4>
      <Checkbox {...label} />
      
      <h4>What are your available days?</h4>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Monday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Tuesday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Wedneday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Thursday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Friday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Saturday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Sunday" />
      </FormGroup>

      <LoadingButton 
        sx={{ mt: 3, mb: 2}} 
        fullWidth 
        type="submit"
        // loading={loading}
        color="primary"
        variant="outlined"
      >
        Create Account
      </LoadingButton>
    </div>
  )
}

export default Profile
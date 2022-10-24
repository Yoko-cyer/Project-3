import React from 'react';
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';


const Profile = () => {

  // const [formState, setFormState] = useState({
  //   phonenumber: '',
  //   introduction: '',
  //   wanttobabysit: '',
  //   haslicense: '',
  //   howmuchexperience: '',
  //   candolightduties: '',
  //   candopickupdropoff: '',
  //   covidvaccinated: '',
  //   availabledays: ''
  // });

  const [phonenumber, setPhonenumber] = useState("");

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <h3>
        This is Profile page. you can edit your profile.
      </h3>
      <h4>Your phone number</h4>

      <input 
        value={text} 
        onChange={(event) => setText(event.target.value)}  
        />
      <p>{text}</p>

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
      
      
      {/* <h4>What are your available days?</h4>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Monday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Tuesday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Wedneday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Thursday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Friday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Saturday" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Sunday" />
      </FormGroup> */}

      <LoadingButton 
        sx={{ mt: 3, mb: 2}} 
        fullWidth 
        type="submit"
        // loading={loading}
        color="primary"
        variant="outlined"
      >
        Add my profile
      </LoadingButton>
    </div>
  )
}

export default Profile
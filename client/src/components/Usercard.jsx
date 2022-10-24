import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Usercard = ({ users, title }) => {

  if (!users.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div className="flex-row justify-space-between my-4">
      <h3 className="text-primary">{title}</h3>
      {users &&
        users.map((user) => (

      <Card sx={{ minWidth: 275 }}>
        <CardContent key={user._id}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hello, I am a {user.username}.
          </Typography>
          <Typography variant="h5" component="div">
            {user.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            My phone number is {user.phonenumber}.
          </Typography>
          <Typography variant="body2">
            {user.introduction}
          </Typography>
          <Typography variant="body2">
            Here are my comments. 
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" component={Link} to="/singleuser/:id">View Comments</Button>
        </CardActions>
      </Card>
      ))}
    </div>

  );
  
}

export default Usercard
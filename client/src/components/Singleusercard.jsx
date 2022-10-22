import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const Singleusercard = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <h2>Learn more about {props.name}</h2>
      <p>
        This is a details of this user and comments.
      </p>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hello, I am a {props.role}.
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          I am avilable {props.avalabledays}.
        </Typography>
        <Typography variant="body2">
          {props.introduction}
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" component={Link} to="/singleuser/:id">View More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Singleusercard
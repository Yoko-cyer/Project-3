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
          I am avilable {props.availabledays}.
        </Typography>
        <Typography variant="body2">
          {props.introduction}
        </Typography>
        <Typography variant="body2">
          {howmuchexperience}
        </Typography>
        <Typography variant="body2">
          {covidvaccinated}
        </Typography>
        <Typography variant="body2">
          {haslicense}
        </Typography>
        <Typography variant="body2">
          Can you do light duties? {candolightduties}
        </Typography>
        <Typography variant="body2">
          Can you do pickup and drop off? {candopickupdropoff}
        </Typography>
        <Typography variant="body2">
          Here are my comments. 
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default Singleusercard
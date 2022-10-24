// Alice does it 

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Comment = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>

        <CardContent>
          <h2>
            This is a details of this {props.name} and comments.
          </h2>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hello, I am a {props.role}.
          </Typography>

          <Typography variant="h5" component="div">
            {props.name}
          </Typography>

          <Typography variant="body2">
            {props.introduction}
          </Typography>
          
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            I am avilable {props.availabledays}.
          </Typography>
          
          <Typography variant="body2">
            Here are comments. 
          </Typography>
        
        </CardContent>
      
      </Card>
    </div>
  )
}

export default Comment;
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Usercard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hello, I am a babysitter.
        </Typography>
        <Typography variant="h5" component="div">
          Yoko Ujihara
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          I am avilable Mondays.
        </Typography>
        <Typography variant="body2">
          I am very passionate baby sitter.
          I am very goood
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
  
}

export default Usercard
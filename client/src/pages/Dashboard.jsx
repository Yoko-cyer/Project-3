import React from 'react';
import Usercard from '../components/Usercard';
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Dashboard = () => {

  return (
    <div>
      <h1>This is dashboard</h1>

      <Usercard name={'Alice'}/>

      <Button component={Link} to="/">
        Go back to home
      </Button>
      
      <Button component={Link} to="/">
        Log out
      </Button>
    
    </div>
  );
};

export default Dashboard;

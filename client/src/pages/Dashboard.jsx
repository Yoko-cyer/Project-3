import React from 'react';
import Usercard from '../components/Usercard';
import { useQuery } from '@apollo/client'

const Dashboard = () => {


  return (
    <div>
      <h1>This is dashboard</h1>
      <Usercard/>
      
    </div>
  );
};

export default Dashboard;

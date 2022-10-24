import React from 'react';
import Usercard from '../components/Usercard';
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { QUERY_SINGLE_USER } from '../utils/queries';

// function createCard(user) {
  
//   return <Usercard 
//     key={user.id}
//     name={user.name} 
//     phonenumber={user.phonenumber} 
//     introduction={user.introduction} 
//   />
// }

const Dashboard = () => {
  
  const { loading, data, error } = useQuery(QUERY_SINGLE_USER);
  const user = data?.user || [];

  return (
    <div>
      <h1>This is dashboard</h1>

      {error && (<p className='text-danger'>{error}</p>)}

      {loading ? (
            <div>Loading...</div>
          ) : (
            <Usercard
              user={user}
              title="Here's my details."
            />
          )}
      {/* {user.map(createCard)} */}

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

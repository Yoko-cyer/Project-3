import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Singleusercard from '../components/Singleusercard';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';




const Singleuser = (props) => {
  
  // pass QUERY_SINGLE_USER object to useQuery
  // loading - property inside object indicating weather the query is running or not
  // data - the result of the query
  const { loading, data, error } = useQuery(QUERY_SINGLE_USER);
  // '?' is optional chaining operator
  const singleUser = data?.singleUser || []; 
  console.log({loading})
  
  return (
    
    <div>
    
      {error && (
        <p className='text-danger'>{error}</p>
      )}

      {loading ? (
            <div>Loading...</div>
          ) : (
            <Singleusercard name={singleUser.username}/>
          )}

            {/* <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            /> */}

      <Button variant="contained" component={Link} to="/dashboard">Go back to dashboard</Button>

    </div>
  )
}

export default Singleuser;
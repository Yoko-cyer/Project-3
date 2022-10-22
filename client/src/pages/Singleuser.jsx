import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Singleusercard from '../components/Singleusercard';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';




const Singleuser = (props) => {

  const { loading, data, error } = useQuery(QUERY_SINGLE_USER);
  const singleUser = data?.singleUser || [];

  return (

    <div>
    
      {error && <p className='text-danger'>{error}</p>}

      <Singleusercard name="Alice"/>
      <Button variant="contained" component={Link} to="/dashboard">Go back to dashboard</Button>

    </div>
  )
}

export default Singleuser;
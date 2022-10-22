import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Singleusercard from '../components/Singleusercard'

const Singleuser = (props) => {
  return (

    <div>
      <Singleusercard name="Alice"/>
      <Button variant="contained" component={Link} to="/dashboard">Go back to dashboard</Button>

    </div>
  )
}

export default Singleuser
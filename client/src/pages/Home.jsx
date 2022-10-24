import React from 'react';
import { Outlet, Link  } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, Button } from "@mui/material";
// import { useQuery } from '@apollo/client';


const Home = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box 
          sx={{
            marginTop: 2,
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}>
          Find a baby sitter and parents in need of their children's care
        </Box>
        <Outlet />
        <Button variant="contained" component={Link} to="/signup">Sign up</Button>
        <Button variant="contained" component={Link} to="/login">Login</Button>
        <Button variant="contained" component={Link} to="/profile">Create Profile</Button>
        <Button variant="contained" component={Link} to="/dashbord">Go to dashborad</Button>

      </Container>
    </div>
  )
}

export default Home

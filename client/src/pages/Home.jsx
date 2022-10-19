import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, Button } from "@mui/material";

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
        <Button variant="contained">Sign up</Button>
        <Button variant="contained">Login</Button>

      </Container>
    </div>
  )
}

export default Home

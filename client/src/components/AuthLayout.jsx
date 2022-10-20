import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

const AuthLayout = () => {
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
          
          
        </Box>
        <Outlet />

      </Container>
    </div>
  )
}

export default AuthLayout

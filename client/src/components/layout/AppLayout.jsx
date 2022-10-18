import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import notionLogo from "../../assets/images/notion-logo.png"
import Sidebar from '../common/Sidebar';

const AppLayout = () => {
  return (
    <div>
      <Box sx={{display: "flex"}}>
        <Sidebar/>
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          <Outlet/>

        </Box>
      </Box>
    </div>
  )
}

export default AppLayout
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Box, Typography } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffff',
        width: "100%",
        height: "100%",
        overflow: 'hidden',

      }}
    >
      <Link to="/admin/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s',
            borderBottom: '0.2px solid #e3f2fd',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 'none',
            width: '100%',
            height: '15Vh',
            color: '#9ec3ed  ',
            '&:hover': {
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#3EC1CC'
            },
          }}
        >
          <GridViewIcon sx={{ fontSize: '2.5rem' }} />
          <Typography variant="subtitle2">Dashboard</Typography>
        </Box>
      </Link>

      <Link to="/admin/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s',
            borderBottom: '0.2px solid #e3f2fd',

            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 'none',
            width: '100%',
            height: '15Vh',
            color: '#9ec3ed',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#3EC1CC'
            },
          }}
        >
          <PersonRoundedIcon sx={{ fontSize: '2.5rem' }} />

          <Typography variant="subtitle2">Orders</Typography>
        </Box>
      </Link>

      <Link to="/admin/add-items" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s',
            borderBottom: '0.2px solid #e3f2fd',

            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 'none',
            width: '100%',
            height: '15Vh',
            color: '#9ec3ed',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#3EC1CC'
            },
          }}
        >
          <PostAddIcon sx={{ fontSize: '2.5rem' }} />
          <Typography variant="subtitle2">Add Items</Typography>
        </Box>
      </Link>

      <Link to="/admin/view/customers" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s',
            borderBottom: '0.2px solid #e3f2fd',

            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 'none',
            width: '100%',
            height: '15Vh',
            color: '#9ec3ed',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#3EC1CC'
            },
          }}
        >
          <PersonRoundedIcon sx={{ fontSize: '2.5rem' }} />

          <Typography variant="subtitle2">Customers</Typography>
        </Box>
      </Link>


      <Link to="/admin/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s',
            borderBottom: '0.2px solid #e3f2fd',

            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 'none',
            width: '100%',
            height: '15Vh',
            color: '#9ec3ed',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#3EC1CC'
            },
          }}
        >
          <SettingsIcon sx={{ fontSize: '2.5rem' }} />

          <Typography variant="subtitle2">Settings</Typography>
        </Box>
      </Link>






      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s',
            borderBottom: '0.2px solid #e3f2fd',

            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 'none',
            width: '100%',
            height: '15Vh',
            color: '#9ec3ed',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#3EC1CC'
            },
          }}
        >
          <PowerSettingsNewIcon sx={{ fontSize: '2.5rem' }} />
          <Typography variant="subtitle2">Log Out</Typography>
        </Box>
      </Link>



    </Box>
  )
}

export default Sidebar;

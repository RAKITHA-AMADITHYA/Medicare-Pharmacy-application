import { Box, Card, Typography } from "@mui/material";
import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { Link } from "react-router-dom";
import hearticon from '../../assets/images/hearticon.png';
import logout from '../../assets/images/logout.png';
import cus from '../../assets/images/cus.png';
import ord from '../../assets/images/acc.png';
import set from '../../assets/images/set.png';
import hour from '../../assets/images/24h.png';


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
      <Link to="/user/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <LocalHospitalIcon sx={{ fontSize: '2.5rem' }} />
          <Typography variant="subtitle2">Medicine</Typography>
        </Box>
      </Link>

      <Link to="/user/my-orders" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <ShoppingCartIcon sx={{ fontSize: '2.5rem' }} />
          <Typography variant="subtitle2">My Orders</Typography>
        </Box>
      </Link>



      <Link to="/user/my-account" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <Typography variant="subtitle2">My Account</Typography>
        </Box>
      </Link>
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
        <SupportAgentRoundedIcon sx={{ fontSize: '2.5rem' }} />
        <Typography variant="subtitle2">Customer Care</Typography>
      </Box>

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
          <LogoutRoundedIcon sx={{ fontSize: '2.5rem' }} />
          <Typography variant="subtitle2">Log Out</Typography>
        </Box>
      </Link>


      
    </Box>
  )
}

export default Sidebar;

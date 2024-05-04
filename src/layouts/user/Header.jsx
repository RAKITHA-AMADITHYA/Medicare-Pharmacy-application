import { Avatar, Box, Grid, InputAdornment, TextField,Button, Fab } from "@mui/material";
import React, { useState } from 'react';
import Logo from '../../assets/images/medicare1.png';
import hour from '../../assets/images/24h.png';

import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
function Header() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    handleMenuClose(); // Close the menu after clicking "Logout"
  };



  return (
    <Box
      sx={{
        backgroundColor: '#ffff',
        boxShadow: 10,
        p: 1
      }}
    >

      <Grid container>


        <Grid item xs={2} isplay={'flex'} justifyContent={'center'}>
          <img src={Logo} width={'150px'} alt="" />
        </Grid>

        <Grid item xs={5} p={1} display={'flex'} justifyContent={'end'} alignItems={'center'}>
          <TextField fullWidth
            placeholder='Search ...'
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '35px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#add5e6',
                },
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#add5e6',
              },
              '& .MuiInputLabel-outlined': {
                color: '#add5e6', // Placeholder color
              },
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
            }}
          />
        </Grid>
       
        <Grid item xs={2} p={1} display={'flex'} justifyContent={'end'} alignItems={'center'} textAlign={'end'}>
<Link to={'/user/prescription'}>
<Button fullWidth variant="contained">Upload Prescription</Button>
     </Link>
     
        </Grid>

       

        <Grid item xs={2} p={1} display={'flex'} justifyContent={'end'}>
          <h4>Have A Good Day ! <br />John Doe</h4>
        </Grid>
        {/* 2,5,3,2,2 */}
        

        <Grid item xs={1} p={1} display={'flex'} justifyContent={'center'}>
          <Avatar></Avatar>
          
        </Grid>

      </Grid>



    </Box>
  )
}

export default Header;

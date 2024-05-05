import { Avatar, Box, Grid, InputAdornment, TextField, Button, Popover, Typography, Divider } from "@mui/material";
import React, { useState } from 'react';
import Logo from '../../assets/images/medicare1.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from "react-router-dom";
import inhailer from '../../assets/images/inhailer.png';


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

  // Popover state for shopping cart and message icons
  const [cartPopover, setCartPopover] = useState(null);
  const [messagePopover, setMessagePopover] = useState(null);

  const handleCartPopoverOpen = (event) => {
    setCartPopover(event.currentTarget);
  };

  const handleMessagePopoverOpen = (event) => {
    setMessagePopover(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setCartPopover(null);
    setMessagePopover(null);
  };

  const openCart = Boolean(cartPopover);
  const openMessage = Boolean(messagePopover);

  return (
    <Box
      sx={{
        backgroundColor: '#ffff',
        boxShadow: 10,
        p: 1
      }}
    >
      <Grid container>
        <Grid item xs={1} display={'flex'} justifyContent={'center'}>
          <Link to={"/admin/dashboard"}>
          <img src={Logo} width={'150px'} alt="" /></Link>
        </Grid>

        <Grid item xs={9} p={1} display={'flex'} justifyContent={'end'} alignItems={'center'}>
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

       

        

        <Grid item xs={2} p={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <h4>Have A Good Day ! <br />John Doe</h4>
          <Avatar></Avatar>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header;

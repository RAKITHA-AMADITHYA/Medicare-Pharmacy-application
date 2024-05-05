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
          <Link to={"/user/dashboard"}>
          <img src={Logo} width={'150px'} alt="" /></Link>
        </Grid>

        <Grid item xs={6} p={1} display={'flex'} justifyContent={'end'} alignItems={'center'}>
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

        <Grid item xs={2} p={1} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'end'}>
          <Link to={'/user/prescription'}>
            <Button fullWidth variant="contained">Upload Prescription</Button>
          </Link>
        </Grid>

        <Grid item xs={1} p={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Avatar sx={{ bgcolor: '#e3f0ff' }} onClick={handleMessagePopoverOpen}>
            <MessageIcon />
          </Avatar>
          <Popover
            open={openMessage}
            anchorEl={messagePopover}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            {/* Your message icon dropdown content here */}
            <Grid container p={3} display={'flex'} justifyContent={'space-between'} spacing={5}>
              <Grid item xs={2} display={'flex'} justifyContent={'center'}>

                <Avatar alt="Medicare" src="/static/images/avatar/1.jpg"></Avatar>
              </Grid>
              <Grid item display={'flex'} alignItems={'center'} xs={10}>

                <Typography variant="subtitle2">Your Order Has Delivered</Typography>
              </Grid>


              <Divider sx={{ my: 1, width: '100%', display: 'flex', justifyContent: 'center' }} />
            </Grid>

          </Popover>

          <Avatar sx={{ bgcolor: '#e3f0ff' }} onClick={handleCartPopoverOpen}>
            <ShoppingCartIcon />
          </Avatar>
          <Popover sx={{maxHeight:300,overflowY:'auto'}}
            open={openCart}
            anchorEl={cartPopover}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            {/* Your shopping cart icon dropdown content here */}
            <Grid container p={3} justifyContent="center">
              <Grid item xs={2} display="flex" justifyContent="center">
                <Avatar alt="Medicare" src={inhailer} />
              </Grid>
              <Grid item xs={7} display="flex" justifyContent="center" flexDirection="column" textAlign="center">
                <Typography variant="body1">SEROFLO-125 INHALER</Typography>
              </Grid>
              <Grid item xs={3} display="flex" justifyContent="center" alignItems={'start'}>
                <Typography variant="body1">650/=</Typography>
              </Grid>
              
            </Grid>
            
           
              <Link to={'/user/buy-now'} style={{textDecoration:'none'}}>
            <Grid item xs={12}m={1} display="flex" justifyContent="center">
                <Button fullWidth variant="outlined">Proceed to Checkout</Button>
              </Grid>
              </Link>
          </Popover>

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

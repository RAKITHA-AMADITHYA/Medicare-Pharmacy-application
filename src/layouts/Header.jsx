

import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, Button, Checkbox, Fade, FormControlLabel, Grid, IconButton, Modal, TextField, Typography, styled } from "@mui/material";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/medicare1.png';
import loginimg from '../assets/images/LPI.png';
import shadow from '../assets/images/shadow2.png';



function Header() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [personalAcc, setPersonalAcc] = useState(false);
  const [businessAcc, setBusinessAcc] = useState(false);
  const [loginSignup, setloginSignup] = useState(false);
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState('personal');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  const handleButtonClick = (type) => {
    setActiveButton(type);
  };


  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLoginToggle = () => {
    setLoginOpen(!loginOpen);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCloseLoginToggle = () => {
    setLoginOpen(false);
    setSignupOpen(false)
  };

  const handleSignupToggle = () => {
    setSignupOpen(!signupOpen);
  };

  const handleLoginSignupToggle = () => {
    setSignupOpen(!signupOpen);
    setLoginOpen(false)
  };

  const handleOtpToggle = () => {
    setSignupOpen(false);
    setOtpOpen(!otpOpen);

  };

  const handlePersonalAccToggle = () => {
    setOtpOpen(false);
    setPersonalAcc(!personalAcc);

  };

  const handleClosePersonalAccToggle = () => {
    setPersonalAcc(false);

  };

  const handleOpenPersonalAccToggle = () => {
    setBusinessAcc(false);
    setPersonalAcc(!personalAcc);

  };

  const handleBusinessAccToggle = () => {
    setPersonalAcc(false);
    setBusinessAcc(!businessAcc);

  };

  const handleCloseBusinessAccToggle = () => {
    setBusinessAcc(false);

  };

  const handleLinkClick = () => {
    setOpen(false); // Close the sidebar when a link is clicked
  };

  const LoginBtnOnclick=()=>{
    handleLoginClose();
    navigate( "/user/dashboard" )
  }

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
      }}
    >
      <Grid container p={1}>
        {/* Logo */}
        <Grid item xs={11} md={9} display={'flex'} justifyContent={'start'} alignItems={'center'} >
          <Link to="/">
            <img src={Logo} width={'30%'} alt="" />
          </Link>
        </Grid>






        <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} spacing={2} >
          <Button variant="outlined" onClick={handleLoginToggle} fullWidth  sx={{ marginRight: 2 }} >Login</Button>
          <Button variant="contained" fullWidth onClick={handlePersonalAccToggle}>Signup</Button>
        </Grid>



      </Grid>


      {/* Login Modal */}
      <Modal
        open={loginOpen}
        onClose={handleCloseLoginToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 3,
              minWidth: { xs: '300px', sm: '400px', md: '700px', lg: '850px', xl: '1000px' },

              borderRadius: 2,



            }}
          >
            <Grid item display={'flex'} justifyContent={'end'}>
              {/* Colse btn */}
              <IconButton onClick={handleCloseLoginToggle} color="primary" aria-label="add to shopping cart">
                <CloseIcon />
              </IconButton>
            </Grid>

            <Grid container spacing={1} >
              {/* modal image */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'start'} alignItems={'start'}>
                <img src={loginimg} width={'90%'} alt="" />
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                <img src={shadow} heigh={'1px'} alt="" />
              </Grid>

              {/* Modal content */}
              <Grid item xs={11} sm={11} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'} alignContent={'center'} >

                <Box sx={{ backgroundColor: '#eceff1', borderRadius: 2, padding: 2, width: '100%' }} >
                  <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} >

                    <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} >
                      <img src={Logo} width={'50%'} alt="" />
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'} mt={2}>

                      <Typography variant='subtitle2'
                        sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                        Enter Email  <span style={{ color: '#0070C0' }}>*</span></Typography>
                      <TextField
                        id="outlined-basic"
                        // label="Tp Number"
                        variant="outlined"
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '35px', // Set the desired height
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#757575',
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'} mt={1}>

                      <Typography variant='subtitle2'
                        sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                        Enter Password  <span style={{ color: '#0070C0' }}>*</span></Typography>
                      <TextField
                        id="outlined-basic"
                        // label="Tp Number"
                        type='password'
                        variant="outlined"
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '35px', // Set the desired height
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#757575',
                          },
                        }}
                      />
                    </Grid>



                    <Grid container alignItems="center" justifyContent="space-between" >
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Remember Me"

                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="primary">Forgot Password?</Typography>
                      </Grid>
                    </Grid>






                    {/* <Link to={"/user/dashboard"}> */}
                      <Button fullWidth variant="contained" sx={{
                        mt: 5, '&:hover': { backgroundColor: 'primary.main' },
                        fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '14px', xl: '23px' }
                      }} onClick={LoginBtnOnclick} >Login</Button>
                      {/* </Link> */}






                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Fade>
      </Modal>


      {/*  register  Modal */}
      <Modal
        open={personalAcc}
        onClose={handleOtpToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={personalAcc}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 3,
              minWidth: { xs: '300px', sm: '400px', md: '900px', lg: '800px', xl: '1500px' },
              minHeight: { xs: '500px', sm: '400px', md: '500px', lg: '400px', xl: '600px' },
              maxHeight: { xs: '600px', sm: '500px', md: '50px', lg: '600px', xl: '600px' },
              overflowY: 'auto',  // Make the box scrollable if y-axis overflows
              borderRadius: 2,

              '&::-webkit-scrollbar': {
                width: '0 !important',  // Hide the scrollbar
              },
              '&::-webkit-scrollbar-thumb': {
                display: 'none',  // Hide the scrollbar thumb
              },
            }}
          >
            <Grid container>
              <Grid item xs={9} >
                <img src={Logo} width={'20%'} alt="" />
              </Grid>


              <Grid item xs={3} display={'flex'} justifyContent={'end'}>

                <IconButton onClick={handleClosePersonalAccToggle} color="primary" aria-label="add to shopping cart">
                  <CloseIcon />
                </IconButton>
              </Grid>




            </Grid>



            {/* Personal account Modal content */}
            <Grid container spacing={1} rowGap={1} mt={1}>

              {/*  First Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  First Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575', // Set the border color
                    }
                  }}
                />
              </Grid>

              {/*  Last Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Last Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/* Mobile Number field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Mobile Number <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575',
                    },
                  }}
                />
              </Grid>


              {/* Email  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Email  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/*  Street Address  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Street Address  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/*  City  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  City  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/*  NIC Number  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  NIC Number  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#757575',
                    },
                  }}
                />
              </Grid>



              {/*  Gender  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Gender  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '35px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                    },
                  }}
                />
              </Grid>


              {/* Terms & Conditions Checkbox */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} >
                <FormControlLabel
                  control={<Checkbox />}
                  label="I have read and agree to Terms & Conditions"
                />
              </Grid>

              {/* Submit btn */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'end'}>

                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleClosePersonalAccToggle}

                  sx={{
                    '&:hover': {
                      backgroundColor: '#1976d2', // Primary color
                    },
                  }}
                >
                  Signup
                </Button>
              </Grid>


            </Grid>








          </Box>
        </Fade>
      </Modal>




    </Box>
  );
}

export default Header;



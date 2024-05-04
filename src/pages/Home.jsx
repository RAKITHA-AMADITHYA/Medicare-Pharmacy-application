import React from 'react';
import { Grid, Typography, Button, Slider, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Landingimg from '../assets/images/LPI.png';
import about from '../assets/images/about.png';
import download from '../assets/images/download.png';
import download2 from '../assets/images/download.jpg';
import Lankahospitals from '../assets/images/Lanka-Hospitals.png';
import NinewellsLogo from '../assets/images/NinewellsLogo.jpg';
import hemas from '../assets/images/hema.png';
import siddha from '../assets/images/sidda2.jpeg';






const Home = () => {
  

  return (
    <div>
      {/* Section 1 */}
      <section style={{ backgroundColor: '#e3f0ff' }}>
        <Grid container p={1}>
          <Grid item lg={7} xl={7} p={4}>
            <Typography variant='h1' fontWeight={600} color={'#185FA0'} fontFamily={`poppins`}>
              Consult Top Pharmacists Online
            </Typography>
            <Typography variant='h6' sx={{ mt: 3 }} fontWeight={300} color={'#185FA0'} fontFamily={`poppins`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
              repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat
            </Typography>
            <Grid item mt={5}>
              <Button sx={{ width: '200px', height: '50px', fontSize: '16px' }} variant='outlined'>
                Upload Prescription
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={5} xl={5} display={'flex'} justifyContent={'start'} p={2}>
            <img src={Landingimg} width={'75%'} alt='' />
          </Grid>
        </Grid>
        
{/* Logo container */}
        <Grid container p={2} bgcolor={'white'}>
          <Grid item lg={2}>
          <img src={download} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2}>
          <img src={download2} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2}>
          <img src={Lankahospitals} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2}>
          <img src={NinewellsLogo} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2}>
          <img src={hemas} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2}>
          <img src={siddha} width={'50%'} alt='' />

          </Grid>

        </Grid>

      </section>
     
      {/* Section 2 */}
      {/*  */}

    </div>
  );
};

export default Home;

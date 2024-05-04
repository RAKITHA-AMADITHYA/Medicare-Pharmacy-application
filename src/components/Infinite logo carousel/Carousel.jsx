import React, { useEffect } from 'react';
import './Carousel.css';
import logo1 from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.jpg';
import { Grid } from '@mui/material';

const logos = [logo1, logo2, logo3];

const Carousel = () => {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide");
    document.querySelector(".logos");
  }, []);

  return (
    <Grid item lg={12} className="logos">
      <Grid className="logos-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} style={{ width: '50%' }} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Carousel;

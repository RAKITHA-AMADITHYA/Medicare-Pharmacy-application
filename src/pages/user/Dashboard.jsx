import React from 'react';
import Slider from 'react-slick';
import Card from '../../components/ContentCard/Card3';
import Heart from '../../assets/images/heart4.png';
import ent from '../../assets/images/ear2.png';
import eye from '../../assets/images/eye3.png';
import device from '../../assets/images/items.png';
import baby from '../../assets/images/baby2.png';
import vita from '../../assets/images/vita2.png';
import nurology from '../../assets/images/brain.png';
import firstaid from '../../assets/images/firstaid1.png';

import skin from '../../assets/images/skin3.png';
import inhailer from '../../assets/images/inhailer.png';
import { Grid } from '@mui/material';
import ItemCard from '../../components/ContentCard/ItemCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../../assets/images/banner2.jpg'
import Banner2 from '../../assets/images/banner3.png'
import Banner3 from '../../assets/images/banner4.png'



const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>      <div style={{overflowX:'hidden',overflowY:'hidden'}}>
        <Slider  {...settings}>
          <div> <img src={Banner1} alt="" /></div>
          <div> <img src={Banner3} alt="" /></div>
          <div> <img src={Banner2} alt="" /></div>
          <div> <img src={Banner3} alt="" /></div>
          <div> <img src={Banner1} alt="" /></div>
          <div> <img src={Banner3} alt="" /></div>


          
        </Slider>
      </div>

      <div style={{
        padding: 20, display: 'flex', gap: 10, maxWidth: '100vw', overflowX: 'auto ',
        scrollbarWidth: 'none', msOverflowStyle: 'none', /* Internet Explorer 10+ */
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      }}>
        <Card img={nurology} name="Neurology" color="#fed1de" w='80' />
        <Card img={ent} name="ENT" color="#f0dafc" w='108' />
        <Card img={eye} name="Eye" color="#fed1de" w='80' />
        <Card img={Heart} name="Heart" color="#e3f0ff" w='65' />
        <Card img={device} name="Health Devices" color="#fed1de" w='80' />
        <Card img={baby} name="Baby Items" color="#f0dafc" w='75' />
        <Card img={vita} name="Vitamins" color="#e3f0ff" w='78' />
        <Card img={skin} name="Skin Care" color="#fed1de" w='80' />
        <Card img={firstaid} name="First Aid" color="#f0dafc" w='80' />

      </div>




      <Grid container p={3} spacing={2}>
        <Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid>
        <Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid><Grid item md={3}>
          <ItemCard img={inhailer} />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;

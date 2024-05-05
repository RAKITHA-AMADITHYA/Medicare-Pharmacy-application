import React from 'react';
import baby from '../../assets/images/baby2.png';
import nurology from '../../assets/images/brain.png';
import ent from '../../assets/images/ear2.png';
import eye from '../../assets/images/eye3.png';
import firstaid from '../../assets/images/firstaid1.png';
import Heart from '../../assets/images/heart4.png';
import device from '../../assets/images/items.png';
import muscels from '../../assets/images/muscels1.png';
import vita from '../../assets/images/vita3.png';
import Card from '../../components/ContentCard/Card3';


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import skin from '../../assets/images/skin3.png';

const InsideHeader = () => {
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
    <>
        

      <div style={{
        padding: 20, display: 'flex', gap: 10, maxWidth: '100vw', overflowX: 'auto ',
        scrollbarWidth: 'none', msOverflowStyle: 'none', /* Internet Explorer 10+ */
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      }}>
        <Card img={Heart} name="Heart" color="#e3f0ff" w='65' path="/user/medicine/heart"/>
        <Card img={eye} name="Eye" color="#fed1de" w='80'path="/user/medicine/eye" />
        <Card img={ent} name="ENT" color="#f0dafc" w='108' path="/user/medicine/ent" />
        <Card img={vita} name="Vitamins" color="#e3f0ff" w='102' path="/user/medicine/vitamin" />
        <Card img={nurology} name="Neurology" color="#fed1de" w='80' path="/user/medicine/nurology" />
        <Card img={baby} name="Baby Items" color="#f0dafc" w='75' path="/user/medicine/baby-items" />
        <Card img={muscels} name="Muscels & Joints" color="#e3f0ff" w='66' path="/user/medicine/muscels"/>
        <Card img={skin} name="Skin Care" color="#fed1de" w='80'path="/user/medicine/skincare" />
        <Card img={firstaid} name="First Aid" color="#f0dafc" w='80'path="/user/medicine/firstaid" />
        <Card img={device} name="Health Devices" color="#e3f0ff" w='80' path="/user/medicine/health-devices"/>


      </div>
    </>
  )
}

export default InsideHeader

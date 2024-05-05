import { Box, Button, Card, Fab, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import inhailer from '../../assets/images/inhailer.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Logo from '../../assets/images/medicare1.png';
import { Link } from 'react-router-dom';


const ItemCard = ({ img ,category,rating,name,price,disabled,active}) => {
  const [openModal, setOpenModal] = useState(false);
  // 

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleLink = () => {
<Link to={'/user/buy-now'}/>

};

  return (
    <div>
      <Card sx={{ borderRadius: 2, boxShadow: 3,minHeight:'250px',maxHeight:'250px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={img} width={'50%'} alt="" />
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            margin: 5, borderTopRightRadius: 5, borderTopLeftRadius: 5, color: '#455a64',padding:2
          }}>
            
            <h5>{category}</h5>
            <h5>⭐({rating})</h5>
          </div>
          <div style={{ display: 'flex', margin: 5, color: '#455a64' }}>
            <h4>{name}</h4>
          </div>
          <div style={{ display: 'flex', margin: 5, justifyContent: 'space-between', color: '#455a64' }}>
            <h2 style={{ marginTop: 5,color:'#28aadc' }}>{price}<span style={{fontSize:15,color:'red'}}> {active}</span> </h2>
            <Fab disabled={disabled} bg="#e3f0ff" aria-label="add" style={{ width: '40px', height: '30px' }} onClick={handleOpenModal}>
              <AddShoppingCartIcon />
            </Fab>
          </div>
        </div>
      </Card>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ position: 'absolute', background: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, padding: 10, borderRadius: 20 }}>

          <div style={{ display: 'flex',justifyContent:'space-between'}}>
            <img src={Logo} width={"20%"} alt="" />
            <Fab color=""  aria-label="add" style={{ width: '40px', height: '30px' }} onClick={handleCloseModal}>
              <CloseIcon />
            </Fab>
          </div>
          <Grid container mt={2}>
            <Grid item xs={5}>
              <Box sx={{ borderRadius: 5, display: 'flex', justifyContent: 'center', border: '3px solid #e3f0ff' }}>
                <img src={inhailer} width={'90%'} alt="" />
              </Box>
            </Grid>
            <Grid item xs={7} p={1}>
              <Typography variant='h4'>SEROFLO-125 INHALER</Typography>
              <Typography variant='h6'>⭐(4.5)  <span style={{ color: 'green' }}>Available</span></Typography>



              <Typography variant='h3' color={'#28AADC'}>LKR 650/=</Typography>
              <Typography variant='p' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequunturMaxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur</Typography>
              {/* <div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5,gap:10 }}> */}


              <Grid container mt={2}>
                <Grid item xs={2}>
                  <Button><AddIcon /></Button>

                </Grid>
                <Grid item xs={2}><TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '30px',
                      fontSize: '20px', // Set the font size to be big
                      textAlign: 'center', // Center-align the text
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                /></Grid>
                <Grid item xs={1}>
                  <Button sx={{ ml: 3 }}><RemoveIcon /></Button>

                </Grid>

              </Grid>


              {/* </div> */}
              <div style={{ width: '100%', display: 'flex', marginTop: 25,justifyContent:'start',gap:5}}>
                <Button full variant="outlined" onClick={handleCloseModal}>Add to Cart</Button>
                <Link to={'/user/buy-now'}  >
                <Button fullWidth variant="contained">Buy Now</Button>
</Link>

              </div>


            </Grid>

          </Grid>
        </div>
      </Modal>
    </div>
  )
}

export default ItemCard;

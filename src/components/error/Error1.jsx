import React from 'react'
import  BrokenImage  from '../../assets/brokenImg.png'
import  errorImg  from '../../assets/404img.png'

import { Grid ,Typography} from '@mui/material';

const Error1 = () => {
  return (
    <Grid item  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} textAlign={'center'}>
      <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img src={BrokenImage} width={'65%'} alt="" />
      </Grid>
      <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <img src={errorImg} width={'65%'} alt="" />

      </Grid>
      <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2}>
        <Typography variant='h3' color={'#0070C0'}>Oops! Page not Found</Typography>
      </Grid>
      


    </Grid>
  )
}

export default Error1

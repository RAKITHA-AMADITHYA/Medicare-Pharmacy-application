import { Grid } from '@mui/material'
import React from 'react'
import ItemCard from '../../../components/ContentCard/ItemCard'
import inhailer from '../../../assets/images/inhailer.png';

const BabyItems = () => {
  return (
    <Grid container p={3} spacing={2}>
      <Grid item md={3}>
        <ItemCard img={inhailer} category="Heart" rating="4.5" name="SEROFLO-125 INHALER" price="650/=" />
      </Grid>
    </Grid>

  )
}

export default BabyItems

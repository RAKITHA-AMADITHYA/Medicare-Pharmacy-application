import { Box, Grid } from '@mui/material'
import React from 'react'

const ContainerForm = (props) => {
  return (
    <Grid container justifyContent="center" alignItems="center" >
        <Box
    sx={{
      backgroundColor: 'white',
      borderRadius: 2,
      boxshadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%', // Full width on xs and sm screens
      height: '100%',
      p: 2,
      [`@media (min-width: 1280px)`]: {
        // 1280px is lg breakpoint
        width: '90%', // 60% width on lg and xl screens
      },
    }}
  >
        {props.children}
      </Box>
   </Grid>
  )
}

export default ContainerForm

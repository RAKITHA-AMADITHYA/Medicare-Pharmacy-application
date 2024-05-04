import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Dev from '../../assets/dev.gif'

const OnDeveloping = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" padding={4}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 5,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3
          }}
        >
          <img src={Dev} width={80} alt="" />
          <Typography variant='h5'>Sorry! Still Developing</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default OnDeveloping

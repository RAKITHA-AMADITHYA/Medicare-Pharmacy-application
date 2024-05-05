import React from 'react'
import ContainerForm from '../../components/ContainerForm/ContainerForm'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'

const Settings = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>
            <ContainerForm>
            <Typography sx={{ color: "#616161", mt: 1 }} variant='h5'>My Account</Typography>
              <Divider sx={{ my: 1,width:'40%' }} />
              <Grid container spacing={1} rowGap={1} mt={1}>

              {/*  First Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  First Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  defaultValue="John"                
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
                  defaultValue="Doe"
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
                  defaultValue="07712345678"
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
                  defaultValue="John@gmail.com"
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
                  defaultValue="56/1/A,Mahalwarawa road"
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

              {/*  City  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  City  <span style={{ color: '#0070C0' }}>*</span></Typography>
                  <TextField
                  id="outlined-basic"
                  defaultValue="Panadhura"
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

              {/*  NIC Number  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  NIC Number  <span style={{ color: '#0070C0' }}>*</span></Typography>
                  <TextField
                  id="outlined-basic"
                  defaultValue="123456789X"
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



              {/*  Gender  field */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Gender  <span style={{ color: '#0070C0' }}>*</span></Typography>
                  <TextField
                  id="outlined-basic"
                  defaultValue="Tp Number"
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


             

              {/* Submit btn */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'end'}>
                <Button
                  variant="contained"
                  disableElevation

                  sx={{
                    '&:hover': {
                      backgroundColor: '#1976d2', // Primary color
                    },
                  }}
                >
                 Save Changes
                </Button>
              </Grid>


            </Grid>
            </ContainerForm>
        </div>
    )
}

export default Settings

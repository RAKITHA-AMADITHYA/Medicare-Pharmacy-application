import React from 'react'
import ContainerForm from '../../components/ContainerForm/ContainerForm'
import { Button, Divider, Grid, TextField, Typography, Autocomplete } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import File from '../../assets/images/fileIcon.png'
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';

const AddItems = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });




    return (
        <div style={{ padding: 10 ,height:'80vh', display:'flex'}}>
            <ContainerForm>
                <Typography sx={{ color: "#00000", mt: 1 }} variant='h5'>Add Item</Typography>
                <Divider sx={{ my: 1, width: '40%' }} />
               


                <Grid container spacing={1} rowGap={1} mt={1}>

                    {/*  Item Name field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Item Name <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField
                            id="outlined-basic"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
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

                    
                    {/*  Category field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Category <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField
                            id="outlined-basic"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
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

                    

                   
                    {/*  Price field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Price <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField
                            id="outlined-basic"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                  height: '35px', // Set the desired height
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                  // borderColor: '#757575', // Set the border color
                                }
                              }}
                              InputProps={{
                                startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                              }}
                    
                            
                        />
                    </Grid>


                    {/*  Stock Count field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Stock Count <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField
                            id="outlined-basic"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
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
                    {/*  Ratings field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Ratings <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField
                            id="outlined-basic"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
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


                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Description  <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={5}


                        />


                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} flexDirection={'column'} >
                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Upload Image <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <Button fullWidth
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <img src={File} width={'20%'} alt="" />
                        </div>
                    </Grid>


                    

                    {/* Submit btn */}
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'end'}>
                       
                       <Link to={'/admin/dashboard'}>
                        <Button
                            variant="contained"
                            disableElevation

                            sx={{
                                '&:hover': {
                                    backgroundColor: '#1976d2', // Primary color
                                },
                            }}
                        >
                            Add Item
                        </Button></Link>
                    </Grid>


                </Grid>
            </ContainerForm>
        </div>
    )
}

export default AddItems

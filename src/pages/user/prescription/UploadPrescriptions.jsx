import React from 'react'
import ContainerForm from '../../../components/ContainerForm/ContainerForm'
import { Button, Divider, Grid, TextField, Typography, Autocomplete } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import File from '../../../assets/images/fileIcon.png'
import { Link } from 'react-router-dom';

const UploadPrescriptions = () => {
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
        <div style={{ padding: 10 }}>
            <ContainerForm>
                <Typography sx={{ color: "#00000", mt: 1 }} variant='h5'>Prescription Upload</Typography>
                <Divider sx={{ my: 1, width: '40%' }} />
                <Typography sx={{ color: "#616161", mt: 1 }} variant='p'>* Please upload an image of your medical prescription issued by a SLMC registered doctor.</Typography>
                <Typography sx={{ color: "#616161", mt: 1 }} variant='p'>* Prescription drugs will only be issued if a valid prescription image is provided.
                </Typography>


                <Grid container spacing={1} rowGap={1} mt={1}>

                    {/*  Frequency field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Frequency <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <Autocomplete
                            id="outlined-basic"
                            options={['One Time', 'On Going']}
                            defaultValue="One Time"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            fullWidth
                            
                        />
                    </Grid>

                    {/*  Fulfilment field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Fulfilment <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <Autocomplete
                            id="outlined-basic"
                            options={['Full', 'Partial']}
                            defaultValue="Full"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            fullWidth
                            
                        />
                    </Grid>

                    {/*  ok field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            I am Ok to recive Substitutes <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <Autocomplete
                            id="outlined-basic"
                            options={['Yes', 'No']}
                            defaultValue="No"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            fullWidth
                           
                        />
                    </Grid>


                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Enter the prescription items and qty. Eg : Crestor 5mg – 10 Qty / Crestor 10mg – 10 Qty  <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={5}


                        />


                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} flexDirection={'column'} >
                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Upload Prescription file <span style={{ color: '#0070C0' }}>*</span></Typography>
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
                            <img src={File} alt="" />
                        </div>
                    </Grid>


                    {/*  Fulfilment field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Payment Options <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <Autocomplete
                            id="outlined-basic"
                            options={['Card Payment']}
                            defaultValue="Full"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            fullWidth
                            
                        />
                    </Grid>


                    {/*  Fulfilment field */}
                    <Grid item xs={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            I prefer receiving any refunds as <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <Autocomplete
                            id="outlined-basic"
                            options={['Cash', 'in-Store-Credit']}
                            defaultValue="Full"
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            fullWidth
                            
                        />
                    </Grid>


                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                            Default Shipping Address <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={1}
                            defaultValue={'56/1/A,Malwaththa Road,Mullegama,Kaluthara,0123456789'}

                        />


                    </Grid>

                    {/* Submit btn */}
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'end'}>
                       
                       <Link to={'/user/prescription'}>
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
                        </Button></Link>
                    </Grid>


                </Grid>
            </ContainerForm>
        </div>
    )
}

export default UploadPrescriptions

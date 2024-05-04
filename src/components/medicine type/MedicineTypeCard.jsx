import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const MedicineTypeCard = ({backColor,source,count,img,w,aline,h,mt,p,font}) => {
  return (
    <>
    <Grid item xs={12} lg={3} >
    <Card sx={{color:'#fff',backgroundColor:backColor,width:"100%",transition: 'box-shadow 0.3s',
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        },}} >
        <div style={{display:'flex'}}>
            <div style={{padding:10,flex:1}}>
                <Typography variant={font}>{source}</Typography>
                <Box display={'flex'} >
                <Typography variant='sub'>View items </Typography>
                </Box>
                <Typography variant='h3'flex={1} mt={3}>{count}</Typography>
            </div>
            <div   style={{ display:'flex',justifyContent:'center',mt:mt, padding:p,alignItems:{aline}}}   >
                <img src={img} width={w} height={h} alt="" />
            </div>

        </div>
    </Card>
    </Grid>
    </>
  )
}

export default MedicineTypeCard

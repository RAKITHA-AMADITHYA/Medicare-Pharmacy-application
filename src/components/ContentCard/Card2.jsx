import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Card2 = (props) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            container
            justifyContent="center"
            alignItems="start"
            flexDirection="column"
            textAlign={'start'}
        >
            <Box bgcolor={props.bgcolor} p={2} boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)">
                <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'}>

                    <img src={props.img} width={props.imgwidth} alt="" />
                </Grid>
                <Typography color={props.titleColor} variant="h5" mt={props.titlemt} sx={{ fontSize: { xs: '25px', sm: '25px', md: '20px', lg: '22px', xl: '28px' }, }} fontWeight={600}>{props.title}<br />{props.title2}</Typography>
                <Grid item mt={2}>
                    <Typography variant="subtitle1" color={props.desccolor} >
                        {props.description}

                    </Typography>


                </Grid>

                <Grid item mt={props.margintop} >
                    <Typography variant="subtitle1" color={props.linkcolor} >
                        Explore Now
                    </Typography>


                </Grid>
            </Box>
        </Grid>

    )
}

export default Card2

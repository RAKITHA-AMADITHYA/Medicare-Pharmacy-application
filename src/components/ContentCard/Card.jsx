import React from 'react'
import { Grid, Typography} from '@mui/material'

const Card = (props) => {
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
            alignItems="center"
            flexDirection="column"
          >
            <img src={props.img} width={'20%'} alt="" />
            <Typography mt={props.mt} variant="h5" sx={{ fontSize: { xs: '25px', sm: '25px', md: '20px', lg: '22px', xl: '28px' },mt:2 }} fontWeight={600}>{props.title}<br/>{props.title2}</Typography>
            <Grid item p={2}>
              <Typography variant="subtitle1" color={'#757575'} >
                {props.description}
                
               </Typography>
              

                </Grid>
          </Grid>
         

  )
}

export default Card

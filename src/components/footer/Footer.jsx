import { Box, Divider, Grid,  Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/Textware-Logo-Final-white.png'

const Footer = () => {
  return (
    <section style={{ background: '#5b001c' }}>
        <Grid container p={2}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
            <img src={logo} width={'30%'} alt="" />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
            <Typography variant='p' color={'white'} fontWeight={400}>Contact</Typography>
            <Typography variant='p' color={'white'} fontWeight={600}>(+94) 70 000 0000</Typography>


            <Typography variant='subtitle1' color={'white'} fontWeight={400} >Email</Typography>
            <Typography variant='subtitle1' color={'white'} fontWeight={600}>support@studiomojo.lk</Typography>
          </Grid>

        </Grid>
        <Divider sx={{ my: 2 }} />
        <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} spacing={2} p={1}>
          <Typography variant='p' color={'white'} fontWeight={400}>© 2023 StudioMojo</Typography>

        </Grid>

        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant='p' color={'white'} fontWeight={500}>Terms & Conditions</Typography>
          <Box mx={2} />
          <Typography variant='p' color={'white'} fontWeight={500}>Privacy Policy</Typography>
        </Grid>

        <Grid container justify="space-between" alignItems="end" justifyContent={'end'} spacing={5}>
          <Grid item>
            <FacebookIcon style={{ color: 'white' }} />
          </Grid>
          <Grid item>
            <YouTubeIcon style={{ color: 'white' }} />
          </Grid>
          <Grid item>
            <InstagramIcon style={{ color: 'white' }} />
          </Grid>
        </Grid>



      </section>
  )
}

export default Footer

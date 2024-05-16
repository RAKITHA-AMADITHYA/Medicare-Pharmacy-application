import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TotalCountCard from '../../components/ContentCard/TotalCountCard'
import ContainerForm from '../../components/ContainerForm/ContainerForm'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import IncomeCard from '../../components/ContentCard/IncomeCard';
import man from '../../assets/images/avatar2.png'
import Category from '../../assets/images/category.png'
import Orders from '../../assets/images/orders1.png'
import Pending from '../../assets/images/pending.png'



const Dashboard = () => {

  useEffect(() => {
    const map = L.map('map').setView([7.8731, 80.7718], 7); // Sri Lanka coordinates and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers or shapes to highlight areas like Colombo and Galle
    L.marker([6.9271, 79.8612]).addTo(map).bindPopup('Colombo');
    L.marker([6.0535, 80.2210]).addTo(map).bindPopup('Galle');
    L.marker([8.5874, 81.2152]).addTo(map).bindPopup('Trincomalee');
    L.marker([7.2906, 80.6337]).addTo(map).bindPopup('Kandy');
    return () => {
      map.remove();
    };
  }, []);
  return (
    <div style={{ height: '100%' }}>
      <Grid container p={3} spacing={2}>
        <TotalCountCard title="Customers" count="150" img={man} w={'50%'}/>
        <TotalCountCard title="Categories" count="10"  img={Category} w={'50%'}/>
        <TotalCountCard title="Today Orders" count="20" img={Orders} w={'80%'}/>
        <TotalCountCard title="Pending Orders" count="5" img={Pending}w={'50%'} />


      </Grid>

      <Grid container>
        <Grid item xs={12} md={6}>
          <ContainerForm>
            <Typography variant='h4' color={"#616161"}>Islandwide Branchers</Typography>
            <div id="map" style={{ height: '350px', width: '100%' }}></div>
          </ContainerForm>
        </Grid>
        <Grid item xs={12} md={6} p={2} mt={-2}>
          <Grid container spacing={'10'}>
            <IncomeCard title="Last Month Income" value="150000" data={[
              { name: 'Jan', value: 100 },
              { name: 'Feb', value: 240 },
              { name: 'Mar', value: 150 },
              { name: 'Apr', value: 250 },
              { name: 'May', value: 80 },
              { name: 'Jun', value: 800 },
            ]} />
            <IncomeCard title="Today Income" value="50000" data={[
              { name: 'Jan', value: 100 },
              { name: 'Feb', value: 240 },
              { name: 'Mar', value: 150 },
              { name: 'Apr', value: 250 },
              { name: 'May', value: 80 },
              { name: 'Jun', value: 800 },
            ]} />
            <IncomeCard title="Recived  Income" value="23000" data={[
              { name: 'Jan', value: 100 },
              { name: 'Feb', value: 240 },
              { name: 'Mar', value: 150 },
              { name: 'Apr', value: 250 },
              { name: 'May', value: 80 },
              { name: 'Jun', value: 800 },
            ]} />
            <IncomeCard title="Pending Income" value="5000" data={[
              { name: 'Jan', value: 100 },
              { name: 'Feb', value: 540 },
              { name: 'Mar', value: 150 },
              { name: 'Apr', value: 250 },
              { name: 'May', value: 2000 },
              { name: 'Jun', value: 800 },
            ]} />

          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
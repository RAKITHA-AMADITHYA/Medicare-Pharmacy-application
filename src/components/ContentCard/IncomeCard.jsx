import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

function IncomeCard({data, link, title, value, colour}) {

  return (
    <>
      <Grid item xs={6}  >
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Small box shadow
            }}
          >
            <div style={{padding:10}}>
               <Typography variant="h5">{title}</Typography>
            <Typography variant="h3">
              <CountUp end={value} duration={2} />
            </Typography>
            </div>
           

            <ResponsiveContainer width="100%" height={105}>
              <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill={colour} />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Link>
      </Grid>
    </>
  );
}

export default IncomeCard;

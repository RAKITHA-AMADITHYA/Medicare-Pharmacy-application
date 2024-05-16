import { Card, Fab, Grid, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';

const TotalCountCard = ({ title, count, img, w, aline, h, mt, p, font }) => {
    return (
        <>
            <Grid item xs={12} lg={3}>
                <Card sx={{
                    backgroundColor: "#4184c6",
                    width: "100%",
                    height:'120px',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                }}>
                    <div style={{ display: 'flex',alignItems:'center',height:'100%' }}>
                        <div style={{ padding: 10,flex:1 }}>
                            <Typography variant={'h6'} color={'#fff'}>{title}</Typography>
                            <Typography variant='h3' flex={1} color={'#fff'}>
                            <CountUp end={count} duration={2} />

                                </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                       <img src={img} width={w} alt="" />
                        </div>
                    </div>
                </Card>
            </Grid>
        </>
    );
};

export default TotalCountCard;

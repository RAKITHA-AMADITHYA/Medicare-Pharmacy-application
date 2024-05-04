import { Card, Typography } from '@mui/material';
import React from 'react';

const Card3 = ({ img, name, color, w }) => {
  return (
    <div>
      <Card style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'column',
        textAlign: 'center',
        background: color,
        padding: 10,
        width: '150px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }
      }}>
        <img src={img} width={w} alt="" />
        <Typography variant='subtitle1'>{name}</Typography>
      </Card>
    </div>
  );
}

export default Card3;

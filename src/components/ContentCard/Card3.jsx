import { Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Card3 = ({ img, name, color, w ,path}) => {
  return (
    <div>
      <Link to={path} style={{textDecoration:'none'}}>
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
        transition: 'transform 0.1s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(2.1)',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }
      }}>
        <img src={img} width={w} alt="" />
        <Typography variant='subtitle1'>{name}</Typography>
      </Card>
      </Link>
    </div>
  );
}

export default Card3;

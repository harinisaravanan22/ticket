import * as React from 'react';

import './Selection.css';
import "./Home.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from '@mui/material';
import { useState, } from "react";

import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

const Selection=()=> {
    const [Language, setLanguage] = useState("")
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
    const [Genres, setGenres] = React.useState('');
  
    const handleCh = (event) => {
      setGenres(event.target.value);
    };
    const [Location, setLocation] = React.useState('');
  
    const handleCha = (event) => {
      setLocation(event.target.value);
    };
  
  const cardImgStyle = {
    width:"670px",
    height:"340px",
  };


  return (
    <div>
    <div>
       
      </div>
    <div className='movies'>
      <div>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",textAlign:"center",backgroundColor:"black"}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent >
          <Typography   >
          <b  style={{color:"white"}}>Movie Name:</b><p style={{color:"white"}}>Hi Nana</p>
          <b  style={{color:"white"}}>Artists:  </b><p style={{color:"white"}}>Nani,Mrunal Thakur</p>
          <br/><br/>
          <Link className='seats' to='/seats' ><button >Tickets</button></Link>
          </Typography>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        style={cardImgStyle}
        image="data:image/jpeg;base64,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"
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",marginLeft:"700px",textAlign:"center",backgroundColor:"black"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent >
        
        <b style={{color:"white"}}>Movie Name:</b><p  style={{color:"white"}}>Animal</p>
        <b style={{color:"white"}}>Artists:  </b><p  style={{color:"white"}}>Ranbir kapoor,Raashmika mandhana</p>
        <br/><br/>
        <Link className='seats' to='/seats' ><button >Tickets</button></Link>
        
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      style={cardImgStyle}
      image="data:image/jpeg;base64,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"
      alt="Live from space album cover"
    />
  
    </Card>
   
    </div>
  </div>
  </div>
  );
}
export default Selection
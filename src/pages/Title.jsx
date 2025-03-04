import React from 'react';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './Title.css'

const Title = ({title,divideLineVisible}) => {
    return (
        <div>
            <div style={{
                display:'flex'
            }}>
            <h2 className='articletitle'>{title}</h2>
                <div className='homebutton'>
                <Link className='nameinside' to='/home'>
                <Button  variant='contained' sx={{
                    marginTop:'25px',
                    marginLeft:'auto',
                    backgroundColor:'rgba(188,71,77 ,1)',
                    color:'white',
                    fontFamily:'comicbold',
                    height:'30px',
                }}>
                    <HomeIcon color='white'></HomeIcon>
                    <div className='nameinside'>HOME</div>
                </Button>
                </Link>
                </div>
                <Link className='homeicon' to='/home'>
                    <HomeIcon className='homeicon'></HomeIcon>
                </Link>
            </div>
            <hr className='divideline' style={{
                marginTop:'-10px',
                display:divideLineVisible
            }}></hr> 
        </div>
        
      );
  };
  
  export default Title;


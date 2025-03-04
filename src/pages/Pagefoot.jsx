import React from 'react';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Pagefoot.css'

const Pagefoot=({towhere,date}) => {

    
    return (
    <div>
        <hr className='divideline'></hr>
        <div style={{display:'flex',width:'100%'}}>
        <Link className='itemname' to={towhere}>
        <Button variant='contained' sx={{
            backgroundColor:'rgba(188,71,77 ,1)',
            color:'white',
            fontFamily:'comicbold',
            height:'30px'
        }}>
            <ArrowBackIcon color='white'></ArrowBackIcon>
            
                <div className='itemname'>PREV</div>
        </Button>
        </Link>
        <center>
        <p className='publishdate'>&nbsp;&nbsp;&nbsp;Date of Publish:&nbsp;{date}</p>
        </center>
        </div>
    </div>
  );
}

export default Pagefoot;

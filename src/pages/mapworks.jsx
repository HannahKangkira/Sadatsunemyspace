import React from 'react';
import { Paper} from '@mui/material';
import {Link} from 'react-router-dom'
import './mapworks.css'
import Title from './Title';

function MapWorks() {

    return (
    <div>
        <Title title={'Map Works'}></Title>
        <Link to='/mapworks/lanzhou-beef-noodles-restraurants' style={{ textDecoration: 'none' }}>
        <Paper className='articletitlecontainer' elevation={5} sx={{
                backgroundImage:`
                            linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
                            url("/pics4bgs/title4.png")
                            `,
                backgroundSize:'100%',
                transition: 'background-color 0.5s ease', // 添加过渡效果
                '&:hover': {
                backgroundImage: `
                linear-gradient(rgba(255, 207,205 ,0.8), rgba(255, 207,205 ,0.8)),
                url("/pics4bgs/title4.png")`,
                },
            }}>
            
                <p style={{
                    fontFamily:'comicbold',
                    color:'rgba(59,90,155 ,1)'
                }}>
                    Map series 1: Thematic maps of Lanzhou Beef Noodles Restaurants in Lanzhou
                </p>
            </Paper>
            </Link>
            <div style={{height:'20px'}}></div>
    </div>
    
  );
}

export default MapWorks;

import React from 'react';
import {Paper} from '@mui/material';
import {Link} from 'react-router-dom';
import './gistechskills.css'
import Title from './Title';

function GISTechSkills() {

    return (
    <div>
        <Title title={'GIS Tech & Skills'}></Title>
        <div className='articlediv'>
        <Link to='/gis-tech-skills/calculate-direction-of-lines' style={{ textDecoration: 'none' }}>
            <Paper className='articletitlecontainer' elevation={5} sx={{
                backgroundImage:`
                            linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
                            url("/pics4bgs/title2.png")
                            `,
                backgroundSize:'100%',
                transition: 'background-color 0.5s ease', // 添加过渡效果
                '&:hover': {
                backgroundImage: `
                linear-gradient(rgba(255, 207,205 ,0.8), rgba(255, 207,205 ,0.8)),
                url("/pics4bgs/title2.png")`,
                },
            }}>
            
                <p style={{
                    fontFamily:'comicbold',
                    color:'rgba(59,90,155 ,1)'
                }}>
                    How to calculate direction of lines in QGIS
                </p>
            </Paper>
            </Link>
        </div>
        <div style={{height:'20px'}}></div>
    </div>
    
  );
}

export default GISTechSkills;

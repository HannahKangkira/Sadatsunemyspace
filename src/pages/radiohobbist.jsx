import React from 'react';
import {Paper} from '@mui/material';
import { Link} from 'react-router-dom';
import './radiohobbist.css'
import Title from './Title';

function RadioHobbist() {

    const titles = [
        "For beginners: How to Receive Weather Faxes?",
    ]

    const imagePaths = [
        '/pics4bgs/HF-Fax_20250101_0440.PNG',
    ];

    const links = [
        '/radiohobbyist/how-to-receive-wx',
    ]

    return (
    <div>
        <Title title={'Articles about My Hobby'}></Title>
        <div className='articlediv'>
        {titles.map((title, index) => (
            <Link to={links[index]} style={{ textDecoration: 'none' }}>
                <Paper className='articletitlecontainer' elevation={5} sx={{
                    backgroundImage:`
                        linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)),
                        url(${imagePaths[index]})
                    `,
                    backgroundSize:'100%',
                    // 添加过渡效果
                    '&:hover': {
                        backgroundImage: `
                        linear-gradient(rgba(255, 207,205 ,0.8), rgba(255, 207,205 ,0.8)),
                        url(${imagePaths[index]})`,
                        transition: 'background-image 0.5s ease'
                    },
                        marginTop:'10px'
                    }}>
                            
                    <p style={{
                        fontFamily:'comicbold',
                        color:'rgba(59,90,155 ,1)'
                    }}>{title}</p>
                </Paper>
            </Link>
        ))}
        </div>
        <div style={{height:'20px'}}></div>
    </div>
    
  );
}

export default RadioHobbist;

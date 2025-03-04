import React from 'react';
import {Paper} from '@mui/material';
import {Link} from 'react-router-dom';
import './others.css'
import Title from './Title';

function Others() {

    const titles = [
        "Several points most foreigners don't know about China.",
        "Why I don't write these articles (or post my contents) in Chinese?",
        'Pictures taken in Tibet.',
        'Sending emails using automatic script.'
    ]

    const imagePaths = [
        'pics4bgs/title1.png',
        'pics4bgs/title3.png',
        'pics4bgs/title5.png',
        'pics4bgs/title6.png'
    ];

    const links = [
        '/others/most-foreigners-dont-know',
        '/others/why-dont-write-in-chinese',
        '/others/tibet-pictures',
        '/others/automatic-emails',
    ]


    return (
    <div>
        <Title title={'Others'}></Title>
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

export default Others;

import React from 'react';
import {Grid2,Paper } from '@mui/material';
import './TIBP.css'
import FlagsContainer from './flagscontainer';
import Pagefoot from '../Pagefoot';
function TIBP() {

    const imageDescription = [
        'Mtsho Nag Lake. 4650m a.s.l. Mtsho Nag Lake Station(错那湖站, Cuonahu Station) is near the lake. This is one of the unmanned stations along the Qinghai-Tibet Railway. Including Dang La Station(唐古拉站).',
        'Nyainqêntanglha Mountain.',
        '1st platform of Lhasa Station.',
        'Potala palace. The pattern of the reverse side of the 50 CNY note is Potala Palace. It is possible to overlap the pattern with the real structure from a specified position.',
        'Bakar street. The street is near the Jokhang Temple. Its formation due to the existence of the temple, many people come from other places of Tibet so that created the needs of providing different kind of service',
        'Potala Palace. View from roof of Tibet Museum.',
        'Potala Palace. View from a junction nearby',
        'Inside of Norbu glingka(means treasure garden in English).',
        'Tibetan Opera.'
    ]

    const imagePaths = [
        '/tibetpic/1.jpg',
        '/tibetpic/2.jpg',
        '/tibetpic/3.jpg',
        '/tibetpic/4.jpg',
        '/tibetpic/5.jpg',
        '/tibetpic/6.jpg',
        '/tibetpic/7.jpg',
        '/tibetpic/8.jpg',
        '/tibetpic/9.jpg'
      ];

    return (
    <div>
        <center>
            <FlagsContainer/>
            <p className='articletitle'>Pictures I Taken in Tibet</p>
        </center>

        <Grid2 item xs={6} sm={4} md={3} >
            <center>
            {imageDescription.map((description, index) => (

                <Paper className="tibetimagebox" key={index} elevation={4}>
                    <img 
                        src={imagePaths[index]} 
                        alt={description} 
                        className="tibetimage" 
                        loading='lazy'
                    />
                    <p className='tibetpicdesc'>{description}</p>
                </Paper>
            ))}
            </center>
        </Grid2>
        <Pagefoot towhere={'/others'} date={'25 Jan 2025'}/>
    </div>
  );
}

export default TIBP;

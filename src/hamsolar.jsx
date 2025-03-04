import './hamsolar.css'
import { ArrowDownwardSharp } from '@mui/icons-material';
import {IconButton} from '@mui/material';
import React, { useState } from 'react'
import PubSub, { publish } from 'pubsub-js';
function HamSolar(){

    const [solarDisplay,setSolarDisplay] = useState('hidden')

    var messageSubscription = function (msg, data) {
        switch (msg) {
            case 'SHOWSOLAR':
                setSolarDisplay(data)
                break;
            default:
                break;
        }
    }

    PubSub.subscribe('SHOWSOLAR', messageSubscription);

    return(
        <div className='hamsolar' style={{visibility:solarDisplay}}>
            <p className='description' style={{
                fontFamily:'comicregular'
            }}>HF propagation</p>
            <center>
                <a href="https://www.hamqsl.com/solar.html" title="Click to add Solar-Terrestrial Data to your website!">
                    <img className='panel'src='https://www.hamqsl.com/solar101vhf.php'></img>
                </a>
            </center>
            <IconButton className="downbutton" onClick={()=>{
                publish('DROPDOWN', true);
                setSolarDisplay('hidden')
                publish('BUTVISIBLE')
            }}>
                <ArrowDownwardSharp></ArrowDownwardSharp>
            </IconButton>
        </div>
    );
    
}

export default HamSolar;
import { Slide,Alert,IconButton,styled} from '@mui/material';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import React, { useState } from 'react'
import PubSub from 'pubsub-js';
import {Link} from 'react-router-dom'
import './header.css'
import Paper from '@mui/material/Paper'

function Header(){

    const [showHeader,setShowHeader] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    const [showUpArrow, setShowUpArrow] = useState('visible')

    const CustomAlert = styled(Alert)(() => ({
        backgroundColor: 'rgba(255, 207, 205, 1)', 
        color: 'rgba(188,71,77,1)', 
        borderRadius:'10px',
        fontFamily:'comicbold'
    }));

    var messageSubscription = function (msg, data) {
        switch (msg) {
            case 'DROPDOWN':
                setShowHeader(data)
                break;
            case 'BUTVISIBLE':
                setShowUpArrow('visible')
            default:
                break;
        }
    }
    PubSub.subscribe('DROPDOWN', messageSubscription);
    PubSub.subscribe('BUTVISIBLE', messageSubscription);

    return(
        <div className='header'>
            <Slide direction="down" in={showHeader} timeout={400} mountOnEnter unmountOnExit>
                <Paper className="container1" elevation={5} square={false} sx={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
                        url("/banner.png")
                        `,
                    backgroundPosition: 'center',
                    backgroundSize:'100%'
                    }}>
                    <div className='imgdiv'>
                        <img src='/avatar.png' alt='Pls subscribe ShigureUi Ch. in YT! image credit: ShigureUi' style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={()=>{
                            setShowAlert(true)
                            setTimeout(() => { setShowAlert(false) }, 3000)}}>
                        </img>
                    </div>
                    <Link className='titlelink'  to='/home'>
                    <div className='titlediv'>
                        <p className='title1' >My Space</p>
                        <p className='title2'>A place for storing my memories.</p>
                    </div>
                    </Link>
                    
                    
                </Paper>
            </Slide>
            <Slide direction="down" in={showAlert} sx={{zIndex: 1000 }} mountOnEnter unmountOnExit>
                <CustomAlert className='subShigure' icon={false} >{
                    <center className='textshigure'>
                        Pls subscribe ShigureUi Ch. in YT!
                        <br></br>
                        🌈🌧关注时雨羽衣喵，关注时雨羽衣谢谢喵🌂
                    </center>
                }</CustomAlert>
            </Slide>
            
            <IconButton className='upbutton'sx={{
                visibility:showUpArrow
            }} onClick={()=>{
                PubSub.publish('SHOWSOLAR')
                setShowUpArrow('hidden')
                setShowHeader(false)
            }}>
                <ArrowUpwardSharpIcon></ArrowUpwardSharpIcon>
            </IconButton>
        </div>
    );
    
}

export default Header;

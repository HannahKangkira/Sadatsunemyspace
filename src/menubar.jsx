import {Paper,Button,MenuList,MenuItem,ListItemIcon, Slide} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RadioIcon from '@mui/icons-material/Radio';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import MapIcon from '@mui/icons-material/Map';
import FolderIcon from '@mui/icons-material/Folder';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import React, { useEffect, useState } from 'react'
import PubSub, { publish } from 'pubsub-js';
import './menubar.css'
import { NavLink,Link} from 'react-router-dom';

function Menubar(){

    const[showDirection,setShowDirection] = useState('right')
    const[showMenu,setShowMenu] = useState(true)
    const[sensorData,setSensorData]= useState()
    const[notice,setNotice] = useState('')
    const[test,setTest] = useState('')

    const getSensorData = async () => {
        try {
            const res = await fetch('https://api.sadatsunemyspace.uk/sensors')
            const data = await res.json();
            console.log('Received sensor data:', data);
            setSensorData(data)
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            setNotice("Error fetching sensor data: " + error.message);
        }
    };

    return(
        <div className='menu'>
            <Slide direction="right" in={true} timeout={400} mountOnEnter unmountOnExit>
                <Button className='menubutton' variant='contained'sx={{ 
                    backgroundColor:'rgba(255, 207,205 ,0.7)',
                    color:'rgba(188,71,77 ,1)',
                    fontFamily:'comicbold',
                    fontSize:'larger'
                }}onClick={()=>{
                    if(showMenu == true){
                        if(window.innerWidth<=600){
                            setShowDirection('left')
                        }
                        setShowMenu(false)
                        getSensorData()
                        if(window.innerWidth<=600){
                            publish('MOVEUP')
                        }
                    }else{
                        if(window.innerWidth<=600){
                            setShowDirection('right')
                        }
                        setShowMenu(true)
                        if(window.innerWidth<=600){
                            publish('MOVEDOWN')
                        }
                    }
                }}>
                    <MenuIcon></MenuIcon>
                    <p>Categories</p>
                </Button>
            </Slide>
            
            <Slide direction={showDirection} in={showMenu} timeout={400} mountOnEnter unmountOnExit>
            <Paper className='menupaper' sx={{
                backgroundColor:'rgb(198, 157, 158)'
            }}>
                <MenuList className='normalscr'>
                        <MenuItem>
                            <ListItemIcon>
                                <RadioIcon></RadioIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/radiohobbyist'>
                                    <div className='itemname'>Radio Hobbyist</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img className='chinapost' src='/post.svg'></img>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/stamps'>
                                    <div className='itemname'>Postal Stamps</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <AccountBalanceIcon></AccountBalanceIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/qslgallery'>
                                    <div className='itemname'>QSL Gallery</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <PublicIcon></PublicIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/gis-tech-skills'>
                                    <div className='itemname'>GIS Tech & Skills</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <MapIcon></MapIcon>
                            </ListItemIcon>
                            <Link className='itemname' to='/mapworks'>
                                <div className='itemname'>Map Works</div>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img className='quakeicon' src='/earthquake.svg'></img>
                            </ListItemIcon>
                            <Link className='itemname' to='/earthmoni'>
                                <div className='itemname'>Earthquake <br></br>Monitor (testing)</div>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <FolderIcon></FolderIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/others'>
                                    <div className='itemname'>Others</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <HomeRepairServiceIcon></HomeRepairServiceIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/tools'><div >Tools</div></Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <InfoIcon></InfoIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/about'><div >About</div></Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DraftsIcon></DraftsIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/contact'><div >Contact</div></Link>
                            </ListItemText>
                        </MenuItem>                
                </MenuList>
                <div className='smallscr'>
                <MenuList>
                    <MenuItem>
                            <ListItemIcon>
                                <RadioIcon></RadioIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/radiohobbyist'>
                                    <div className='itemname'>Radio Hobbyist</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img className='chinapost' src='/post.svg'></img>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/stamps'>
                                    <div className='itemname'>Postal Stamps</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <AccountBalanceIcon></AccountBalanceIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/qslgallery'>
                                    <div className='itemname'>QSL Gallery</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <PublicIcon></PublicIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/gis-tech-skills'>
                                    <div className='itemname'>GIS Tech & Skills</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <HomeRepairServiceIcon></HomeRepairServiceIcon>
                            </ListItemIcon>
                                <Link className='itemname' to='/tools'><div >Tools</div></Link>
                        </MenuItem>
                    </MenuList>
                    <MenuList sx={{
                        position:'absolute',
                        right:'0px'
                    }}>
                    <MenuItem>
                            <ListItemIcon>
                                <MapIcon></MapIcon>
                            </ListItemIcon>
                            <Link className='itemname' to='/mapworks'>
                                <div className='itemname'>Map Works</div>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img className='quakeicon' src='/earthquake.svg'></img>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/earthmoni'>
                                    <div className='itemname'>Earthquake <br></br>Monitor (testing)</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <FolderIcon></FolderIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/others'>
                                    <div className='itemname'>Others</div>
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <InfoIcon></InfoIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/about'><div >About</div></Link>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DraftsIcon></DraftsIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link className='itemname' to='/contact'><div >Contact</div></Link>
                            </ListItemText>
                        </MenuItem>
                    </MenuList>
                </div>
            </Paper>
            
            </Slide>
            <div className='sensors'>
                {sensorData ? (
                    <div >
                        <pre style={{
                            maxWidth: '100%',
                            overflowWrap: 'break-word',
                            whiteSpace: 'normal'
                        }}>Server Status<br/>
                            {new Date().toUTCString()}
                            <br/>CPU Temp(ISA Adapter)
                            <br/>&nbsp;&nbsp; - Core 0: {sensorData['coretemp-isa-0000']['Core 0']['temp2_input'] > 80 ? '🔴 High':'🟢 Normal'}
                            &nbsp;{sensorData['coretemp-isa-0000']['Core 0']['temp2_input']}°C
                            <br/>&nbsp;&nbsp; - Core 1: {sensorData['coretemp-isa-0000']['Core 2']['temp4_input'] > 80 ? '🔴 High':'🟢 Normal'}
                            &nbsp;{sensorData['coretemp-isa-0000']['Core 2']['temp4_input']}°C
                            <br/>ACPI Thermal Zone Temp: {sensorData['acpitz-acpi-0']['temp1']['temp1_input']}°C
                            <br/>Battery info(ACPI interface)
                            <br/>&nbsp;&nbsp; - Voltage: {sensorData['BAT0-acpi-0']['in0']['in0_input']}V
                            <br/>&nbsp;&nbsp; - Current: {sensorData['BAT0-acpi-0']['curr1']['curr1_input']}A 
                            <br/>Webpage was updated at 4 Mar 2025                   
                        </pre>
                        <Paper className='contactinfo' elevation={0}>
                            <center>
                            If you have any suggestions and questions
                            <br/>Please email to:
                            admin@sadatsunemyspace.uk
                            </center>
                        </Paper>
                    </div>
                    ) : (
                    <p>Loading sensor data...</p>
                    )}
            </div>
            <Slide direction="right" in={true} timeout={400} mountOnEnter unmountOnExit>
                <Paper className='statements' sx={{fontSize:'small'}}>
                    <center>
                        If you have any suggestions <br></br>
                        and questions<br></br>
                        Please email to: <br></br>
                        admin@sadatsunemyspace.uk
                    </center>
                </Paper>
            </Slide>
            
        </div>
    );
    
}

export default Menubar;

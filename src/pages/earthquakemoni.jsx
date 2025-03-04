import { Button } from '@mui/material';
import './about.css'
import Title from './Title';

function EarthquakeMoniEntrance(){

    return(
       <div style={{minHeight:'150px'}}>
            <Title title={'Earthquake Monitor (testing)'}></Title>
            <p className='nekopara' >
                The monitor currently under testing.
            </p>
            <p className='nekopara'style={{
                fontFamily:'comicbold',
            }}>
                Only Chinese version webpage is provided.
                <br></br>
                The accuracy of the data not guaranteed.
                <br></br>
                Application is not adapted for mobile devices
            </p>
            <Button variant='contained' sx={{
                fontFamily:'comicbold',
                backgroundColor:'rgba(188,71,77 ,1)',
            }}>
                <a style={{fontFamily:'comicbold',color:'white'}} href='https://earthquakemon.sadatsunemyspace.uk'>
                    MOVE FORWARD TO EARTHQUAKE MONITOR
                </a>   
            </Button>
            <p
                style={{
                    fontFamily: 'comicbold',
                    fontSize: 'medium',
                    color: 'rgba(59,90,155 ,1)',
                }}
            >Data credits</p>
            <p className='nekopara'>
                Earthquake points: USGS, CEIC, JMA, HKO, SCEW
                <br></br>
                Satellite map used in viewer: Bing.
            </p>
            <div className='uidiv'>
                <img className='uiimg'src='./monitorui.png'></img>
                <p style={{
                    fontFamily:'Times New Roman',
                    fontSize:'smaller',
                    fontStyle:'italic',
                    textAlign:'center',
                    color:'gray'
                }}>
                User interface of Earthquake monitor
            </p>
            </div>
           
       </div>
    );
    
}

export default EarthquakeMoniEntrance;
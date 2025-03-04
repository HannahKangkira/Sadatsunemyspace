import Title from './Title';
import './tools.css';
import {Link} from 'react-router-dom'
import { Card,CardMedia,Stack} from '@mui/material';
function Tools() {
   
    return (
        <div>
            <Title title={'Tools'}></Title>
            <div className='toolsrow'>
                <div className='toolcard'>
                    <Link to='/tools/postage-calculator' style={{ textDecoration: 'none' }}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="stamps"
                                image="/toolpic/pic1.jpg"
                            />
                            <Stack direction="row" alignItems="center" spacing={1} p={2} useFlexGap>
                                <h4 className='nekopara'>China Post International Ordinary Mail Rate Calculator</h4>
                            </Stack>
                        </Card>
                    </Link>
                </div>
                <div className='toolcard'>
                    <a href='https://cfips.sadatsunemyspace.uk' style={{textDecoration:'none'}}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="stamps"
                                image="/toolpic/pic2.jpg"
                            />
                            <Stack direction="row" alignItems="center" spacing={1} p={2} useFlexGap>
                                <h4 className='nekopara'>Cloudflare Premium IPs for Proxy<br/><br/></h4>
                            </Stack>
                        </Card>
                    </a>
                </div>
            </div>
            <div style={{height:'20px'}}></div>
        </div>
    );
}

export default Tools;

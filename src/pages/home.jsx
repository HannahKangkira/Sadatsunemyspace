import './home.css'
import { Box, Paper, Slide,Card,CardMedia,CardActionArea,CardContent,Typography} from '@mui/material';
import {Link} from 'react-router-dom'

function Home(){

    return(
       <div>
            <p className='articletitle'>Glad you dropped by! Welcome to my site!</p>
            <p className='nekopara' style={{

            }}>This site mainly demonstrate things related to my hobbies and you can view postal datestamps and part of QSLs I collected.
            Also some notes of GIS (Geographic Informtion Science, or Systems) tech field. Here you can see some of my map productions too.
                <br/>Hope you will enjoy it!</p>
            <hr className='divideline'></hr>
            
            <div className='latestarticles'>
                <p className='titlenewarticles'>Latest Articles</p>
                <div className='cards'>
                    <Link to='/radiohobbyist/how-to-receive-wx' style={{ textDecoration: 'none' }}>
                    <Card className='card' elevation={5} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/pics4bgs/HF-Fax_20250101_0440.PNG"
                        alt="fax pic"
                        />
                        <CardContent>
                        <h5 className='cardtitle' >
                            For beginners: How to Receive Weather Fax?
                        </h5>
                        <p className='carddetails' >
                            This is a guide for receiving weather fax using normal SSB radios or SDRs.
                        </p>
                        <p className='carddate' >
                            27 Dec 2024
                        </p>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Link>
                    <Link to='/gis-tech-skills/calculate-direction-of-lines' style={{ textDecoration: 'none' }}>
                        <Card className='card' elevation={5} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/pics4bgs/title2.png"
                            alt="road shp"
                            />
                            <CardContent>
                            <h5 className='cardtitle' >
                                How to calculate direction of lines in QGIS
                            </h5>
                            <p className='carddetails' >
                                Get to know how to get the direction of the roadsign in the footer of this site.
                            </p>
                            <p className='carddate' >
                                2 Jan 2025
                            </p>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Link>
                    <Link to='/others/most-foreigners-dont-know' style={{ textDecoration: 'none' }}>
                        <Card className='card' elevation={5} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/pics4bgs/title1.png"
                            alt="title"
                            />
                            <CardContent>
                            <h5 className='cardtitle'>
                                Several points most foreigners don't know about China.
                            </h5>
                            <p className='carddetails' >
                                Beware I said the word 'most', not all.
                            </p>
                            <p className='carddate' >
                                5 Jan 2025
                            </p>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Link>
                </div>
        </div>
        <center>
                <a href="https://info.flagcounter.com/swfV">
                <img style={{
                    maxWidth:'400px',
                    width:'88%'
                }}src="https://s01.flagcounter.com/count2/swfV/bg_FFFFFF/txt_000000/border_FFFFFF/columns_4/maxflags_16/viewers_0/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"/>
            </a>
        </center>
       </div>
    );
}

export default Home;
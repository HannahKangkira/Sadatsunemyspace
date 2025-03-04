import React from 'react';
import {Grid2, Paper} from '@mui/material';
import Pagefoot from '../Pagefoot';
import './LBNR.css'

function LBNR() {

    return (
    <div>
        <p className='articletitle' >Map series 1: Thematic maps of Lanzhou Beef Noodles Restaurants in Lanzhou</p>
        <hr className='divideline' ></hr>
        <p className='nekopara'>
            This serie of thematic maps is the work that awarded with first prize in 2023 Gansu Province College Students GIS Application Skills Contest (Mapping Category).
            <br></br>
            This set of maps based on the SIETP project I completed by myself in my school, analysis of the spatial distribution of Lanzhou Beef Noodles Restrauants in Lanzhou. The point is Beef Noodles is a famous cuicine in China, also means important to
            local people living in Lanzhou. Even the rises in prices of a bowl of noodles could make a headline in local newspapers. In this city, noodles restraurants are widely distributed too.
        </p>
        <Grid2 container spacing={'2vw'} >
            <Grid2 item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy" src='\maps\兰州牛肉面原材料来源.jpg' />
                    <p className='maptitle'>Map of material sources of Lanzhou Beef Noodles</p>
                </center>
              </Paper>
                <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\牛肉面的历史.jpg' />
                    <p className='maptitle'>History of Lanzhou Beef Noodles</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\兰州市牛肉面馆总体分布热力图.jpg' />
                    <p className='maptitle'>General distribution map of beef noodles restraurants in Lanzhou</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy" src='\maps\兰州主城区三大牛肉面馆分布核心区域图.jpg' />
                    <p className='maptitle'>Three core distribution area of beef noodles restraurants in downtown Lanzhou</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy" src='\maps\城关区牛肉面馆分布.jpg' />
                    <p className='maptitle'>Distribution map of beef noodles restraurants in Chengguan District</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy" src='\maps\七里河区牛肉面馆分布.jpg' />
                    <p className='maptitle'>Distribution map of beef noodles restraurants in Qilihe District</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\安宁区牛肉面馆分布.jpg' />
                    <p className='maptitle'>Distribution map of beef noodles restraurants in Anning District</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\兰州市拥有牛肉面馆最多的道路示意图.jpg' />
                    <p className='maptitle'>Roads neighboring the biggest quantity of beef noodles restraurants</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\兰州市牛肉面馆密度最大的道路示意图.jpg' />
                    <p className='maptitle'>Roads having most density of beef noodles restraurants</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\旅游景点周边牛肉面馆分布.jpg' />
                    <p className='maptitle'>Distribution of beef noodles restraurants around tourists attractions</p>
                </center>
              </Paper>
              <Paper className='mapcontainer' elevation={5}>
                <center>
                    <img className='mappic' loading="lazy"src='\maps\兰州市主城区居民区周边牛肉面馆数量图.jpg' />
                    <p className='maptitle'>Map of number of beef noodles restraurants distributed around residental areas in downtown of Lanzhou</p>
                </center>
              </Paper>
            </Grid2>
        </Grid2>
        <Pagefoot towhere={'/mapworks'} date={'27 Dec 2024'}/>
    </div>
    
  );
}

export default LBNR;

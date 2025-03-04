import React from 'react';
import './HRWF.css'
import { Table,TableContainer,TableCell,TableRow,TableBody,TableHead,Paper,Button } from '@mui/material';
import Pagefoot from '../Pagefoot';
function HRWF() {

    const handleClick = () => {
        window.location.href = 'https://www.weather.gov/media/marine/rfax.pdf'; // 跳转链接
    };

    return (
    <div>
        <center>
        <p className='articletitle'>How to Receive Weather Fax</p>
        </center>
        <hr className='divideline'></hr>

        <p>
            Have you ever think getting some images from HF radiowaves? Right, You've know SSTVs, that a form for HAMs to transmit their photos in
            a short time. Acturally there have another form of sending their images which is called radio fax(other places it is called WX). Undoubtly it an old tech but it can
            transmit clearer photos(in black and white or in greyscale) than SSTV.
        </p>
        <p >
            First, where should we get some information on these signals? A most recomended way is using NOAA's WORLDWIDE MARINE RADIOFACSIMILE BROADCAST SCHEDULES.
            In this you'll know the frequencies and schedule of each station including power, TX QTX and content of their maps. Despite this NOAA provided to us,
            Aoki tables and other mainstream shortwave frequency tables also mentioned weather fax frequencies, but not too much infomation given.
        </p>
        <center>
            <img className='pic1 'src='\hrwfpic\pic1.jpg' alt='noaafaxschedule' style={{
                maxWidth:'220px',
                maxHeight:'300px'
            }}onClick={handleClick}></img>
            <p className='imagetitle'>image credit: NOAA. (Click this image to view the schedule)</p>
        </center>
        
        <p >
            What mode should we use to pick up signals? Almost all opreating stations using USB(Upper Side Band) mode so all the radios with SSB are able to
            receive it. But not hurry to fetch your radios or power on your receivers. Let's see what a fax signal like.
        </p>
        <center>
            <img src='\hrwfpic\pic2.png' alt='faxsignal' style={{
                width:'220px',
                height:'120px'
            }}></img>
            <p className='imagetitle'>Fax signal</p>
        </center>
        <p >
            From the picture you see what the signal like in the spectrum. If you adjust receiving frequency to 3622.5 kHz which is given in the schedule, in USB mode you will only get white signal. So that's
            why you should adjust frequency 1.9 kHz lower for carrier signal that means cover all the signal bandwidth.
        </p>
        <p >
            Here's another question, what software is for decoding pictures? Here listed several softwares (they are freewares too).
        </p>
        <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Softwares</TableCell>
            <TableCell align="left">Link</TableCell>
            <TableCell align="left">My remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">JVComm32</TableCell>
              <TableCell align="left">jvcomm.de</TableCell>
              <TableCell align="left">Good for decoding pictures. Compare to KGFAX it have an English user interface and better at dealing with weak signals. Might performs better in fax DXing.
                You can use that without register, just to let your pictures having some 'Demo's. The software also enabling NOAA satellites and SSTV decoding abilities.
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">KGFAX</TableCell>
              <TableCell align="left">www2.plala.or.jp/hikokibiyori/soft/kgfax/index.html(NOT FOUND)</TableCell>
              <TableCell align="left">The user interface of this software is in Japanese. You need to find a English version yourself. No watermarks is good.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">FLDIGI</TableCell>
              <TableCell align="left">w1hkj.com</TableCell>
              <TableCell align="left">Multi functionalities. Good at decoding WX too.</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <center>
        <p></p>
        <a href='\hrwfpic\kgfax.zip' download='kgfax.zip'>
        <img className='pic1' src='\hrwfpic\pic3.png' alt='KGFAX_UI' style={{
            maxWidth:'300px',
            maxHeight:'200px'
        }}></img>
        </a>
        <p className='imagetitle'>User interface of KGFAX
            <br></br>
            Now the official website of KGFAX is closed. You can download that from my site(click picture above).
            <br></br>
            Copyright of this software belongs to its original author.
        </p>
    </center>
    
    <p >
        Good news for guys don't have a computer around you is you can decode fax signal with your smartphone. These apps avaliable in Google Play and iOS App Store. But nearly all of them aren't free apps.
    </p>
    <p >
        Followed is an introduction on how to receive weather fax using your radios with JVComm32. After JVComm32 installed, turn on your radios and follow these steps.
    </p>
    <p >
        1. Audio connection.
        <br></br>
        Connect your radio's audio output with a audio line to your computer's audio input. In most occasions you need a cable shown in the picture below. After that you may change settings
        in your decoding software. Every software have different ways of setting their audio inputs, but remind to set it up.
        <br></br>
        For SDRs like Airspy or SDRPlay, you'll need an virtural audio cable. Their acts a virtual pipe direct sound come from your SDR software to the fax decoder. Some softwares are free and some are not.
        <br></br>
        Once you set up audio input successfully, you'll see the volume level change on your computer when you adjust your radio's volume.
    </p>
    <center>
    <img className='pic1'src='\hrwfpic\pic6.jpg' alt='cable' style={{
            maxWidth:'200px',
            maxHeight:'300px'
        }}></img>
        
      <p className='imagetitle'>Audio cable</p>
    </center>
    <center>
    <img className='pic1'src='\hrwfpic\pic4.png' alt='JVComm32' style={{
            maxWidth:'300px',
            maxHeight:'70px'
        }}></img>
        <img src='\hrwfpic\pic5.png' alt='settingpanel' style={{
            width:'200px',
            height:'250px'
        }}></img>
      <p className='imagetitle'>Settings of audio input of JVComm</p>
    </center>
    <p >
        2. Adjust to the correct frequency.
        <br></br>
        If your receiver enables you to adjust frequency in decimal that will be easy to adjust to 1.9 kHz below the frequency shown on the table. Such as Tecsun PL330 and various SDRs.
        <br></br>
        If your receiver only have a SSB BFO at the side of your receiver, means you need to adjust it precisely. When you turn the knob, see the 'white' scale matched to white signal. Here are also some pictures help you understand what it should be.
        <br></br>
        eg. For Tecsun PL 660 and JMH fax at 7795 kHz, we usually adjust main frequency to 7794 kHz, then turn the BFO knob to an appropriate level.
    </p>
    <center>
    <img className='pic1' src='\hrwfpic\pic7.jpg' alt='cable' style={{
            maxWidth:'300px',
            maxHeight:'200px'
      }}></img>
      <p className='imagetitle'>Tecsun PL330 radio in USB mode</p>
      <img className='pic1' src='\hrwfpic\pic8.jpg' alt='cable' style={{
            maxWidth:'300px',
            maxHeight:'80px'
      }}></img>
      <p className='imagetitle'>SSB BFO</p>
    </center>
    <p >
        3. Start receiving.
        Just start decode now. You must noticed there are two parameters called IOC and LPM. In most of occasions default setting is IOC: 576 and LPM: 120. Leave two numbers alone here unless you want to receive KYODO News fax, turning down LPM to 60.
        <br></br>
        Weather map will come out automaticly. Usually it takes 10-20 min for receiving a complete picture.
        <br></br>
        Here are various fax station I received at my location.
    </p>
    <center>
      <img className='faxpic' src='\hrwfpic\pic9.webp' alt='faxpic'></img>
      <p className='imagetitle'>VMW Fax</p>
      <img className='faxpic' src='\hrwfpic\pic10.webp' alt='faxpic' ></img>
      <p className='imagetitle'>Thailand Meteorological Department 7395kHz</p>
      <img className='faxpic' src='\hrwfpic\pic11.png' alt='faxpic'></img>
      <p className='imagetitle'>JMH Fax 7795 kHz</p>
      <img className='faxpic' src='\hrwfpic\pic12.jpg' alt='faxpic' ></img>
      <p className='imagetitle'>NMC 8682kHz</p>
      <img className='faxpic' src='\hrwfpic\pic13.webp' alt='faxpic'></img>
      <p className='imagetitle'>DDK3</p>
      <img className='faxpic' src='\hrwfpic\pic14.png' alt='faxpic' ></img>
      <p className='imagetitle'>KVM-70 11090 kHz</p>
    </center>
    <Pagefoot towhere={'/radiohobbyist'} date={'27 Dec 2024'}/>
    </div>
    
  );
}

export default HRWF;

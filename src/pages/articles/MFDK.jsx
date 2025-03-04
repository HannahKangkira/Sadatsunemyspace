import React from 'react';
import './MFDK.CSS'
import Pagefoot from '../Pagefoot';
function MFDK() {

    return (
    <div>
        <div style={{width:'100%'}}>
            <center>
                <p className='articletitle'>Several Points Most Foreigners Don’t Know About China.</p>
            </center> 
        </div>
        <hr className='divideline'></hr>

        <p>
        1.	Mobile network.
        <br></br>
            Make sure you have international roaming data pack before you take your take your trip to China. Because your network will be routed to your internet provider. If you choose to get a data pack locally after you arrived in China, you probably find you disconnect to free internet. Facebook, Instagram, X, all of these service are unavailable because your network routes to Chinese ISP where have Great Fire Wall blocks all the internet traffic to those websites.
        </p>
        <p >
        2.	Currency.
        <br></br>
            China isn't a country you can change your currency freely because the foreign currency control, same for Chinese people too. The flow of CNY is controlled. When CNY take out of China, it will have a name called CNH (Chinese Yuan in Hong Kong) or offshore RMB. You can change money in banks in China where a green sign of Exchange at the outside of the bank. BOC, ABC, ICBC, CCB, these for banks are most big banks in China. They can provide you with reliable service.
        </p>
        <p >
        3.	Security Check.
        <br></br>
        In China at every train or metro stations have security checks. So make sure you’ll have some time for waiting in line.
        </p>
        <p >
        4.	Writing tools
        <br></br>
        Gel pens are popular in China while in western countries uses ballpoints because Chinese characters having more strokes
        </p>
        <p >
        5.  Bike lane.
        <br></br>
        In China there's a bike lane for electric motors and bicycles. Pavement usually for pedestrians only.
        </p>
        <p >
        6.  Tax.
        <br></br>
	    In other countries you’ll see there’s a VAT or consumption tax added to your bill. In China you will not see these things appear on your bills often. Government collect tax from merchants instead collect from consumers directly. There are many tax incomes government didn’t collect every year.
        </p>
        <p >
        7.	Regions are restricted for applying passport.
        <br></br>
	    Xinjiang, Qinghai, Tibet these three autonomous regions are main areas restrict people from getting a passport. Also some autonomous prefectures where minorities concentrates. Some places where people from these places are frequently found staying illegally in foreign countries are restricted too. Difficulty of getting a passport depends to where their household located. If a person moves their household from Xinjiang to Beijing, they will not have this restriction. 
        </p>
        <Pagefoot towhere={'/others'} date={'5 Jan 2024'}/>
    </div>
    
  );
}

export default MFDK;

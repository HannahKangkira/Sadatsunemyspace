import React from 'react';
import Pagefoot from '../Pagefoot';
import Codes from '../Codes';
import './CDL.css'
function CDL() {

    return (
    <div>
        <center>
        <p className='articletitle'>How to calculate direction of lines in QGIS</p>
        </center>
        <hr className='divideline'></hr>
        <p>
        First, input .shp file from the directory.
        </p>
        <p >
        Open the attribute table of this file, we'll see lines having same names. The next step is to dissolve these lines based on the value they have.
        </p>
        <p >
        Here using
        </p>
        <p >
        Vector -{'>'} Geoprocessing Tools -{'>'} Dissolve
        </p>
        <center>
            <img src='\cdlpic\pic1.png' alt='stepofdissolve' style={{
                maxWidth:'300px',
                maxHeight:'150px'
            }}></img>
            <p className='imagetitle'>Dissolve tool</p>
        </center>
        <p >
        Then select the field you want to dissolve. Then click OK. You’ll get an temporary layer which can be saved.
        </p>
        <center>
            <img src='\cdlpic\pic2.png' alt='templayer' style={{
                maxWidth:'250px',
                maxHeight:'100px'
            }}></img>
            <p className='imagetitle'>Temporary layer</p>
        </center>
        <p >
        Inspect new layer's attribute table. If everything is OK, you’ll notice each line have their unique value.
        </p>
        <center>
            <img src='\cdlpic\pic3.png' alt='dissolveresult' style={{
                maxWidth:'300px',
                maxHeight:'200px'
            }}></img>
            <p className='imagetitle'>Attribute table after dissolve</p>
        </center>
        <p >
        Second step we will start calculating the direction of these lines.
        </p>
        <p >
        Turn back to the attribute table we just opened. Click Organize Columns. At the same time we will create a new field to storage the calculation result. Select text as the data type.
        Based on the rules of definition of directions, we should modify python code.
        </p>
        <center>
            <img src='\cdlpic\pic4.png' alt='organizecolumns' style={{
                maxWidth:'250px',
                maxHeight:'120px'
            }}></img>
            <p className='imagetitle'>Organize Columns</p>
        </center>
        <Codes>
                CASE
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 0 AND 22.5 THEN '北'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 22.5 AND 67.5 THEN '东北'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 67.5 AND 112.5 THEN '东'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 112.5 AND 157.5 THEN '东南'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 157.5 AND 202.5 THEN '南'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 202.5 AND 247.5 THEN '西南'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 247.5 AND 292.5 THEN '西'
                <br/>
                WHEN degrees(azimuth(start_point($geometry), end_point($geometry))) BETWEEN 292.5 AND 337.5 THEN '西北'
                <br/>
                ELSE '北'
                <br/>
                END
        </Codes>
        
        <p >
        Copy these codes to Expression, then calculate. Finally there will be a new attribute table with calculate result.
        </p>
        <center>
            <img src='\cdlpic\pic5.png' alt='fieldcalculator' style={{
                maxWidth:'300px',
                maxHeight:'300px'
            }}></img>
            <p className='imagetitle'>Field calculator</p>
        </center>
        <center>
            <img src='\cdlpic\pic6.png' alt='result' style={{
                maxWidth:'300px',
                maxHeight:'230px'
            }}></img>
            <p className='imagetitle'>Attribute table(result)</p>
        </center>
        <Pagefoot towhere={'/others'} date={'2 Jan 2025'}/>
    </div>
    
  );
}

export default CDL;

import './footer.css'
import { useEffect, useState } from 'react';

function Footer(){

    const [chinesename,setChineseName] = useState('')
    const [englishname,setEnglishName] = useState('')
    const [direction1,setDirection1] = useState('')
    const [direction2,setDirection2] = useState('') 

    useEffect(() => {
        getRoadname()
    }, []);

    const getRoadname = async () => {
        const res = await fetch('https://api.sadatsunemyspace.uk/api/roadname', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        })
        
        const { data } = await res.json();
        data.map((road)=>{
            setChineseName(road.name)
            setEnglishName(road.trans)
            setDirection1(road.direction)

            switch (road.direction) {
            case '北':
                setDirection2('南')
                break;
            case '南':
                setDirection2('北')
                break;
            case '西':
                setDirection2('东')
                break;
            case '东':
                setDirection2('西')
                break;
            case '东北':
                setDirection2('西南')
                break;
            case '西北':
                setDirection2('东南')
                break;
            case '东南':
                setDirection2('西北')
                break;
            case '西南':
                setDirection2('东北')
                break;
            default:
                console.log('wrong direction');
            }
        })
        return
    }

    return(
        <div className='footer'>
            <div className='roadsign'>
                <center>
                    <p className='chinesename'>{chinesename}</p>
                    <p className='englishname'>◀&nbsp;{direction1}&nbsp;&nbsp;{englishname}&nbsp;&nbsp;{direction2}&nbsp;▶</p>
                </center>
            </div>
            <div className='statementss'>
                <center>
                <p>
                Copyright © Me 2024-2025.
                <br></br>
                Unless otherwise specified, the content of this website adopts the&nbsp;
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" style={{
                    color:'white'
                }}>
                CC BY-NC-SA 4.0
                </a> license.
                </p>
                </center>
            </div>
        </div>
    );
    
}

export default Footer;
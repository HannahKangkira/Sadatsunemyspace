import './calculator.css'
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material';

import { useState } from 'react';
import Title from '../Title';

function Calculator() {
    const [group, setGroup] = useState(undefined); // 使用状态管理 group
    const [weight, setWeight] = useState(''); // 使用状态管理 weight
    const [result, setResult] = useState(''); // 使用状态管理 result

    const airLetterGroupChange = (event) => {
        setGroup(parseInt(event.target.value, 10)); // 更新 group 状态
        console.log('Selected group:', event.target.value);
    };

    const weightChange = (event) => {
        setWeight(event.target.value); // 更新 weight 状态
        console.log('Weight:', event.target.value);
    };

    const Calculation = () => {
        let quotientWeight = 0;
        let remainderWeight = 0;
        let postage = 0;

        // 验证输入是否合法
        if (
            group === undefined ||
            weight === undefined ||
            isNaN(weight) ||
            parseFloat(weight) === 0 ||
            parseFloat(weight) > 2000 ||
            parseFloat(weight) < 0
        ) {
            setResult('Please input values correctly');
            return;
        }

        const letterWeight = parseFloat(weight);

        if (letterWeight > 20) {
            quotientWeight = Math.floor((letterWeight - 20) / 10);
            remainderWeight = (letterWeight - 20) % 10;

            if (remainderWeight > 0) {
                quotientWeight += 1;
            }
        }

        // 根据 group 计算邮资
        if (group === 1) {
            postage = 5 + quotientWeight;
        } else if (group === 2) {
            postage = 5.5 + quotientWeight * 1.5;
        } else if (group === 3) {
            postage = 6 + quotientWeight * 1.8;
        } else if (group === 4) {
            postage = 7 + quotientWeight * 2.3;
        }

        setResult(`Postage: ${postage} CNY. For Registered mail is ${postage+16} CNY`);
    };

    return (
        <div>
            <p className='articletitle' >
               China Post International Ordinary Mail Rate Calculator 
            </p>
            <hr className='divideline'/>
            <p style={{ fontFamily: 'comicregular' }}>
                As one of members of Fortune 500 club, China Post didn't make a English page for itself which is its
                duty, making calculation of rates of international mails and other domestic mails difficult for
                foreigners. Here I made a calculator for this usage. You can utilize it when need to calculate rates for
                your friends in China or you want send some mails to yourself from China.
            </p>
            <p
                style={{
                    fontFamily: 'comicbold',
                    fontSize: 'medium',
                    color: 'rgba(59,90,155 ,1)',
                }}
            >
                Air Letters
            </p>
            <p style={{ fontFamily: 'comicregular' }}>
                The rates of postage divided in to 4 groups. <br />
                Group 1: Some neighboring Asian countries (North Korea, Mongolia, Vietnam, Japan, South Korea,
                Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan, Turkmenistan);
                <br />
                Group 2: Other Asian countries or regions;
                <br />
                Group 3: European countries or regions
                <br />
                or the United States, Canada, Australia, New Zealand;
                <br />
                Group 4: Other countries or regions in the Americas, African countries or regions, and Oceania
                countries or regions.
            </p>
            <FormControl>
                <FormLabel sx={{
                    fontFamily:'comicbold'
                }}>Select where you want send your letter to:</FormLabel>
                <RadioGroup row onChange={airLetterGroupChange}>
                    <FormControlLabel value={1} control={<Radio className="radio" sx={{
                        '&.Mui-checked': {
                        color:'rgba(188,71,77 ,1)',
                        },
                    }} />} label="Group 1" />
                    <FormControlLabel value={2} control={<Radio className="radio"sx={{
                        '&.Mui-checked': {
                        color:'rgba(188,71,77 ,1)',
                        },
                    }}/>} label="Group 2" />
                    <FormControlLabel value={3} control={<Radio className="radio" sx={{
                        '&.Mui-checked': {
                        color:'rgba(188,71,77 ,1)',
                        },
                    }}/>} label="Group 3" />
                    <FormControlLabel value={4} control={<Radio className="radio" sx={{
                        '&.Mui-checked': {
                        color:'rgba(188,71,77 ,1)',
                        },
                    }}/>} label="Group 4" />
                </RadioGroup>
            </FormControl>
            <TextField
                label="Weight(in grams) of letter"
                sx={{ m: 1, width: '25ch',fontFamily:'comicregular'}}
                onChange={weightChange}
            />
            <div>
                <p style={{ fontFamily: 'comicregular' }}>{result}</p>
            </div>
            <Button onClick={Calculation} variant='contained' sx={{
                fontFamily:'comicbold',
                backgroundColor:'rgba(59,90,155 ,1)',
            }}>Calculate</Button>
        </div>
    );
}

export default Calculator;
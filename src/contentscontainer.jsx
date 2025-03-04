import { Paper } from '@mui/material';
import './contentscontainer.css'
import Home from './pages/home';
import Tools from './pages/tools';
import { Route, Routes ,Navigate} from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import EarthquakeMoniEntrance from './pages/earthquakemoni'
import PostalStamps from './pages/postalstamps';
import MapWorks from './pages/mapworks';
import RadioHobbist from './pages/radiohobbist';
import HRWF from './pages/articles/HRWF';
import QSLGallery from './pages/qslgallery';
import Others from './pages/others';
import MFDK from './pages/articles/MFDK';
import GISTechSkills from './pages/gistechskills';
import CDL from './pages/articles/CDL';
import WIWC from './pages/articles/WIWC';
import LBNR from './pages/articles/LBNR';
import TIBP from './pages/articles/TIBP';
import Calculator from './pages/tools/calculator';
import SEAS from './pages/articles/SEAS';

function ContentsContainer(){

    return(
        <div className='takemuchspace'>
            <Paper className="contentpaper" elevation={5}>
                <Routes>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/tools' element={<Tools/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/qslgallery' element={<QSLGallery/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/earthmoni' element={<EarthquakeMoniEntrance/>}></Route>
                    <Route path='/stamps' element={<PostalStamps/>}></Route>
                    <Route path='/mapworks' element={<MapWorks/>}></Route>
                    <Route path='/others' element={<Others/>}></Route>
                    <Route path='/gis-tech-skills' element={<GISTechSkills/>}></Route>
                    <Route path='/radiohobbyist' element={<RadioHobbist/>}></Route>
                    <Route path='/radiohobbyist/how-to-receive-wx' element={<HRWF/>}></Route>
                    <Route path='/others/most-foreigners-dont-know' element={<MFDK/>}></Route>
                    <Route path='/gis-tech-skills/calculate-direction-of-lines' element={<CDL/>}></Route>
                    <Route path='/others/why-dont-write-in-chinese' element={<WIWC/>}></Route>
                    <Route path='/mapworks/lanzhou-beef-noodles-restraurants' element={<LBNR/>}></Route>
                    <Route path='/others/automatic-emails' element={<SEAS/>}></Route>
                    <Route path='/others/tibet-pictures' element={<TIBP/>}></Route>
                    <Route path='/tools/postage-calculator' element={<Calculator/>}></Route>
                    <Route path='/' element={<Navigate to='/home'/>}></Route>
                </Routes>
            </Paper>
        </div>
    );
    
}

export default ContentsContainer;
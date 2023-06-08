import './index.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Quest from './Quest';
import Quiz from './Quiz';
import Result from './Result';
import Library from './Library';
import About from './About';

function Main() {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/quest' element={<Quest/>} />
                <Route path='*' element={<NotFound/>} />
                <Route path='/quest/quizler/:quizid' element={<Quiz/>} />
                <Route path='/sonuclar' element={<Result/>} />
                <Route path='/kutuphane' element={<Library/>} />
                <Route path='/hakkimizda' element={<About/>} />
            </Routes>
        </div>
    );
};

export default Main;
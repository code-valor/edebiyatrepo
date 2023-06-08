import './index.css';
import quizlist from './quiz.json';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Library() {

    useEffect(() => {console.log('render')})

    const navigate = useNavigate();

    return (
        <div className='library'>
            <img src="/yapimasamasinda.png" width={'80%'} style={{marginLeft: '9%', marginBlock: '2%', borderRadius: '5vh', borderColor: 'black', borderStyle: 'solid', borderWidth: '0.8vh'}} />
            
        </div>
        /*
        <div className='libakimlargrid'>
            <div className='libakimlaritem libakimlar-1'></div>
        </div>
        */
    );
};

export default Library;
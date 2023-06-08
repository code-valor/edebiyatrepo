import './index.css';
import quizlist from './quiz.json';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Quest() {

    useEffect(() => {console.log('render')})

    const navigate = useNavigate();

    const quizlerliste = [];

    quizlist.quizler.forEach((q) => {
        quizlerliste.push(
        <div className="quizlistitem quizlistli" onClick={() => {navigate(`/quest/quizler/${q.quizid}`)}}>
            <p className="quizlistp">
                <h3 className="quizlisthead">{(() => {if (q.quiztype === "test") return (<i class="fa-duotone fa-list-check"></i>)})()} {q.quizname}</h3>
                <br></br>
                <span className='quizlistcontent' style={{color: 'white', opacity: 0.9, fontSize: "2.5vh"}}><i class="fa-duotone fa-square-info"></i> <b>İçerikler: </b><span style={{fontStyle: "italic"}}>{q.quizcontent}</span> </span>
                <br></br><br></br>
                <span className='quizlistquestioncount' style={{color: 'white', opacity: 0.9, fontSize: "2.5vh"}}><i class="fa-duotone fa-chart-simple"></i> <b>Soru Sayısı: </b>{q.quizquestions.length}</span>
            </p>
        </div>
    )
    })

    return (
        <div className='quest'>
            {quizlerliste}
        </div>
    );
};

/* quizlist.quizler.find(quiz => quiz.quizid === "01").quiztext */

/*
    <div className="quizlistitem">
                <p className="quizlistp">
                    <h3 className="quizlisthead">Temel Akımlar</h3>
                    <br></br>
                    <span className='quizlistcontent' style={{color: 'white', opacity: 0.9, fontSize: "2.5vh"}}><b>İçerikler: </b><span style={{fontStyle: "italic"}}>Klasisizm'in, Romantizm'in ve Realizm'in Temel İlkeleri</span> </span>
                </p>
    </div>
*/

export default Quest;
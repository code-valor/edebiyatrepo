import './index.css';
import quizlist from './quiz.json';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';   
import { Chart } from 'react-google-charts';
import Collapsible from './Collapsible';

function Result() {

    const {state} = useLocation();

    const resultquestions = []
    const allquestions = []
    const correctquestions = []
    const wrongquestions = []
    const unansweredquestions = []
        const cQuiz = quizlist.quizler.find(q => q.quizid === state.cquizid);

    cQuiz.quizquestions.forEach((qq) => {
        const qqs = quizlist.sorular.find(s => s.soruid === qq.qsoruid);
        resultquestions.push({cqid: qqs.soruid})
        const currentanswer = state.results.find(ca => ca.questionid === qqs.soruid);
        if (!currentanswer) {unansweredquestions.push({unansweredsoruid: qq.qsoruid})} else {
        if (currentanswer.answerid === qqs.correctanswerid) {correctquestions.push({correctanswersoruid: qqs.soruid, correctanswerselection: currentanswer.answerid})};
        if (currentanswer.answerid !== qqs.correctanswerid) {wrongquestions.push({wronganswersoruid: qqs.soruid, wronganswerselection: currentanswer.answerid})};
        
        }
        
    })

    const advices = [];

    wrongquestions.forEach((wq) => {
        const wqobject = quizlist.sorular.find(w => w.soruid === wq.wronganswersoruid);
        advices.push({advice: wqobject.soruadvice, advicesoruid: wqobject.soruid, sorusubject: wqobject.sorusubject});
    });

    unansweredquestions.forEach((uq) => {
        const wqobject = quizlist.sorular.find(w => w.soruid === uq.unansweredsoruid);
        advices.push({advice: wqobject.soruadvice, advicesoruid: wqobject.soruid, sorusubject: wqobject.sorusubject});
    });

    /*advices.forEach((ad) => {
        if (!chartData.find(d => d.label === ad.sorusubject)) {
            chartData.push({label: ad.sorusubject, key: 1})
        } else {
            console.log('das')
            const cdkey = chartData.find(cdd => cdd.label === ad.sorusubject).key + 1;
            const d = chartData.filter((cd) => {return cd.label === ad.sorusubject}).concat([{label: ad.sorusubject, key: cdkey}]);
            //const d = chartData.concat([{label: ad.sorusubject, key: cdkey}]);
            console.log(d)
            console.log(chartData)
        } 
    });*/

    const youranswerslist = [];

    resultquestions.forEach((rqq) => {
        const currentresultquestion = quizlist.sorular.find(s => s.soruid === rqq.cqid);
        const indexofresult = quizlist.quizler.find(q => q.quizid === cQuiz.quizid).quizquestions.find(qu => qu.qsoruid === currentresultquestion.soruid);
        console.log(wrongquestions)
        // SWITCH CASE CRYING AT THE CORNER :')
        if (unansweredquestions.find(ua => ua.unansweredsoruid === currentresultquestion.soruid)) {
            youranswerslist.push(<Collapsible answertype="unanswered" soru={{ sorudata: currentresultquestion, soruindex: indexofresult.qsoruindex }} />)
        } else if (correctquestions.find(ca => ca.correctanswersoruid === currentresultquestion.soruid)) {
            youranswerslist.push(<Collapsible answertype="correct" soru={{ sorudata: currentresultquestion, soruindex: indexofresult.qsoruindex, answered: correctquestions.find(ca => ca.correctanswersoruid === currentresultquestion.soruid).correctanswerselection }} />)
        } else if (wrongquestions.find(wa => wa.wronganswersoruid === currentresultquestion.soruid)) {
            youranswerslist.push(<Collapsible answertype="wrong" soru={{ sorudata: currentresultquestion, soruindex: indexofresult.qsoruindex, answered: wrongquestions.find(wa => wa.wronganswersoruid === currentresultquestion.soruid).wronganswerselection }} />)
        };
        /*if (correctquestions.find(ca => ca.correctanswerid === currentresultquestion.soruid)) {
            return youranswerslist.push(<div>doru</div>)
        };
        if (wrongquestions.find(wa => wa.wronganswerid === currentresultquestion.soruid)) {
            return youranswerslist.push(<div>yanlış</div>)
        };*/
    })

    
    

    return (
        <div>
            <br></br>
            <div className="sonuclarc">
                <div className="sonuclarcontainer">
                    <p className="sonuclarp">
                        <br />
                        <h1 className="sonuclarheader"><i class="fa-duotone fa-check-to-slot"></i> Testi Bitirdiniz!</h1>
                        <br />
                        <br />
                        <div className="sonuclarcquiz"><i class="fa-duotone fa-angles-right"></i> <b>{cQuiz.quizname}</b> testini tamamladınız!</div>
                        <br />
                        <hr className="sonuclarhr01" />
                        <br />
                        <div className="sonuclarstatistics"><i class="fa-duotone fa-magnifying-glass-chart"></i> İstatistiklerin</div>
                        <br />
                        <ul className="sonuclarlist">
                            <li className="sonuclarlistli" style={{color: 'rgba(184, 255, 249,1.0)'}}><i class="fa-duotone fa-list-ol"></i> Toplam Soru Sayısı: {cQuiz.quizquestions.length}</li>
                            <br />
                            <li className="sonuclarlistli" style={{color: '#32ff7e'}}><i class="fa-duotone fa-hexagon-check"></i> Doğru Sayısı: <b>{correctquestions.length}</b></li>
                            <br />
                            <li className="sonuclarlistli" style={{color: '#ff3838'}}><i class="fa-duotone fa-hexagon-xmark"></i> Yanlış Sayısı: <b>{wrongquestions.length}</b></li>
                            <br />
                            <li className="sonuclarlistli" style={{color: 'rgba(253, 203, 110,1.0)'}}><i class="fa-duotone fa-hexagon-exclamation"></i> Cevaplanmamış Soru Sayısı: <b>{unansweredquestions.length}</b></li>
                            <br />
                            
                            <li className="sonuclarlistli"><Chart chartType='PieChart' data={[
                                ["Soru Tipi", "İşaretlenen Sayı"],
                                ['Yanlış Sorular', wrongquestions.length],
                                ['Doğru Sorular', correctquestions.length],
                                ['Boş Sorular', unansweredquestions.length]
                            ]} width={'100%'} height={'400px'} options={{animation: {duration: 1000, easing: 'linear', startup: true} ,slices: {0: {color: '#ff3838'}, 1: {color: '#32ff7e'}, 2: {color: '#e58e26'}} ,is3D: true, backgroundColor: 'transparent', pieSliceText: 'percentage', legendPosition: 'right', legendTextStyle: {color: 'white', fontSize: 24}, pieSliceTextStyle: {color: 'white', fontSize: 20}}} /></li>
                        </ul>
                        <br />
                        <hr className="sonuclarhr01" />
                        <br />
                        <div className="sonuclaradvise"><i class="fa-duotone fa-chart-mixed"></i> Değerlendirme ve Tavsiyeler</div>
                        <br />
                        <hr className="sonuclarhr02" />
                        <p className="sonuclaradvisep">
                            <br />
                            <div style={{fontSize: "2.5vh", marginBottom: "0.5vh"}}><i class="fa-duotone fa-brake-warning"></i> Eksik Bilgiler</div>
                            <br />
                            <ul className="eksikbilgilerul">
                                {advices.map((a) => {
                                    return (<li className="eksikbilgilerli">{a.advice}</li>)
                                })}
                            </ul>
                            <br />
                            <hr className="sonuclarhr02" />
                            <br />
                            <div style={{fontSize: "2.5vh", marginBottom: "0.5vh"}}><i class="fa-duotone fa-pen-to-square"></i> Verdiğin Cevaplar</div>
                            <br />
                                {youranswerslist}
                        </p>
                        <br />
                    </p>
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default Result;
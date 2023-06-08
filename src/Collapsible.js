import './index.css';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styledcomps from 'styled-components';
import { useEffect, useState } from 'react';
import ReactMd from 'markdown-to-jsx';

function Collapsible(props) {

    const [display, setDisplay] = useState(false);

    function toggleDisplay() {
        if (display === true) {
            setDisplay(false);
        } else { setDisplay(true); };
    };

    if (props.answertype === "unanswered") {
        return (
            <div className='collapsible youranswer-unanswered' onClick={toggleDisplay}>
                
                <div className='yatext ya-unanswered'>Soru {<i class={'fa-duotone fa-square-' + slicetonumbers(props.soru.soruindex).f}></i>}{<i class={'fa-solid fa-square-' + slicetonumbers(props.soru.soruindex).s}></i>} <span className='yatextfloat'><span className='yaexpandfordetails'>Detaylar için tıkla</span> <i class="fa-duotone fa-circle-info" style={{color: 'rgba(253, 203, 110,1.0)'}}></i></span>
                {display ? (
                    <div className='yaexpandeddetails'>
                    <p className='yaedsorutext'><ReactMd>{props.soru.sorudata.sorutext}</ReactMd></p>
                    <ul className='yaedanswersul'>
                        <li><i className={`fa-duotone fa-circle-a ${props.soru.sorudata.correctanswerid === 'a' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'a').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-b ${props.soru.sorudata.correctanswerid === 'b' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'b').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-c ${props.soru.sorudata.correctanswerid === 'c' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'c').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-d ${props.soru.sorudata.correctanswerid === 'd' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'd').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-e ${props.soru.sorudata.correctanswerid === 'e' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'e').answervalue}</li>
                    </ul>
                    <div className='actuallycorrectis'>Doğru Cevap: <i className={`fa-duotone fa-square-${props.soru.sorudata.correctanswerid}`}></i></div>
                    <hr className="sonuclarhr02" />
                    <div className='expandedadvice'><i class="fa-duotone fa-lightbulb-exclamation-on" style={{color: 'rgba(255, 234, 167,1.0)'}}></i> {props.soru.sorudata.soruadvice}</div>
                    <div className='expandedsubject'><i class="fa-duotone fa-comment-exclamation" style={{color: 'rgba(255, 234, 167,1.0)'}}></i> <b>{props.soru.sorudata.sorusubject}</b> konusunda eksiksiniz.</div>
                </div>
                ) : ('')}
                </div>
            </div>
        );
    };
    if (props.answertype === "correct") {
        return (
            <div className='collapsible youranswer-correct' onClick={toggleDisplay}>
                <div className='yatext ya-correct'>Soru {<i class={'fa-duotone fa-square-' + slicetonumbers(props.soru.soruindex).f}></i>}{<i class={'fa-solid fa-square-' + slicetonumbers(props.soru.soruindex).s}></i>} <span className='yatextfloat'><span className='yaexpandfordetails'>Detaylar için tıkla</span> <i class="fa-duotone fa-circle-info" style={{color: '#32ff7e'}}></i></span>
                {display ? (
                    <div className='yaexpandeddetails'>
                        <p className='yaedsorutext'><ReactMd>{props.soru.sorudata.sorutext}</ReactMd></p>
                        <ul className='yaedanswersul' style={{marginBottom: "2vh"}}>
                            <li><i className={`fa-duotone fa-circle-a ${props.soru.answered === 'a' ? 'correctselection' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'a').answervalue}</li>
                            <li><i className={`fa-duotone fa-circle-b ${props.soru.answered === 'b' ? 'correctselection' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'b').answervalue}</li>
                            <li><i className={`fa-duotone fa-circle-c ${props.soru.answered === 'c' ? 'correctselection' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'c').answervalue}</li>
                            <li><i className={`fa-duotone fa-circle-d ${props.soru.answered === 'd' ? 'correctselection' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'd').answervalue}</li>
                            <li><i className={`fa-duotone fa-circle-e ${props.soru.answered === 'e' ? 'correctselection' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'e').answervalue}</li>
                        </ul>
                    </div>
                ) : ('')}
                </div>
            </div>
        );
    }
    if (props.answertype === "wrong") {
        return (
            <div className='collapsible youranswer-wrong' onClick={toggleDisplay}>
                <div className='yatext ya-wrong'>Soru {<i class={'fa-duotone fa-square-' + slicetonumbers(props.soru.soruindex).f}></i>}{<i class={'fa-solid fa-square-' + slicetonumbers(props.soru.soruindex).s}></i>} <span className='yatextfloat'><span className='yaexpandfordetails'>Detaylar için tıkla</span> <i class="fa-duotone fa-circle-info" style={{color: '#ff3838'}}></i></span>
                {display ? (
                    <div className='yaexpandeddetails'>
                    <p className='yaedsorutext'><ReactMd>{props.soru.sorudata.sorutext}</ReactMd></p>
                    <ul className='yaedanswersul'>
                        <li><i className={`fa-duotone fa-circle-a ${props.soru.answered === 'a' ? 'wrongselection' : '' } ${props.soru.sorudata.correctanswerid === 'a' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'a').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-b ${props.soru.answered === 'b' ? 'wrongselection' : '' } ${props.soru.sorudata.correctanswerid === 'b' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'b').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-c ${props.soru.answered === 'c' ? 'wrongselection' : '' } ${props.soru.sorudata.correctanswerid === 'c' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'c').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-d ${props.soru.answered === 'd' ? 'wrongselection' : '' } ${props.soru.sorudata.correctanswerid === 'd' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'd').answervalue}</li>
                        <li><i className={`fa-duotone fa-circle-e ${props.soru.answered === 'e' ? 'wrongselection' : '' } ${props.soru.sorudata.correctanswerid === 'e' ? 'expandedshiningcorrectanswer' : '' }`}></i> {props.soru.sorudata.soruanswers.find(a => a.answerid === 'e').answervalue}</li>
                    </ul>
                    <div className='actuallycorrectis'>Doğru Cevap: <i className={`fa-duotone fa-square-${props.soru.sorudata.correctanswerid}`}></i></div>
                    <hr className="sonuclarhr02" />
                    <div className='expandedadvice'><i class="fa-duotone fa-lightbulb-exclamation-on" style={{color: 'rgba(255, 234, 167,1.0)'}}></i> {props.soru.sorudata.soruadvice}</div>
                    <div className='expandedsubject'><i class="fa-duotone fa-comment-exclamation" style={{color: 'rgba(255, 234, 167,1.0)'}}></i> <b>{props.soru.sorudata.sorusubject}</b> konusunda eksiksiniz.</div>
                </div>
                ) : ('')}
                </div>
            </div>
        );
    }
    function slicetonumbers(nb) {
        /* This function cant efford more questions than 99 so any test type that have more questions than 99 must have a special component. */
        const first = nb.slice(0, 1);
        const second = nb.slice(1, 2);
        return ({f: first, s: second})
    }
};

export default Collapsible;
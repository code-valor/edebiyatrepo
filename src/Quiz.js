import './index.css';
import quizlist from './quiz.json';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styledcomps from 'styled-components';
import ReactMarkdown from 'react-markdown';
import ReactMd from 'markdown-to-jsx';
import { useEffect, useState } from 'react';

function Quest() {

    /*const StyledLink = styledcomps(Link)`
        text-decoration: none;
        background-color: rgba(253, 203, 110,1.0);
        border: solid 0.5vw rgba(253, 203, 110,1.0);
        width: 15vw !important;
        height: 5vh !important;
        font-size: 3vh;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 2vw;
        text-decoration: none;
        color: black;
        &:hover {
            text-decoration: none;
            background-color: rgba(255, 234, 167,1.0);
            border-color: rgba(255, 234, 167,1.0);
            cursor: pointer;
        }
    `;*/
    const { quizid } = useParams();

    const sorularliste = [];
    const [selectedanswers, setSelectedanswers] = useState([]);

    const currentquiz = quizlist.quizler.find(quiz => quiz.quizid === quizid);
    quizlist.quizler.find(quiz => quiz.quizid === quizid).quizquestions.forEach((qs) => {
        const soru = quizlist.sorular.find(soru => soru.soruid === qs.qsoruid);
        console.log('a')
        console.log(selectedanswers)
        console.log('b')

        const textmarked = <ReactMd>{soru.sorutext}</ReactMd>
        sorularliste.push(
            <div className="sorulistitem">
                <p className="sorup">
                    {<i class={'fa-duotone fa-circle-' + slicetonumbers(qs.qsoruindex).f}></i>}{<i class={'fa-solid fa-circle-' + slicetonumbers(qs.qsoruindex).s}></i>} <br /> {textmarked}
                    <br /> <br />
                    <span className={`soruanswer-a soruanswer ${selectedanswers.find(s => s.questionid === soru.soruid) ? selectedanswers.find(s => s.questionid === soru.soruid).answerid === 'a' ? 'selectedanswer' : '' : '' }`}
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {setSelectedanswers(selectedanswers.concat([{ questionid: soru.soruid, answerid: 'a' }]))} else {setSelectedanswers(selectedanswers.filter((obj) => {return obj.questionid !== soru.soruid}).concat([{ questionid: soru.soruid, answerid: 'a' }]));}}}
                    ><span><i class="fa-duotone fa-circle-a"></i></span> {soru.soruanswers.find(a => a.answerid === 'a').answervalue}</span>
                    <br />
                    <span className={`soruanswer-a soruanswer ${selectedanswers.find(s => s.questionid === soru.soruid) ? selectedanswers.find(s => s.questionid === soru.soruid).answerid === 'b' ? 'selectedanswer' : '' : '' }`}
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {setSelectedanswers(selectedanswers.concat([{ questionid: soru.soruid, answerid: 'b' }]))} else {setSelectedanswers(selectedanswers.filter((obj) => {return obj.questionid !== soru.soruid}).concat([{ questionid: soru.soruid, answerid: 'b' }]));}}}
                    ><span><i class="fa-duotone fa-circle-b"></i></span> {soru.soruanswers.find(a => a.answerid === 'b').answervalue}</span>
                    <br />
                    <span className={`soruanswer-a soruanswer ${selectedanswers.find(s => s.questionid === soru.soruid) ? selectedanswers.find(s => s.questionid === soru.soruid).answerid === 'c' ? 'selectedanswer' : '' : '' }`}
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {setSelectedanswers(selectedanswers.concat([{ questionid: soru.soruid, answerid: 'c' }]))} else {setSelectedanswers(selectedanswers.filter((obj) => {return obj.questionid !== soru.soruid}).concat([{ questionid: soru.soruid, answerid: 'c' }]));}}}
                    ><span><i class="fa-duotone fa-circle-c"></i></span> {soru.soruanswers.find(a => a.answerid === 'c').answervalue}</span>
                    <br />
                    <span className={`soruanswer-a soruanswer ${selectedanswers.find(s => s.questionid === soru.soruid) ? selectedanswers.find(s => s.questionid === soru.soruid).answerid === 'd' ? 'selectedanswer' : '' : '' }`}
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {setSelectedanswers(selectedanswers.concat([{ questionid: soru.soruid, answerid: 'd' }]))} else {setSelectedanswers(selectedanswers.filter((obj) => {return obj.questionid !== soru.soruid}).concat([{ questionid: soru.soruid, answerid: 'd' }]));}}}
                    ><span><i class="fa-duotone fa-circle-d"></i></span> {soru.soruanswers.find(a => a.answerid === 'd').answervalue}</span>
                    <br />
                    <span className={`soruanswer-a soruanswer ${selectedanswers.find(s => s.questionid === soru.soruid) ? selectedanswers.find(s => s.questionid === soru.soruid).answerid === 'e' ? 'selectedanswer' : '' : '' }`}
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {setSelectedanswers(selectedanswers.concat([{ questionid: soru.soruid, answerid: 'e' }]))} else {setSelectedanswers(selectedanswers.filter((obj) => {return obj.questionid !== soru.soruid}).concat([{ questionid: soru.soruid, answerid: 'e' }]));}}}
                    ><span><i class="fa-duotone fa-circle-e"></i></span> {soru.soruanswers.find(a => a.answerid === 'e').answervalue}</span>
                </p>
            </div>
        )
    })

    /*
    <p className="sorup">
                    {<i class={'fa-duotone fa-circle-' + slicetonumbers(qs.qsoruindex).f}></i>}{<i class={'fa-solid fa-circle-' + slicetonumbers(qs.qsoruindex).s}></i>} <br /> {textmarked}
                    <br /> <br />
                    <span className="soruanswer-a soruanswer"
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {selectedanswers.push({ questionid: soru.soruid, answerid: 'a' });} else {selectedanswers.splice(selectedanswers.indexOf(selectedanswers.find(sa => sa.questionid === soru.soruid)), 1); selectedanswers.push({ questionid: soru.soruid, answerid: 'a' })}}}
                    ><span><i class="fa-duotone fa-circle-a"></i></span> {soru.soruanswers.find(a => a.answerid === 'a').answervalue}</span>
                    <br />
                    <span className="soruanswer-b soruanswer"
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {selectedanswers.push({ questionid: soru.soruid, answerid: 'b' })} else {selectedanswers.splice(selectedanswers.indexOf(selectedanswers.find(sa => sa.questionid === soru.soruid)), 1); selectedanswers.push({ questionid: soru.soruid, answerid: 'b' })}}}
                    ><span><i class="fa-duotone fa-circle-b"></i></span> {soru.soruanswers.find(a => a.answerid === 'b').answervalue}</span>
                    <br />
                    <span className="soruanswer-c soruanswer"
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {selectedanswers.push({ questionid: soru.soruid, answerid: 'c' })} else {selectedanswers.splice(selectedanswers.indexOf(selectedanswers.find(sa => sa.questionid === soru.soruid)), 1); selectedanswers.push({ questionid: soru.soruid, answerid: 'c' })}}}
                    ><span><i class="fa-duotone fa-circle-c"></i></span> {soru.soruanswers.find(a => a.answerid === 'c').answervalue}</span>
                    <br />
                    <span className="soruanswer-d soruanswer"
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {selectedanswers.push({ questionid: soru.soruid, answerid: 'd' })} else {selectedanswers.splice(selectedanswers.indexOf(selectedanswers.find(sa => sa.questionid === soru.soruid)), 1); selectedanswers.push({ questionid: soru.soruid, answerid: 'd' })}}}
                    ><span><i class="fa-duotone fa-circle-d"></i></span> {soru.soruanswers.find(a => a.answerid === 'd').answervalue}</span>
                    <br />
                    <span className="soruanswer-e soruanswer"
                    onClick={() => {if (!selectedanswers.find(sa => sa.questionid === soru.soruid)) {selectedanswers.push({ questionid: soru.soruid, answerid: 'e' })} else {selectedanswers.splice(selectedanswers.indexOf(selectedanswers.find(sa => sa.questionid === soru.soruid)), 1); selectedanswers.push({ questionid: soru.soruid, answerid: 'e' })}}}
                    ><span><i class="fa-duotone fa-circle-e"></i></span> {soru.soruanswers.find(a => a.answerid === 'e').answervalue}</span>
                </p>
    */

    /*((q) => {
        q.quizquestions.forEach((qs) => {
            const soru = quizlist.sorular.find(soru => soru.soruid === qs.qsoruid);

            const textmarked = <ReactMd>{soru.sorutext}</ReactMd>
            sorularliste.push(
                <div className="sorulistitem">
                    <p className="sorup">
                        {<i class={'fa-duotone fa-circle-' + slicetonumbers(qs.qsoruindex).f}></i>}{<i class={'fa-solid fa-circle-' + slicetonumbers(qs.qsoruindex).s}></i>} <br /> {textmarked}
                    </p>
                </div>
            )
        })
    })*/

    

    function slicetonumbers(nb) {
        /* This func cant efford more questions than 99 so any test type that have more questions than 99 must have a special component. */
        const first = nb.slice(0, 1);
        const second = nb.slice(1, 2);
        return ({f: first, s: second})
    }

    /*quizlist.sorular.forEach((s) => {

        const textmarked = <ReactMd>{s.sorutext}</ReactMd>
        sorularliste.push(
            <div className="sorulistitem">
                <p className="sorup">
                    {textmarked}
                </p>
            </div>
        )
    })*/

    return (
        <div className='quest'>
            <div className="quizinfo">
                <h1 className="quizinfohead"></h1>
            </div>
            {sorularliste}
            <div className="finishquiz">
                <div className="finishquizbuttoncontainer"><Link className={'finishquizbutton'} to={'/sonuclar'} state={{results: selectedanswers, cquizid: quizid}}><i class="fa-duotone fa-clipboard-list-check"></i> <b>TESTİ BİTİR</b></Link></div>
            </div>
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
import './index.css'
import { Link, useParams, useLocation, NavLink, useLinkClickHandler, Route } from 'react-router-dom';
import { useCallback, useState } from 'react';

function About() {
    return (
        
        <div>
            <div className='aboutcont'>
                <div className='aboutwhoami'>
                    <h1 className='aboutwhoamih'><span style={{fontSize: 40, color: 'seashell'}}><i class="fa-duotone fa-hashtag"></i> B</span>iyografi</h1>
                    <br />
                    <p className='aboutwhoamip'>
                    <div className='aboutlisting'><i class="fa-duotone fa-signature"></i>&nbsp;&nbsp;Adı <b>Egemen Sarıaslan.</b> <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-calendar-days"></i>&nbsp;&nbsp;2006 yılında <b>Mersin</b>'de doğdu. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-code-branch"></i>&nbsp;&nbsp;Ortaokulda <b>bilgisayar bilimlerine</b> merak saldı. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-brackets-curly"></i>&nbsp;&nbsp;Alanındaki <b>onlarca programlama dilini</b> denedikten sonra alanını seçti. <br /></div>
                    <div className='aboutlisting'><i class="fa-brands fa-square-js"></i>&nbsp;&nbsp;Ortaokulu bitirmeden <b>JavaScript</b> ve markup dillerini öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-gears"></i>&nbsp;&nbsp;3. yılını doldurdu ve Back-End alanında <b>Node.JS</b>'i öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-robot"></i>&nbsp;&nbsp;Sosyal medya ve canlı yayın platformlarına <b>botlar</b> geliştirdi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-gamepad-modern"></i>&nbsp;&nbsp;Bilgisayar oyunu <b>modları</b> ve <b>eklentileri</b> geliştirdi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-server"></i>&nbsp;&nbsp;Orta çaplı <b>hosting</b> ve <b>sunucu</b> işleri yaptı. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-microchip"></i>&nbsp;&nbsp;<b>Arduino</b> ve <b>çipset</b> programlaması öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-globe"></i>&nbsp;&nbsp;<b>Express</b> ve <b>EJS</b> ile <b>web sitesi</b> programlaması ve tasarımı öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-display-code"></i>&nbsp;&nbsp;<b>Electron</b> ile <b>Masaüstü uygulama</b> programlamasını öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-mobile"></i>&nbsp;&nbsp;<b>Cordova</b> ve <b>React Native</b> ile <b>Mobil uygulama</b> programlamasını öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-chart-pie"></i>&nbsp;&nbsp;BSON veritabanı teknolojisi olan <b>MongoDB</b>'yi öğrendi<br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-browsers"></i>&nbsp;&nbsp;Front-End alanında EJS ve Express'den sonra <b>React</b>'ı öğrendi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-award"></i>&nbsp;&nbsp;6 yıllık süreç sonunda <b>Full-Stack</b> bir yazılımcı olarak alanını öğrenmeyi bitirdi. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-microchip-ai"></i>&nbsp;&nbsp;<b>TensorFlow</b> ile yapay zeka ve sanal asistan programlamaya başladı. <br /></div>
                    <div className='aboutlisting'><i class="fa-brands fa-python"></i>&nbsp;&nbsp;<b>İkinci programlama dili</b> olarak Python öğrenimine başladı. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-language"></i>&nbsp;&nbsp;<b>B2</b> düzeyinde <b>İngilizce</b> bilmektedir. <b>Almanca</b> öğrenmeye çalışmaktadır. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-uniform-martial-arts"></i>&nbsp;&nbsp;<b>Taekwondo</b> dövüş sporlarında <b>Kırmızı-Siyah</b> kuşaktadır. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-photo-film"></i>&nbsp;&nbsp;<b>Profesyonel video ve fotoğraf</b> oluşturma programlarını kullanabilmektedir. <br /></div>
                    <br />
                    <img src='/logo.png' className='meinsignature'></img>
                    </p>
                </div>
                <br /><br /><br />
                <div className='myteacher'>
                    <h1 className='aboutwhoamih'><span style={{fontSize: 40, color: 'seashell'}}><i class="fa-duotone fa-chalkboard-user"></i> D</span>anışman Öğretmen</h1>
                    <br />
                    <p className='aboutwhoamip'>
                    <div className='aboutlisting'><i class="fa-duotone fa-user-hair-long"></i>&nbsp;&nbsp;Adı <b>Senem Arı.</b> <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-school"></i>&nbsp;&nbsp;<b>Celâl Bayar Üniversitesi</b>'nde Türk Dili ve Edebiyatı bölümünü okudu. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-graduation-cap"></i>&nbsp;&nbsp;<b>2010</b> yılında <b>Türkolog</b> ünvanı ile mezun oldu. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-diploma"></i>&nbsp;&nbsp;<b>Pedagojik Formasyon</b> aldı. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-person-chalkboard"></i>&nbsp;&nbsp;<b>2014</b> yılında Edebiyat öğretmeni olarak çalışmaya başladı. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-message-check"></i>&nbsp;&nbsp;<b>Diksiyon ve Hitabet</b> dersleri vermektedir. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-lightbulb-on"></i>&nbsp;&nbsp;Okulunda <b>e-Twinning</b> ve <b>Erasmus</b> projeleri komisyonunda görev almaktadır. <br /></div>
                    <div className='aboutlisting'><i class="fa-duotone fa-spa"></i>&nbsp;&nbsp;<b>Yoga/Meditasyon</b> ve <b>Nefes Eğitmenliği</b> de yapmaktadır. <br /></div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About; 
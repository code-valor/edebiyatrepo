import './index.css';
import './css/all.css';

function Home() {
    return (
        <div className='home'>
            <div className='gridbolum'>
                <div className="akimlargrid" id='#akimlar'>
                    <div className="akimlar-item akim-1"></div>
                    <div className="akimlar-item akim-2"></div>
                    <div className="akimlar-item akim-3"></div>
                    <div className="akimlar-item akim-4"></div>
                    <div className="akimlar-item akim-5"></div>
                    <div className="akimlar-item akim-6"></div>
                    <div className="akimlar-item akim-7"></div>
                    <div className="akimlar-item akim-8"></div>
                    <div className="akimlar-item akim-9"></div>
                    <div className="akimlar-item akim-10"></div>
                    <div className="akimlar-item akim-11"></div>
                    <div className="akimlar-item akim-12"></div>
                    <div className="akimlar-item akim-13"></div>
                    {/*<div className="akimlar-item akim-5">Parnasizm</div>
                    <div className="akimlar-item akim-6">Sembolizm</div>
                    <div className="akimlar-item akim-7">Sürrealizm</div>
                    <div className="akimlar-item akim-8">Empresyonizm</div>
                    <div className="akimlar-item akim-9">Ekspresyonizm</div>
                    <div className="akimlar-item akim-10">Kübizm</div>
                    <div className="akimlar-item akim-11">Fütürizm</div>
                    <div className="akimlar-item akim-12">Egzistansiyalizm</div>
                    <div className="akimlar-item akim-13">Dadaizm</div>*/}
                </div>
            </div>
            <div className="akimlarbilgi" id='akimlarbilgi'>
                <div className="akimlarinfocon">
                    <div className="akiminfo1 akiminfo" id='klasisizm'>
                        <p className='akiminfop'>
                            <h1>Klasisizm</h1>
                            <ul>
                                <li><b>17.</b> yüzyılda <b>Fransa</b>'da ortaya çıkmıştır.</li>
                                <li><b>Akla</b> ve <b>sağduyuya</b> önem verir.</li>
                                <li>Kahramanları <b>seçkin</b> kişilerdir.</li>
                                <li>Önemli olan konu değil konunun <b>işleniş biçimi</b>dir.</li>
                                <li>Dil ve üslup <b>kusursuzdur</b>, <b>yalın</b> ve <b>soylu</b> bir dil kullanılır.</li>
                                <li>Sanat <b>sanat içindir</b> görüşündedir.</li>
                                <li>Eserler <b>anonimdir</b>, sanatçı kendini gizler.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/zafertaki.jpg" alt="" className='i001'/>
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Klasisizm'in sembolü, <b>Paris</b>'teki <b>Zafer Takı</b></div>
                            </div>
                            <br></br><br></br>
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Akıl, sağduyu, seçkin, soylu, sanat sanat için, anonim.</span></span>
                        </p>
                        
                    </div>
                    <div className="akiminfo2 akiminfo" id='romantizm'>
                        <p className='akiminfop'>
                            <h1>Romantizm</h1>
                            <ul>
                                <li><b>19.</b> yüzyılda <b>klasisizme tepki</b> olarak doğmuştur.</li>
                                <li>Akıl yerine <b>duygulara</b> ve <b>hayallere</b> önem verir.</li>
                                <li>Konularını <b>günlük yaşamdan</b> alır.</li>
                                <li><b>Halkın</b> kullandığı <b>sade</b> dil kullanılır.</li>
                                <li>Sanat <b>toplum içindir</b> görüşündedir.</li>
                                <li>Sanatçı kendini <b>gizlemez</b>, aksine düşüncelerini belirtir.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/romantic.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Waterhouse'un <b>Lady of Shalott</b>'u, <b>1888</b></div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Duygu, hayal, günlük yaşam, halk, sanat toplum için.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo3 akiminfo" id='realizm'>
                        <p className='akiminfop'>
                            <h1>Realizm</h1>
                            <ul>
                                <li><b>19.</b> yüzyılda <b>romantizme tepki</b> olarak doğmuştur.</li>
                                <li><b>Kahraman bakış açısı</b> ile işlenir.</li>
                                <li>Konu <b>gerçek hayattan</b> alınır.</li>
                                <li><b>Hayal</b> ve <b>his</b> yerine toplumun gerçekleri <b>olduğu gibi</b> yansıtır.</li>
                                <li>Sanat <b>sanat içindir</b> görüşündedir.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/realizmcokiyi.jpeg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Rus su yollarının inşa edilmesi (anonim)</div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Kahraman bakış açısı, gerçek hayat, toplum gerçekleri, sanat sanat için.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo4 akiminfo" id='naturalizm'>
                        <p className='akiminfop'>
                            <h1>Natüralizm</h1>
                            <ul>
                                <li><b>19.</b> yüzyılda <b>Fransa</b>'da ortaya çıkmıştır.</li>
                                <li>Toplum <b>laboratuvar</b>, insan da <b>deney</b> sayılır.</li>
                                <li>Dil, <b>her insanın anlayabileceği</b> seviyededir.</li>
                                <li><b>Gözlem</b> ve <b>tasvir</b> önemlidir.</li>
                                <li>İnsan kişiliği <b>bilimsel açıdan</b> incelenir.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/naturalistadam.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> <b>Atlar ve Nehir Manzarası</b>, Aelbert Cuyp, <b>1655</b></div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Laboratuvar, deney, her insanın anlayabilmesi, gözlem, tasvir, bilimsel bakış.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo5 akiminfo" id='humanizm'>
                        <p className='akiminfop'>
                            <h1>Hümanizm</h1>
                            <ul>
                                <li>İnsana değer verilir.</li>
                                <li>İnsan daima önplandadır.</li>
                                <li>İnsanı <b>sevip</b> onu <b>yüceltme</b> işlenir.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/humanistcennet.jpeg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> <b>Siena'nın Aziz Katerine'sinin Zaferi</b>, Santa Sabina Kilisesi'nin İşlemesi</div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>İnsan, insanı sevmek ve yüceltmek.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo6 akiminfo" id='parnasizm'>
                        <p className='akiminfop'>
                            <h1>Parnasizm</h1>
                            <ul>
                                <li><b>19.</b> yüzyılda <b>romantik şiire tepki</b> olarak çıkmıştır.</li>
                                <li>Sanat <b>sanat içindir</b> görüşündedir.</li>
                                <li>Nesnelerin <b>dış görünüşü</b> aktarılır.</li>
                                <li><b>Kelime sıralanışı</b> ve <b>ahenk</b> önemlidir.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/parnasizm2.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> <b>The Gleaners</b>, Jean-François Millet, Musée d'Orsay, <b>1857</b></div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Nesnelerin dış görünüşü, kelime sıralanışı, ahenk, sanat sanat için.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo7 akiminfo" id='sembolizm'>
                        <p className='akiminfop'>
                            <h1>Sembolizm</h1>
                            <ul>
                                <li><b>19.</b> yüzyılda olarak çıkmıştır.</li>
                                <li>Sanat <b>sanat içindir</b> görüşündedir.</li>
                                <li>Nesneler <b>olduğu gibi anlatılmaz.</b> Değiştirilmeye çalışılır.</li>
                                <li>Dil <b>oldukça ağırdır.</b></li>
                                <li>Şiire <b>anlam</b> değil <b>his</b> önemlidir.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/sembolizmyaralimelek.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Finlandiya'nın <i class="fa-duotone fa-globe-snow"></i> <b>Milli Tablosu</b>, Hugo Simberg'in <b>Yaralı Melek</b>'i, 1903</div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Ağır dil, nesneler değiştirilir, his ve duygu, sanat sanat için.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo8 akiminfo" id='surrealizm'>
                    <p className='akiminfop'>
                            <h1>Sürrealizm</h1>
                            <ul>
                                <li><b>20.</b> yüzyılda <b>realizm ve natüralizme tepki</b> olarak doğmuştur.</li>
                                <li><b>Psikianaliz</b> yöntemi ile <b>bilinç dışı</b> içeriği hedef edinir.</li>
                                <li><b>Bilinçaltını</b> ve <b>rüyaları</b> konu alır.</li>
                                <li>İnsanı <b>içgüdü</b> ve <b>bilinçaltı</b> yaşatır.</li>
                                <li><b>Mantık</b> değersizdir.</li>
                                <li>Psikianaliz Kuramı'nı da kuran <b>Sigmund Freud</b>'un etkisinde kalmıştır.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/surrealizmhabsburgubolmusler.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Polonyalı <b>Igor Morski</b>'nin Yaşlı Adamın Yarım Kafası</div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Psikianaliz, bilinçaltı, rüyalar, mantık değersiz, içgüdü, Sigmund Freud.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo9 akiminfo" id='futurism'>
                    <p className='akiminfop'>
                            <h1>Fütürizm</h1>
                            <ul>
                                <li><b>20.</b> yüzyılda <b>İtalya</b>'da Marinetti tarafından kurulmuştur.</li>
                                <li>İçeriği <b>makineler</b> ve <b>çarklardır.</b></li>
                                <li>Nesneleri <b>makineleştirip</b>, bunun <b>kutsallığını</b> savunmaktadır.</li>
                                <li>Eski sanat içeriklerini bırakıp yeni biçimlere yönelir.</li>
                                <li>Türk Edebiyatı'nda <b>Nazım Hikmet</b> başı çeker.</li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/futurizmcasasantelia.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Antonio Santelia'nın <b>Casa Santelia</b>'sı</div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Psikianaliz, bilinçaltı, rüyalar, mantık değersiz, içgüdü, Sigmund Freud.</span></span>
                        </p>
                    </div>
                    <div className="akiminfo10 akiminfo" id='dadaism'>
                    <p className='akiminfop'>
                            <h1>Dadaizm</h1>
                            <ul>
                                <li>Aklın <b>varlığını</b> ve <b>değerini</b> reddetmiştir.</li>
                                <li>Biçimde <b>kuralsızlık</b> benimsenmiştir.</li>
                                <li>Kelimeler <b>rastgele</b> kullanılarak <b>şiir oluşturulur.</b></li>
                            </ul>
                            <br></br>
                            <div className='imgcont'>
                            <img src="/dadaizmsavas.jpg" alt="" className="i002" />
                            <div><i class="fa-duotone fa-seedling" style={{fontSize: "3vh"}}></i> Antonio Santelia'nın <b>Casa Santelia</b>'sı</div>
                            </div>
                            <br /><br />
                            <span style={{opacity: "0.9", fontSize: "2.5vh"}}>Anahtar Kelimeler: <span style={{fontStyle: "italic"}}>Psikianaliz, bilinçaltı, rüyalar, mantık değersiz, içgüdü, Sigmund Freud.</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
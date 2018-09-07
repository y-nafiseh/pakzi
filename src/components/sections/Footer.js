import React , {Component} from 'react';
import '../../css/font/Font.css';
import '../../css/footer/Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className='row footerContainer'>
                <div className='row socialContainer'>
                    <div className='col-xs-12 col-sm-6 social'>
                        <div className='socialContent'>
                            <span>:پاکزی را در شبکه های اجتماعی</span>
                            <div className='sicialImageContent'>
                                <div className='facebook'>
                                    <a href='#'>
                                        <img className='facebookImage'/>
                                    </a>
                                </div>
                                <div className='linkdin'>
                                    <a href='#'>
                                        <img className='linkdinImage'/>
                                    </a>
                                </div>    
                                <div className='instagram'>
                                    <a href='#'>
                                        <img className='instagramImage'/>
                                    </a>
                                </div>    
                                <div className='telegram'>
                                    <a href='#'>
                                        <img className='telegramImage'/>
                                    </a>    
                                </div>    
                                <div className='twitter'>
                                    <a href='#'>
                                        <img className='twitterImage'/>
                                    </a>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 email'>
                        <div className='emailContent'>
                            <input type='text' placeholder='آدرس ایمیل' />
                            <button>عضویت در خبرنامه</button>
                        </div>
                    </div>
                </div>
                
                <div className='row footerContent'>
                    <div className='col-sm-2 contact'>
                        <div className='contactContainer'>
                            <div className='empty'></div>
                            <div className='number'>
                                <span >تلفن :57936</span>
                            </div>
                            <div className='phone'>
                                <img className='phoneImage'/>
                            </div>    
                        </div>
                    </div>
                
                    <div className='col-sm-4 enamad'>
                        <a href='#'>
                            <img className='enamadImage'/>
                        </a>
                    </div>

                    <div className='col-sm-6 footerLink'>
                        <div className='firstCol'>
                            <div>
                                <a href='#'>پاکزی</a>
                            </div>
                            <div>
                                <a href='#'>سوالات متداول</a>
                            </div>
                            <div>
                                <a href='#'>شرایط و قوانین</a>
                            </div>
                        </div>
                        <div className='secondCol'>
                             <div>
                                <a href='#'>دانلود</a>
                            </div>
                            <div>
                                <a href='#'>وبلاگ</a>
                            </div>
                            <div>
                                <a href='#'>درباره ما</a>
                            </div>
                        </div>
                        <div className='thirdCol'>
                            <div>
                                <a href='#'>راهنما</a>
                            </div>
                            <div>
                                <a href='#'>خدمات ویژه</a>
                            </div>
                            <div>
                                <a href='#'>تماس با ما</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className='row role'>
                    <div className='col-xs-12 roleContainer'>
                        <p>کلیه حقوق مادی و معنوی این وبسایت متعلق به
                            <a href='#'> شرکت اکسون ویژن سیستم </a>
                         میباشد
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
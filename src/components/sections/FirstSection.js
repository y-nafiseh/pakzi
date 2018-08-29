import React, {Component} from 'react';
import '../../css/font/Font.css';
import '../../css/firstSection/FirtSection.css';
import Menu from './Menu';
import  '../../css/media/Media.css';

class FisrSection extends Component{
    render(){
        return(
            <div className='row bg'>
                <Menu />
                <div className='row mainContainer'>
                    <div className='col-xs-12 col-sm-4 imageContainer'>
                        <img className='imageSrc'/>
                    </div>
                    <div className='col-xs-12 col-sm-8 contentContainer'>
                        <div className='rowOne'>
                            <div className='numContainer'>
                                <img className='numSrc'/>
                            </div>
                            <div className='textContainer'>
                                <div className='numText'>
                                    <h1>.سطل یا کیسه از ما بگیرید</h1><span>(رایگان)</span>
                                </div>
                                <div className='numText'>
                                    <h1>.با پسماند خشک پـر کنید</h1>
                                </div>
                                <div className='numText'>
                                    <h1>.پـول دریـــافـــت کـنید</h1>
                                </div>
                            </div>
                        </div>
                        <div className='rowTwo'>
                            <div class='downloadTitle'>
                                <div className='downloadTitleContent'>
                                    <span>برای</span>
                                    <h2> شروع پاکزی</h2>
                                    <span>را نصب کنید</span>
                                </div>
                            </div>
                            <div className='downloadAppLinkContainer'>
                                <div className='downloadAppLink'>
                                    <a href='#'>دانلود اپلیکشن پاکزی</a>
                                </div>
                            </div>
                        </div>
                        <div className='rowThree'>
                            <div class='rowThreeContent'>
                                <p>به همین راحتی در ۳ قـدم پـسـماندهای خود را به پول </p>
                                <p>تبدیل کنید. سامانه جمع آوری و خرید پـسـماندهای </p>
                                <p>خشک</p>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default FisrSection;
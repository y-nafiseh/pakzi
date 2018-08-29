import React, {Component} from 'react';
import '../../css/font/Font.css';
import '../../css/fourthSection/FourthSection.css';

class FourthSection extends Component{
    render(){
        return(
            <div className='row fourthSectionBg'>
                <div className='row fourthSectionContainer'>
                    <div className='col-xs-12 col-sm-7 imageContainer'>
                        <img className='imageSrc'/>
                    </div>
                    <div className='col-xs-12 col-sm-5 contentContainer'>
                        <div className='contentContainerText'>
                            <h2>خودروهای پاکزی</h2>
                            <p>بعد از درخواست شما برای تخلیه پسماندها، ما در  </p>
                            <p>زمانی که شما مشخص کرده اید در محل مورد نظر </p>
                            <p>شما مستقر شده پسماندها را از شما تحویل گرفته </p>
                            <p>.و پول آن را پرداخت میکنیم </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FourthSection;
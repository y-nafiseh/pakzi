import React, {Component} from 'react';
import '../../css/font/Font.css';
import '../../css/secondSection/SecondSection.css';

class SecondSection extends Component{
    render(){
        return(
            <div className='secondSectionBg'>
                <div className='SecondSectionContainer'>
                    <div className='imageContainer'>
                        <img className='imageSrc'/>
                    </div>
                    <div className='contentContainer'>
                    <div className='contentContainerText'>
                        <h2>جمع آوری پسماندهای خشک</h2>
                        <p>پسماندهای خشک از قبیل کاغذ، شیشه، پلاستیک و … را </p>
                        <p>داخل سطلی یا کیسه ای که به شما تحویل داده ایم پر </p>
                        <p>.کنید</p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SecondSection;
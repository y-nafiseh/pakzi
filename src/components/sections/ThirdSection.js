import React, {Component} from 'react';
import '../../css/font/Font.css';
import '../../css/thirdSection/ThirdSection.css';

class ThirdSection extends Component{
    render(){
        return(
            <div className='thirdSectionBg'>
                <div className='thirdSectionContainer'>
                    <div className='imageContainer'>
                        <img className='imageSrc'/>
                    </div>
                    <div className='contentContainer'>
                        <div className='contentContainerText'>
                            <h2>درخواست برای تخلیه</h2>
                            <p>بعد از اینکه سطل یا کیسه پر شد در اپلیکیشن پاکزی  </p>
                            <p>زمان در محل شما حاضر شده و پسماندها را از شما تحویل  </p>
                            <p>.میگیریم</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ThirdSection;
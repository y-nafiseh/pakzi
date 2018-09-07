import React , {Component} from 'react';
import '../../css/font/Font.css';
import '../../css/downloadSection/DownloadSection.css';

class DownloadApp extends Component{
    render(){
        return(
            <div className='downloadContainer'>
                <div className='downloadTitle'>
                    <h2>.برای شروع پاکزی را نصب کنید</h2>
                </div>
                <div className='downloadLinkContainer'>
                    <div className='bazar'>
                        <a href='#'>
                            <img className='imageSrc'/>
                        </a>
                    </div>
                    <div className='sibApp'>
                        <a href='#'>
                            <img className='imageSrc'/>
                        </a>
                    </div>
                </div>
                <div className='anotherLink'>
                    <a href='#'>دانلود به روش های دیگر</a>
                </div>
            </div>
        );
    }
}
export default DownloadApp;
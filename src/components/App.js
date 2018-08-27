import React, { Component } from 'react';
import '../css/font/Font.css';
import Menu from './sections/Menu';
import {Route} from 'react-router-dom';
import FisrSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import FourthSection from './sections/FourthSection';
import DownloadApp from './sections/DownloadSection';
import Footer from './sections/Footer';



class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <FisrSection />
                </div>
                <div>
                    <SecondSection />
                </div>
                <div>
                    <ThirdSection />
                </div>
                <div>
                    <FourthSection />
                </div>
                <div>
                    <DownloadApp />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
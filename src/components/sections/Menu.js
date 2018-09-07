import React , {Component} from 'react';
import '../../css/font/Font.css';
import  '../../css/menu/Menu.css';
import  '../../css/media/Media.css';

class Header extends Component{
    constructor () {
        super()
        this.state = {
          show : true,
          hide : false,
        };
        this.menuDiv = this.menuDiv.bind(this)
        this.closeIconDiv = this.closeIconDiv.bind(this)
        }
        menuDiv = () => {
            const { show } = this.state;
            this.setState({show : !show});
        }
        closeIconDiv = () =>{
            const { hide } = this.state;
            this.setState({hide : !hide});
        }
    render(){
        return (        
            <div className='row menuContainer'>
                <div className='col-xs-2 burggerIcon'>
                    <div className='burggerContent'>
                        {/* <div className='burggerBtn'>
                            <button className='burggerSrc'  onClick={()=> this.toggleHidden()}></button>
                        </div> */}
                        




                        <button className='burggerBtn' onClick={()=> this.menuDiv()}>
                            {this.state.show && <Burgger />}
                        </button>

                        <button className='closeBtn' onClick={()=> this.closeIconDiv()}>
                            {this.state.hide && <Close />}
                        </button>
                        {/* <button className='closeSrc'></button> */}

                    </div>
                </div>
                <div className='col-xs-10 col-sm-1 logo'>
                    <a href='#' alt='logo'>
                        <img className='logoSrc'/>
                    </a>
                </div>
                <div className='col-sm-11 linksContainer'>
                    <ul>
                        <li>
                            <a href='#'>پاکزی</a>
                        </li>
                        <li>
                            <a href='#'>دانلود</a>
                        </li>
                        <li>
                            <a href='#'>راهنما</a>
                        </li>
                        <li>
                            <a href='#'>سوالات متداول</a>
                        </li>
                        <li>
                            <a href='#'>وبلاگ</a>
                        </li>
                        <li>
                            <a href='#'>تماس با ما</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } 
}
 class Burgger extends Component {
   render(){
       return(
            <div className='burggerSrc'></div> 
         ); 
     } 
 }
 class Close extends Component {
    render(){
        return(
             <div className='closeSrc'></div> 
          ); 
      } 
  } 
export default Header;
import React , {Component} from 'react';
import '../../css/font/Font.css';
import  '../../css/menu/Menu.css';

class Header extends Component{
    render(){
        return (
            <div className='menuContainer'>
                <div className='logo'>
                    <a href='#' alt='logo'>
                        <img className='logoSrc'/>
                    </a>
                </div>
                <div className='linksContainer'>
                    <ul>
                        <li>
                            <a href='a'>پاکزی</a>
                        </li>
                        <li>
                            <a href='a'>دانلود</a>
                        </li>
                        <li>
                            <a href='a'>راهنما</a>
                        </li>
                        <li>
                            <a href='a'>سوالات متداول</a>
                        </li>
                        <li>
                            <a href='a'>وبلاگ</a>
                        </li>
                        <li>
                            <a href='a'>تماس با ما</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Header;
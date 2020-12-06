import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuMobile = ()=> {
        setMobileMenu(!mobileMenu); 
        console.log(mobileMenu);
    }
    return (
        <>
            <div id="header" className="headerWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4  col-6 col-sm-6 logo">
                            <Link to="/"><img src={require('./img/logo.png').default}/></Link>
                        </div>
                        <div className="col-md-8 col-sm-6 col-6 menuWrap">
                            <ul className="menu">
                                <li><a className="active" href="#header">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#package">Pricing</a></li>
                                <li><a href="#contact" className="contactus">Contact us</a></li>
                            </ul>
                            <div className="mobileMenuWrap">
                                <button onClick={menuMobile} className="MenuBtn">
                                   {!mobileMenu && <img src={require('./img/menuuu.png').default}/>}
                                  {mobileMenu &&  <img src={require('./img/cross.png').default}/> }
                                </button>
                            </div>
                        </div>
                        
                        {mobileMenu && 
                        <div className="flipMobileMenu">
                            
                                <button onClick={menuMobile} className="MenuBtn">
                                    <img src={require('./img/cross.png').default}/> 
                                </button>

                                <ul className="mobileMenu">
                                    <li><a onClick={menuMobile} className="active" href="#header">Home</a></li>
                                    <li><a onClick={menuMobile} href="#services">Services</a></li>
                                    <li><a onClick={menuMobile} href="#package">Pricing</a></li>
                                    <li><a onClick={menuMobile} href="#contact" className="contactus">Contact us</a></li>
                                </ul>
                                
                        </div>
                             }
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 hdInfo_wrap">
                            <div className="hdInfo">
                                <h1>Florence agency</h1>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>    
                                <a className="btn_2" href="#package">See Pricing</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 hdbigImage">
                            <img src={require('./img/16.png').default}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
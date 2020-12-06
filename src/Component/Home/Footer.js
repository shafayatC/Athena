import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footerWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 col-sm-12 ftrLeft">
                            <div className="logo_2"><img  src={require('./img/logo.png').default}/></div>
                            <div className="socialMedia">
                            <a href="http://facebook.com" target="_blank"><img src={require('./img/fb.png').default}/></a>
                            <a href="http://twitter.com" target="_blank"><img src={require('./img/twitter.png').default}/></a>
                            <a href="http://linkdin.com" target="_blank"><img src={require('./img/linkdin.png').default}/></a>
                            <a href="http://google.com" target="_blank"><img src={require('./img/dribble.png').default}/></a>
                            </div>
                        </div>
                        <div className="col-md-8 col-12 col-sm-12 ftrRight">
                            <div className="linkList_1">
                                <ul>
                                    <li><a href="#">Feature</a></li>
                                    <li><a href="#">Enterprise</a></li>
                                    <li><a href="#">Pricing</a></li>
                                </ul>
                            </div>
                            <div className="linkList_1">
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Status</a></li>
                                </ul>
                            </div>
                            <div className="linkList_1">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Term Of Service</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Footer;
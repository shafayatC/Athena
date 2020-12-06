import React from 'react';

const Package = () => {
    return (
        <>
            <div id="package" className="packageWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading_3 fwidth">Choose Your Dedicated Package</h2>
                            
                            <div className="package fwidth">
                                <div className="packageSingle">
                                    <div className="pkgTop">
                                        <h3>$199</h3>
                                        <p>For Basic</p>
                                    </div>
                                    <div className="pkgMiddle">
                                        <ul>
                                            <li>Home Page</li>
                                            <li>No inner page</li>
                                            <li>Asset file</li>
                                            <li>Source file</li>
                                            <li>Free stock photos</li>
                                            <li>10 days free support</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>
                                    <div className="pkgBottom">
                                        <button className="orderBtn">Order Now</button>
                                    </div>
                                </div>
                                
                                <div className="packageSingle active">
                                    <div className="pkgTop">
                                        <h3>$399</h3>
                                        <p>For Preferred</p>
                                    </div>
                                    <div className="pkgMiddle">
                                        <ul>
                                            <li>Home Page</li>
                                            <li>4 inner page</li>
                                            <li>Asset file</li>
                                            <li>Source file</li>
                                            <li>Free stock photos</li>
                                            <li>20 days free support</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>
                                    <div className="pkgBottom">
                                        <button className="orderBtn">Order Now</button>
                                    </div>
                                </div>
                                
                                <div className="packageSingle">
                                    <div className="pkgTop">
                                        <h3>$599</h3>
                                        <p>For Basic</p>
                                    </div>
                                    <div className="pkgMiddle">
                                        <ul>
                                            <li>Home Page</li>
                                            <li>8 inner page</li>
                                            <li>Asset file</li>
                                            <li>Source file</li>
                                            <li>Free stock photos</li>
                                            <li>30 days free support</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>
                                    <div className="pkgBottom">
                                        <button className="orderBtn">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Package;
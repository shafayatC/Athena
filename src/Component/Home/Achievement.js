import React from 'react';

const Achievement = () => {
    return (
        <>
            <div className="achievWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 lftAchieve">
                           <h2>Our Achievements</h2> 
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have 
                               suffered alteration in some form, by injected humour. </p>
                        </div>
                        <div className="col-md-7 col-12 col-sm-12 rgtAchieve">
                            
                            <div className="achiveBtn active">
                                <img src={require('./img/happy@2x.png').default}/>
                                <div className={"btn_info"}>
                                    <h3 className="price">700+</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            
                            <div className="achiveBtn">
                                <img src={require('./img/marketing@2x.png').default}/>
                                <div className={"btn_info"}>
                                    <h3 className="price">140+</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            
                            <div className="achiveBtn">
                                <img src={require('./img/surface1@2x.png').default}/>
                                <div className={"btn_info"}>
                                    <h3 className="price">25+</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="achiveBtn">
                                <img src={require('./img/transportation@2x.png').default}/>
                                <div className={"btn_info"}>
                                    <h3 className="price">75+</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Achievement;
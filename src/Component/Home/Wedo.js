import React from 'react';

const Wedo = () => {
    return (
        <>
            <div id="services" className="wedo_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 info_2">
                            <h1>What We Do</h1>
                            <p>Our main focus is to make the User Experience very simple and easy. Simplicity </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row serviceWrap">
                        <div className="col-md-3 col-12 col-sm-12 service">
                            <img src={require('./img/service1.png').default} />
                            <h3>Experience Design</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                        <div className="col-md-3 col-12 col-sm-12 service active">
                            <img src={require('./img/service2.png').default} />
                            <h3>Experience Design</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                        <div className="col-md-3 col-12 col-sm-12 service">
                            <img src={require('./img/service3.png').default} />
                            <h3>Experience Design</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                        <div className="col-md-3 col-12 col-sm-12 service">
                            <img src={require('./img/service4.png').default} />
                            <h3>Experience Design</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wedo;
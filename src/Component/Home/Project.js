import React from 'react';

const Project = () => {
    return (
        <>
            <div className="projectWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 prLeft">
                            <img className="fwidth" src={require('./img/20.png').default}/>
                        </div>
                        <div className="col-md-6 col-sm-12 prRight">
                            <h2>Stay Running & Project</h2>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <a href="#" className="contactus_2">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
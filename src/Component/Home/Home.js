import React from 'react';
import Achievement from './Achievement';
import Footer from './Footer';
import Header from './Header';
import Package from './Package';
import Project from './Project';
import Subscribe from './Subscribe';
import Wedo from './Wedo';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Wedo></Wedo>
            <Project></Project>
            <Achievement></Achievement>
            <Package></Package>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </>
    );
};

export default Home;
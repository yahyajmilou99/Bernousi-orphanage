import React from 'react';
import Navbar from '../../layouts/navbar';
import MainBanner from './components/MainBanner';
import Introduction from './components/Introduction';
import Highlights from './components/Highlights';
import News from './components/News';
import Footer from '../../layouts/Footer';

const Home = () => {
    
    return (
        <>
            <Navbar/>
            <MainBanner/>
            <Introduction/>
            <Highlights/>
            <News/>
            <Footer/>
        </>
    );
};

export default Home;
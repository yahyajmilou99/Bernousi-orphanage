import React from 'react';
import Navbar from '../../layouts/navbar';
import AboutHero from './components/AboutHero';
import Values from './components/Values';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import JoinUs from './components/JoinUs';
import Footer from '../../layouts/Footer';

const About = () => {
    return (
        <>
            <Navbar/>
            <AboutHero/>
            <Values/>
            <Team/>
            <Sponsors/>
            <JoinUs/>
            <Footer/>
        </>
    );
};

export default About;
import React from 'react';
import Navbar from '../../layouts/navbar';
import DonationPage from './components/DonationPage';
import Footer from '../../layouts/Footer';

const Donate = () => {
    return (
        <>
            <Navbar/>
            <DonationPage/>
            <Footer/>
        </>
    );
};

export default Donate;
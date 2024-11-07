import React from 'react';
import Navbar from '../../layouts/navbar';
import AllPrograms from './components/AllPrograms';
import Footer from '../../layouts/Footer';


const Programs = () => {
    return (
        <>
            <Navbar/>
            <AllPrograms/>
            <Footer/>
        </>
    );
};

export default Programs;
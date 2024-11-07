import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className='py-[3rem] px-[1rem] bg-[#1A1A3D] text-white w-[100%] '>
                <div className="flex lg:flex-row flex-col w-[100%] justify-between lg:gap-0 gap-10">
                    <div className="flex flex-col gap-4  lg:w-[30%] ">
                        <p className='font-bold text-[22px]'>Contact Us</p>
                        <div className='flex flex-col gap-2 font-semibold '>
                            <div className="flex items-center gap-2 ">
                                <BsTelephone className='text-[25px] ' />
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <IoMailOutline className='text-[25px] ' />
                                <p>info@burnousiorph.org</p>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <IoLocationOutline className='text-[25px] ' />
                                <p>123 Compassion Lane, Kindness City, 12345</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4  lg:w-[30%] w-[100%] ">
                        <p className='font-bold text-[22px]'>Quick Links</p>
                        <div className='flex flex-col gap-3 font-semibold '>
                            <p>About Us</p>
                            <p>Our Programs</p>
                            <p>Ways to Give</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4  lg:w-[30%] w-[100%] ">
                        <p className='font-bold text-[22px]'>Follow Us</p>
                        <div className='flex gap-3 text-[25px] '>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
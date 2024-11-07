import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
const ContactUs = () => {
    return (
        <>
            <section className="bg-[#F9FAFB]">
                <div className="flex flex-col items-center py-[4rem] w-[100%] gap-10  ">
                    <div className="flex flex-col items-center py-[1rem]">
                        <h1 className='text-[50px] font-bold '>Contact Us</h1>
                        <p>Get in touch with Sunshine Orphanage</p>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between px-[2rem] py-[3rem] rounded-[20px] w-[85%] lg:gap-0 gap-10 bg-[#dedcff] ">

                        {/* left */}
                        <div className="lg:w-[45%] w-[100%] flex flex-col gap-4 ">
                            <div className="flex flex-col gap-4">
                                <h4 className='text-[25px] font-semibold '>Contact informations</h4>
                                <div className="lg:text-nowrap flex flex-col gap-2">
                                    <p className='text-[17px] flex items-center gap-2 '><IoLocationOutline className='text-[21px] '/> ASSOC DE BIENFAISANCE, Casablanca 20600</p>
                                    <p className='text-[17px] flex items-center gap-2 '><FiPhone /> 0522731614</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className='text-[25px] font-semibold '>Follow Us</h4>
                                <div className="flex flex-col gap-2 text-[18px]">
                                    <p className='flex items-center gap-2 '>Visit Our :<GrInstagram /></p>
                                    <p className='flex items-center gap-2 '>Visit Our :<FaFacebookSquare /></p>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="lg:w-[45%] w-[100%] flex flex-col gap-4 ">
                            <h4 className='text-[25px] font-semibold '>Our Location</h4>
                            <iframe className='w-[100%] h-[18rem] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.4821249580236!2d-7.49506662541328!3d33.61873907332333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cba61eb4f627%3A0x7395ce97bd405885!2sORPHELINAT%20SIDI%20BERNOUSSI%20Maison%20Enfants%20Bernoussi!5e0!3m2!1sfr!2sma!4v1730384989561!5m2!1sfr!2sma"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
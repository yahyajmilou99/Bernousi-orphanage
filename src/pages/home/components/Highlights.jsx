import React from 'react';
import { TbUsersGroup } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import TransText from '../../../components/TransText';
import { Link } from 'react-router-dom';

const Highlights = () => {
    return (
        <>
            <section className=''>
                <div className="py-[4rem] bg-[#F9FAFB] flex flex-col text-center items-center lg:gap-10 gap-16 w-[100%] ">
                    <p className='lg:text-[35px] text-[30px] font-bold'><TransText fr="Notre impact" ar="تأثيرنا" /> </p>
                    <div className="flex flex-col lg:flex-row w-[75%] lg:justify-between lg:gap-0 gap-16">
                        <div className="flex flex-col items-center gap-4 ">
                            <FaRegHeart className='lg:text-[60px] text-[40px] text-[#4D4DFF] ' />
                            <p className='text-[30px] font-bold '>250+</p>
                            <p className='text-[23px] font-semibold'><TransText fr="Enfants soutenus" ar="الأطفال المدعومون" /> </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 ">
                            <TbUsersGroup className='lg:text-[60px] text-[40px] text-[#4D4DFF] ' />
                            <p className='text-[30px] font-bold '>50+</p>
                            <p className='text-[23px] font-semibold'><TransText fr="Équipe dévouée" ar="طاقم مخلص" /></p>
                        </div>
                        <div className="flex flex-col items-center gap-4 ">
                            <IoBookOutline className='lg:text-[60px] text-[40px] text-[#4D4DFF] ' />
                            <p className='text-[30px] font-bold '>10</p>
                            <p className='text-[23px] font-semibold'><TransText fr="Programmes éducatifs" ar="برامج تعليمية" /></p>
                        </div>
                    </div>
                </div>
                <div className="py-[4rem] w-[100%] flex lg:flex-row flex-col items-center justify-center gap-9 ">
                    <Link className='lg:w-[20%] w-[45%] py-[0.7rem] text-[20px] text-center bg-[#32CD32] hover:shadow-lg hover:shadow-[#32cd32a6] hover:scale-[1.05] transition duration-150 text-white font-bold rounded-full ' to={"supportUs"}>
                        <button ><TransText fr="faire un don" ar="تبرع" /></button>
                    </Link>
                    <Link className='lg:w-[20%] w-[45%] py-[0.7rem] text-[20px] text-center bg-[#4D4DFF] text-white font-bold rounded-full ' to={"/contactUs"}>
                        <button ><TransText fr="Bénévole" ar="تطوع" /></button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Highlights;
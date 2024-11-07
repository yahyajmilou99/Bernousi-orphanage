import React from 'react';
import TransText from '../../../components/TransText';


import { FiHeart } from "react-icons/fi";
import { FaHandshake, FaUsers } from "react-icons/fa";

const Values = () => {
    return (
        <>
            <section className='py-[5rem] px-[1.5em]  '>
                <div className="flex flex-col w-[100%] gap-10 items-center justify-center  ">
                    <p className='text-[40px] font-bold text-center '><TransText fr="Notre mission et nos valeurs" ar=" مهمتنا وقيمنا" /></p>
                    <div className="w-[100%] flex lg:flex-row flex-col text-white justify-between lg:gap-0 gap-5 ">
                        <div className="flex p-[1.6rem]  rounded-[12px] flex-col items-center lg:w-[30%] w-[100%] bg-[#4D4DFF] text-center ">
                            <FiHeart className='text-[50px] mb-3  ' />
                            <h4 className='text-[25px] font-semibold '><TransText fr="Compassion" ar="تعاطف" /></h4>
                            <p className='text-[18px] '>
                                <TransText fr="Nous offrons des soins et un soutien affectueux à chaque enfant dans notre foyer" ar="نحن نقدم رعاية ودعمًا مليئين بالحب لكل طفل في دارنا" />
                            </p>
                        </div>
                        <div className="flex p-[1.6rem]  rounded-[12px] flex-col items-center lg:w-[30%] w-[100%] bg-[#4D4DFF] text-center ">
                            <FaUsers  className='text-[50px] mb-3  '/>
                            <h4 className='text-[25px] font-semibold '><TransText fr="Intégrité" ar="نزاهة" /></h4>
                            <p className='text-[18px] '>
                                <TransText fr="Nous maintenons les normes les plus élevées d'honnêteté et de comportement éthique" ar="نحن نلتزم بأعلى معايير الصدق والسلوك الأخلاقي" />
                            </p>
                        </div>
                        <div className="flex p-[1.6rem]  rounded-[12px] flex-col items-center lg:w-[30%] w-[100%] bg-[#4D4DFF] text-center ">
                            <FaHandshake  className='text-[50px] mb-3  '/>
                            <h4 className='text-[25px] font-semibold '><TransText fr="Résilience" ar="مرونة" /></h4>
                            <p className='text-[18px] '>
                                <TransText fr="Nous favorisons la force et la persévérance face aux défis" ar="نحن نعزز القوة والإصرار في مواجهة التحديات" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Values;
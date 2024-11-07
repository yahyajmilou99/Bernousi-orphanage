import React from 'react';
import TransText from '../../../components/TransText';


const News = () => {
    return (
        <>
            <section className="py-[4rem] bg-[#F9FAFB] ">
                <div className="flex flex-col items-center justify-center gap-2 ">
                    <h1 className='lg:text-[35px] text-[30px] font-bold text-center '> <TransText fr="Dernières nouvelles et événements" ar="آخر الأخبار والفعاليات" /> </h1>
                    <div className="cards w-[100%] lg:p-[2rem] p-[1em] flex lg:flex-row flex-col justify-around lg:gap-0 gap-8">
                        <div className="card hover:scale-[1.05] transition duration-300 shadow-lg flex flex-col lg:w-[30%] w-[100%] rounded-[16px] bg-white overflow-hidden ">
                            <img className='w-[100%] h-[14em] ' src="/Charity.jpg" alt="" />
                            <div className="p-[1.5rem] flex flex-col gap-3 ">
                                <h5 className='text-[20px] font-bold '><TransText fr="Titre de nouvelles passionnantes" ar="عنوان الأخبار المثيرة" /></h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                                
                                <p className='font-bold text-[#666666] text-[18px] '><TransText fr="En savoir plus" ar="تعرّف على المزيد" /></p>
                            </div>
                        </div>
                        <div className="card hover:scale-[1.05] transition duration-300 shadow-lg flex flex-col lg:w-[30%] w-[100%] rounded-[16px] bg-white overflow-hidden ">
                            <img className='w-[100%] h-[14em] ' src="/Charity.jpg" alt="" />
                            <div className="p-[1.5rem] flex flex-col gap-3 ">
                                <h5 className='text-[20px] font-bold '><TransText fr="Titre de nouvelles passionnantes" ar="عنوان الأخبار المثيرة" /></h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                                <p className='font-bold text-[#666666] text-[18px] '><TransText fr="En savoir plus" ar="تعرّف على المزيد" /></p>
                            </div>
                        </div>
                        <div className="card hover:scale-[1.05] transition duration-300 shadow-lg flex flex-col lg:w-[30%] w-[100%] rounded-[16px] bg-white overflow-hidden ">
                            <img className='w-[100%] h-[14em] ' src="/Charity.jpg" alt="" />
                            <div className="p-[1.5rem] flex flex-col gap-3 ">
                                <h5 className='text-[20px] font-bold '><TransText fr="Titre de nouvelles passionnantes" ar="عنوان الأخبار المثيرة" /></h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                                <p className='font-bold text-[#666666] text-[18px] '><TransText fr="En savoir plus" ar="تعرّف على المزيد" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;
import React from 'react';
import TransText from '../../../components/TransText';


const Sponsors = () => {
    return (
        <>
            <section className='py-[5rem] px-[1.5rem] flex flex-col gap-10 items-center justify-center '>
                <h1 className='text-[40px] font-bold text-center'><TransText fr="Nos partenaires et sponsors" ar="شركاؤنا ورعاتنا" /></h1>
                <div className="w-[100%] flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between">
                    <div className="flex flex-col items-center lg:w-[31%] w-[100%] bg-[#4D4DFF] rounded-[18px] p-6 gap-3 ">
                        <div className="w-[6rem] h-[6rem] rounded-full bg-[#fff] "><img src="" alt="" /></div>
                        <p className='text-[20px] font-bold ' ><TransText fr="Partenaire/Référent 1" ar="الشريك/الراعي 1" /></p>
                    </div>
                    <div className="flex flex-col items-center lg:w-[31%] w-[100%] bg-[#4D4DFF] rounded-[18px] p-6 gap-3 ">
                        <div className="w-[6rem] h-[6rem] rounded-full bg-[#fff] "><img src="" alt="" /></div>
                        <p className='text-[20px] font-bold ' ><TransText fr="Partenaire/Référent 1" ar="الشريك/الراعي 1" /></p>
                    </div>
                    <div className="flex flex-col items-center lg:w-[31%] w-[100%] bg-[#4D4DFF] rounded-[18px] p-6 gap-3 ">
                        <div className="w-[6rem] h-[6rem] rounded-full bg-[#fff] "><img src="" alt="" /></div>
                        <p className='text-[20px] font-bold ' ><TransText fr="Partenaire/Référent 1" ar="الشريك/الراعي 1" /></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sponsors;
import React from 'react';
import TransText from '../../../components/TransText';
import { useNavigate } from 'react-router-dom';

const MainBanner = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="w-[100%] h-[30em] flex items-center justify-center relative bg-gray-600  ">
                <img className='w-[100%] h-[100%] opacity-50' src="/Charity.jpg" alt="" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-[#333333] text-center ">
                    <h1 className='lg:text-[65px] text-[40px] font-bold '><TransText fr="Donner de l'espoir, changer des vies" ar="أعطِ الأمل، وغيّر الحياة" /></h1>
                    <h5 className='lg:text-[24px] text-[20px] font-semibold'><TransText fr="Chaque enfant mérite un foyer aimant et un avenir radieux." ar="كل طفل يستحق منزلًا مليئًا بالحب ومستقبلًا مشرقًا" /></h5>
                    <button onClick={()=>{navigate("/supportUs")}} className=' font-bold lg:py-[1rem] py-[.8rem] lg:px-[2.5rem] px-[1.6rem] lg:text-[18px] text-white rounded-full bg-[#0000FF]'><TransText fr=" Faites un don" ar="تبرع الآن" /> </button>
                </div>
            </section>
        </>
    );
};

export default MainBanner;
import React from 'react';
import TransText from '../../../components/TransText';
import { useNavigate } from 'react-router-dom';


const AboutHero = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="w-[100%] h-[30em] flex items-center justify-center relative bg-gray-600  ">
                <img className='w-[100%] h-[100%] opacity-50 object-cover' src="/img3.jpg" alt="" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2  text-white text-center ">
                    <h1 className='lg:text-[65px] text-[40px] font-bold'><TransText fr="À propos de l'Orphelinat Burnousi" ar="حول دار الأيتام برنوصي" /></h1>
                    <h5 className='lg:text-[24px] text-[20px] font-semibold'><TransText fr=" Une histoire de compassion, de résilience et d'espoir pour les enfants vulnérables du Maroc." ar="قصة من التعاطف والمرونة والأمل لأطفال المغرب المستضعفين" /></h5>
                    <button onClick={()=>{navigate("/supportUs")}} className=' font-bold lg:py-[1rem] py-[.8rem] lg:px-[2.5rem] mt-12 px-[1.6rem] lg:text-[18px] text-white rounded-full bg-[#0000FF]'><TransText fr="Faites un don" ar="تبرع الآن" /></button>
                </div>
            </section>
        </>
    );
};

export default AboutHero;
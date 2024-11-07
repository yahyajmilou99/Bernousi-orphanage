import React from 'react';
import TransText from '../../../components/TransText';


const Introduction = () => {
    return (
        <>
            <section className="py-[6em] text-center lg:px-[10em] px-[0.5rem] flex flex-col items-center  gap-4 ">
                <h1 className='text-[40px] font-bold  '><TransText fr="Notre mission"  ar="مهمتنا" /></h1>
                <p className='lg:text-[22px] text-[18px] '>
                    <TransText 
                    fr="À l'Orphelinat Burnousi, nous nous engageons à offrir un foyer aimant, une éducation de qualité et des soins essentiels aux enfants orphelins et vulnérables au Maroc. Notre objectif est de donner à ces enfants les moyens de construire un avenir meilleur pour eux-mêmes et leurs communautés."
                    ar="في دار الأيتام برنوصي، نحن ملتزمون بتوفير منزل مليء بالحب، وتعليم عالي الجودة، ورعاية أساسية للأطفال الأيتام والمستضعفين في المغرب. هدفنا هو تمكين هؤلاء الأطفال لبناء مستقبل أكثر إشراقًا لأنفسهم ولمجتمعاتهم."
                    />
                </p>
                <button className='font-bold lg:py-[1rem] py-[.8rem] lg:px-[2.5rem] px-[1.6rem] lg:text-[18px] rounded-full bg-[#0000FF] text-white'><TransText fr="En savoir plus" ar="تعرّف على المزيد" /> </button>
            </section>
        </>
    );
};

export default Introduction;
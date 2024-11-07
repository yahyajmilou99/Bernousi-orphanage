import React from 'react';
import TransText from '../../../components/TransText';


import { FaDonate } from 'react-icons/fa';
import { TbUsersGroup } from "react-icons/tb";

const Team = () => {
    return (
        <>
            <section className='bg-[#F2F3F5] py-[3rem] px-[1.8rem] '>
                <div className="w-[100%] flex flex-col items-center gap-10 lg:text-start text-center ">
                    <h1 className='text-[40px] font-bold'><TransText fr="Notre équipe dévouée" ar="فريقنا" /></h1>
                    <div className="flex lg:flex-row flex-col w-[100%] justify-between lg:gap-0 gap-7 ">
                        <div className="lg:w-[45%] w-[100%] flex flex-col gap-3 bg-[#5676ff] text-white p-8 rounded-[16px] ">
                            <h4 className='text-[30px] font-bold flex items-center gap-3 '><FaDonate /> <TransText fr="Fondateurs" ar="المؤسسون" /></h4>
                            <p className='text-[18px] font-semibold '>

                                <TransText fr="Nos fondateurs se sont lancés dans cette aventure avec une vision de créer un refuge sûr pour les enfants vulnérables au Maroc. Leur engagement indéfectible a été la pierre angulaire du succès de l'Orphelinat Burnousi" ar="بدأ مؤسسوها هذه الرحلة برؤية لإنشاء ملاذ آمن للأطفال المستضعفين في المغرب. لقد كان التزامهم الثابت هو حجر الزاوية لنجاح دار الأيتام برنوصي." />
                            </p>
                        </div>
                        <div className="lg:w-[45%] w-[100%] flex flex-col gap-3 bg-[#5676ff] text-white p-8 rounded-[16px]">
                            <h4 className='text-[30px] font-bold flex items-center gap-3'><TbUsersGroup /><TransText fr="Directeurs" ar="المديرون" />  </h4>
                            <p className='text-[18px] font-semibold '>
                                <TransText fr="Nos directeurs apportent un ensemble diversifié de compétences et d'expériences, unis par leur passion pour le bien-être des enfants. Leur leadership garantit que l'Orphelinat Burnousi continue de croître et de s'adapter aux besoins de nos enfants" ar="يجلب مديرونا مجموعة متنوعة من المهارات والخبرات، موحدين بشغفهم لرفاهية الأطفال. يضمن قيادتهم أن تواصل دار الأيتام برنوصي النمو والتكيف مع احتياجات أطفالنا" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
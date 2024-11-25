import React from 'react';
import TransText from '../../../components/TransText';
import { useNavigate } from 'react-router-dom';


const JoinUs = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='py-[4rem] bg-[#F2F3F5] flex flex-col items-center justify-center text-center gap-4'>
                <h1 className=';g:text-[40px] text-[30px] font-bold '> <TransText fr="Rejoignez-nous pour faire la différence" ar="انضم إلينا لإحداث فرق" /></h1>
                <p className='lg:w-[40%]  font-semibold '> <TransText fr=" Votre soutien peut nous aider à poursuivre notre mission de fournir un environnement bienveillant pour les enfants vulnérables du Maroc. Ensemble, nous pouvons avoir un impact durable sur leurs vies" ar="يمكن أن يساعد دعمك في مواصلة مهمتنا المتمثلة في توفير بيئة حاضنة للأطفال المستضعفين في المغرب. معًا، يمكننا إحداث تأثير دائم في حياتهم." />
                </p>
                <button onClick={()=>{navigate("/contactUs")}} className='font-bold px-[3.3rem] py-[.7rem] bg-[#4D4DFF] mt-4 rounded '><TransText fr="Rejoignez-nous" ar="انضم إلينا" /></button>
            </section>
        </>
    );
};

export default JoinUs;
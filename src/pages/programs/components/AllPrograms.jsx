import React from 'react';
import classe from "../../../assets/imgs/class.png"
import medi from "../../../assets/imgs/orphan-medical.webp"
import skills from "../../../assets/imgs/skills.jpg"
import art from "../../../assets/imgs/art.jpg"
import { FaBook, FaHeart, FaPaintBrush } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useAppContext } from '../../../utils/ContextProvider';
import TransText from '../../../components/TransText';


const AllPrograms = () => {
    const {selectedLanguage} = useAppContext()
    return (
        <>
            <section dir={selectedLanguage == "ar" ? "rtl" : "ltr"} className=' bg-[#F9FAFB]'>
                <div className="flex flex-col items-center py-[4rem] md:px-[3rem] px-[.5rem] w-[100%] lg:gap-0 gap-10 ">
                    <h1 className='text-[45px] font-bold '><TransText fr="Les Programmes" ar="البرامج" /></h1>
                    <div className="flex flex-col items-center md:p-[2rem] p-[.5rem] w-[100%] gap-16 ">

                        <div className="card flex flex-col lg:gap-10 gap-5   bg-white rounded-[20px] lg:p-[3rem] p-[1rem]  w-[100%] ">
                            <h4 className='text-[30px] font-bold flex items-center lg:justify-start justify-center gap-2 text-[#0000CC]'><FaBook /> <TransText fr="L'éducation" ar="التعليم" /></h4>
                            <div className="w-[100%]  flex md:flex-row flex-col justify-between lg:gap-0 gap-4">
                                <div className="md:w-[40%] w-[100%] lg:h-[16rem] h-[10rem]  bg-green-400 ">
                                    <img className='w-[100%] h-[100%] ' src={classe} alt="" />
                                </div>
                                <div className="md:w-[50%] w-[100%] h-[100%] oh  md:text-start text-center ">
                                    <p className='lg:text-[21px] tex-[16px] font-bold'>
                                        <TransText fr="Notre programme éducatif offre des opportunités d'apprentissage structurées qui préparent les enfants à réussir dans le futur. Nous mettons l'accent sur le développement des compétences de pensée critique, l'encouragement de la curiosité et la création d'un amour pour l'apprentissage tout au long de la vie. Nos enseignants dévoués travaillent sans relâche pour s'assurer que chaque enfant reçoit l'attention et le soutien dont il a besoin pour s'épanouir académiquement."
                                            ar="يقدم برنامجنا التعليمي فرص تعلم منظمة تُعد الأطفال للنجاح في المستقبل. نركز على تطوير مهارات التفكير النقدي، وتعزيز الفضول، وخلق حب التعلم مدى الحياة. يعمل معلمونا المخلصون بلا كلل لضمان حصول كل طفل على الاهتمام والدعم الذي يحتاجه للتفوق أكاديميًا"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card flex flex-col lg:gap-10 gap-5  bg-white rounded-[20px] lg:p-[3rem] p-[1rem]  w-[100%] ">
                            <h4 className='text-[30px] font-bold flex items-center lg:justify-start justify-center gap-2 text-[#0000CC]'><FaHeart /> <TransText fr="Les soins de santé" ar=" الرعاية الصحية" /></h4>
                            <div className="w-[100%]  flex md:flex-row flex-col justify-between lg:gap-0 gap-4">
                                <div className="md:w-[40%] w-[100%] lg:h-[16rem] h-[10rem]  bg-green-400 ">
                                    <img className='w-[100%] h-[100%] ' src={medi} alt="" />
                                </div>
                                <div className="md:w-[50%] w-[100%] h-[100%] oh  md:text-start text-center ">
                                    <p className='lg:text-[21px] tex-[16px] font-bold'>
                                        <TransText fr=" Le programme de soins de santé garantit des examens réguliers et l'accès à des ressources médicales pour un bon départ dans la vie. Nous priorisons à la fois le bien-être physique et mental, en fournissant des repas nutritifs, de l'exercice régulier et l'accès à des services de conseil. Notre équipe de professionnels de la santé s'engage à offrir à chaque enfant les meilleurs soins possibles"
                                            ar="يضمن برنامج الرعاية الصحية الفحوصات المنتظمة والوصول إلى الموارد الطبية لبداية صحية في الحياة. نحن نولي الأولوية لكل من الرفاهية البدنية والعقلية، من خلال توفير وجبات مغذية، وممارسة الرياضة بانتظام، والوصول إلى خدمات المشورة. تلتزم فريقنا من المتخصصين في الرعاية الصحية بتقديم أفضل رعاية ممكنة لكل طفل."
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card flex flex-col lg:gap-10 gap-5  bg-white rounded-[20px] lg:p-[3rem] p-[1rem]  w-[100%] ">
                            <h4 className='text-[30px] font-bold flex items-center lg:justify-start justify-center gap-2 text-[#0000CC]'><IoStar /> <TransText fr=" Les compétences de vie" ar="مهارات الحياة" /></h4>
                            <div className="w-[100%]  flex md:flex-row flex-col justify-between lg:gap-0 gap-4">
                                <div className="md:w-[40%] w-[100%] lg:h-[16rem] h-[10rem]  bg-green-400 ">
                                    <img className='w-[100%] h-[100%] ' src={skills} alt="" />
                                </div>
                                <div className="md:w-[50%] w-[100%] h-[100%] oh  md:text-start text-center ">
                                    <p className='lg:text-[21px] tex-[16px] font-bold'>
                                        <TransText fr="Notre programme de compétences de vie offre des conseils sur les compétences quotidiennes, favorisant l'indépendance et la résilience. De la littératie financière aux compétences en communication, nous équipons nos enfants des outils dont ils ont besoin pour naviguer avec succès dans la vie. Grâce à des ateliers, du mentorat et des expériences pratiques, nous les préparons aux défis et aux opportunités qui les attendent."
                                            ar="يقدم برنامج مهارات الحياة إرشادات حول المهارات اليومية، مما يعزز الاستقلالية والمرونة. من التثقيف المالي إلى مهارات التواصل، نزوّد أطفالنا بالأدوات التي يحتاجونها للتنقل في الحياة بنجاح. من خلال ورش العمل، والإرشاد، والتجارب العملية، نعدهم للتحديات والفرص التي تنتظرهم"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card flex flex-col lg:gap-10 gap-5  bg-white rounded-[20px] lg:p-[3rem] p-[1rem]  w-[100%] ">
                            <h4 className='text-[30px] font-bold flex items-center lg:justify-start justify-center gap-2 text-[#0000CC]'><FaPaintBrush /><TransText fr="Les arts et la récréation" ar="الفنون والترفيه" /></h4>
                            <div className="w-[100%]  flex md:flex-row flex-col justify-between lg:gap-0 gap-4">
                                <div className="md:w-[40%] w-[100%] lg:h-[16rem] h-[10rem]  bg-green-400 ">
                                    <img className='w-[100%] h-[100%] ' src={art} alt="" />
                                </div>
                                <div className="md:w-[50%] w-[100%] h-[100%] oh  md:text-start text-center ">
                                    <p className='lg:text-[21px] tex-[16px] font-bold'>
                                        <TransText fr="Le programme d'arts et de récréation encourage la créativité et le bien-être physique grâce à des activités engageantes. Nous offrons une large gamme de poursuites artistiques, notamment la musique, la danse, la peinture et le théâtre, ainsi que des sports et des activités de plein air. Ce programme aide les enfants à découvrir leurs talents, à renforcer leur confiance en eux et à profiter d'une expérience d'enfance équilibrée"
                                            ar="يشجع برنامج الفنون والترفيه الإبداع والرفاهية البدنية من خلال أنشطة مشوقة. نقدم مجموعة واسعة من الأنشطة الفنية، بما في ذلك الموسيقى، والرقص، والرسم، والدراما، بالإضافة إلى الرياضات والأنشطة في الهواء الطلق. يساعد هذا البرنامج الأطفال على اكتشاف مواهبهم، وبناء ثقتهم بأنفسهم، والاستمتاع بتجربة طفولة متكاملة"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center py-[4rem] w-[100%] gap-5 px-[0.3rem]  ">
                        <button className='px-[2rem] py-[.7rem] rounded-[20px] text-white font-bold bg-[#433bff] '><TransText fr=" Soutenez nos programmes" ar="دعم برامجنا" /></button>
                        <p className='lg:w-[60%] w-[100%] text-[17px] text-center font-semibold text-[#333333] '>
                        <TransText fr="Chaque programme est dédié à favoriser un environnement équilibré pour les enfants. En soutenant nos programmes, vous faites une différence significative dans leur vie, leur fournissant les outils et les expériences dont ils ont besoin pour construire un avenir meilleur" 
                        ar="كل برنامج مكرس لت  بيئة متكاملة للأطفال. من خلال دعم برامجنا، فإنك تحدث فرقًا كبيرًا في حياتهم، مما يوفر لهم الأدوات والخبرات التي يحتاجونها لبناء مستقبل أكثر إشراقًا" 
                        />
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllPrograms;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { MdOutlineLanguage } from "react-icons/md";
import { useAppContext } from '../utils/ContextProvider';
import TransText from '../components/TransText';


const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { language, selectedLanguage, setSelectedLanguage } = useAppContext();

    const handleChangeLanguage = (e) => {

        let code = e.target.value

        if (code) {
            setSelectedLanguage(code)
        }

    };


    return (
        <div>
            <nav dir={selectedLanguage == "ar" ? "rtl" : "ltr"} className="bg-white flex items-center lg:gap-10 border border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <a href="/" className="flex items-center">
                        <Logo />
                    </a>

                    <div className="flex items-center">
                        <button
                            id="menu-toggle"
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className={isMenuOpen ? "w-full md:block md:w-auto" : "w-full md:block md:w-auto hidden"} id="mobile-menu">
                        <ul className={"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}>
                            <li>
                                <Link
                                    to={"/"}
                                    className="block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0 "
                                    aria-current="page"
                                >
                                    Home

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/about"}
                                    className="block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0 "
                                    aria-current="page"
                                >
                                    About

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/programs"}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                >
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/supportUs"}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                >
                                    Donate
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/contactUs"}
                                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>

                <select onChange={(e) => handleChangeLanguage(e)} className="h-[2rem] w-[7%]" name="" id="">
                    {
                        language.map(({ label, code }, index) => (
                            <option selected={code == selectedLanguage} key={index} value={code}>{label}</option>
                        ))
                    }
                </select>

            </nav>


        </div>
    );
};

export default Navbar;
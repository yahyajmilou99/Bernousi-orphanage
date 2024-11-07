import React, { createContext, useContext, useEffect, useState } from 'react';



export const MyContext = createContext();

export const ContextProvider = ({children}) => {

    const language = [
        { label: "francais", code: "fr" },
        { label: "العربية", code: "ar" },
    ];

    const savedSelectedLanguage = localStorage.getItem('selectedLanguage')
    
    const [selectedLanguage, setSelectedLanguage] = useState(savedSelectedLanguage ?? 'fr');

    useEffect(()=>{

        localStorage.setItem('selectedLanguage', selectedLanguage ?? 'fr')

    }, [selectedLanguage])

    return (
        <>
            <MyContext.Provider value={{ selectedLanguage , setSelectedLanguage , language }} >
                {children}
            </MyContext.Provider>
        </>
    );
};

export const useAppContext = () => useContext(MyContext)



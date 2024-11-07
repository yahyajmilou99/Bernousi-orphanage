import React from 'react';
import { useAppContext } from '../utils/ContextProvider';

 const TransText = (props) => {
    
    const {selectedLanguage} = useAppContext();

    return props[selectedLanguage]
};

export default TransText ;


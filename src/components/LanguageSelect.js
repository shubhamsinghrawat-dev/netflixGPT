import React from 'react';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../utils/configSlice';

const LanguageSelect = () => {
    const dispatch = useDispatch();

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className="w-full flex justify-center">
      <select
        className="w-full max-w-xs p-1 text-white bg-black border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier} >{language.name}</option>)}        
      </select>
    </div>
  );
};

export default LanguageSelect;

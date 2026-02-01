import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const LanguageContext = createContext(undefined);

// 2. Create a Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

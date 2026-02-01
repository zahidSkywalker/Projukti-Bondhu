import React from 'react';
import { Leaf } from 'lucide-react';

const Header = ({ language, setLanguage }) => {
  return (
    <header className="bg-green-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold tracking-wide">
            {language === 'en' ? 'Projukti Bondhu' : 'প্রযুক্তি বন্ধু'}
          </h1>
        </div>
        <button
          onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold transition-all border border-white/30"
        >
          {language === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>
    </header>
  );
};

export default Header;

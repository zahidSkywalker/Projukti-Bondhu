import React from 'react';
import { Home, Brain, Leaf, Calendar, MessageCircle, Calculator } from 'lucide-react';

const sections = [
  { id: 'home', Icon: Home, title: { en: 'Home', bn: 'হোম' } },
  { id: 'agriculture', Icon: Brain, title: { en: 'Agriculture', bn: 'কৃষি' } },
  { id: 'crop-calendar', Icon: Leaf, title: { en: 'Crop Cal', bn: 'ফসল' } },
  { id: 'calendar', Icon: Calendar, title: { en: 'Calendar', bn: 'ক্যালেন্ডার' } },
  { id: 'ai', Icon: MessageCircle, title: { en: 'AI Help', bn: 'সাহায্য' } },
  { id: 'calculator', Icon: Calculator, title: { en: 'Calculator', bn: 'ক্যালকুলেটর' } }
];

const BottomNav = ({ activeSection, setActiveSection, language }) => { // Accept language as prop
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="max-w-md mx-auto grid grid-cols-6 p-2">
        {sections.map(({ id, Icon, title }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
              activeSection === id 
                ? 'text-green-600 bg-green-50 transform -translate-y-1 shadow-sm' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon className="h-6 w-6 mb-1" strokeWidth={activeSection === id ? 2.5 : 2} />
            <span className="text-[10px] font-medium leading-tight">{title[language]}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;

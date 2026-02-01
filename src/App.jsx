import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';

// Import Views
import HomeView from './components/views/HomeView';
import CalendarView from './components/views/CalendarView';
import AgricultureView from './components/views/AgricultureView';
import CropCalendarView from './components/views/CropCalendarView';
import AIChatView from './components/views/AIChatView';
import AgricultureCalculator from './components/views/AgricultureCalculator';

// Import Context Hook to access global language
import { useLanguage } from './context/LanguageContext';

function App() {
  const { language } = useLanguage(); // Access global language state
  const [activeSection, setActiveSection] = useState('home');

  // Dynamic Browser Tab Title
  useEffect(() => {
    document.title = language === 'en' ? 'Projukti Bondhu' : 'প্রযুক্তি বন্ধু';
  }, [language]);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeView />;
      case 'agriculture':
        return <AgricultureView />;
      case 'crop-calendar':
        return <CropCalendarView />;
      case 'calendar':
        return <CalendarView />;
      case 'ai':
        return <AIChatView />;
      case 'calculator':
        return <AgricultureCalculator />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto min-h-full">
          {renderContent()}
        </div>
      </main>

      <BottomNav 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';

// Import Views
import HomeView from './components/views/HomeView';
import CalendarView from './components/views/CalendarView';
import AgricultureView from './components/views/AgricultureView';
import CropCalendarView from './components/views/CropCalendarView';
import AIChatView from './components/views/AIChatView';

function App() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');

  // Set document title based on language
  useEffect(() => {
    document.title = language === 'en' ? 'Projukti Bondhu' : 'প্রযুক্তি বন্ধু';
  }, [language]);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeView language={language} />;
      case 'agriculture':
        return <AgricultureView language={language} />;
      case 'crop-calendar':
        return <CropCalendarView language={language} />;
      case 'calendar':
        return <CalendarView language={language} />;
      case 'ai':
        return <AIChatView language={language} />;
      default:
        return <HomeView language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Main Content Area with bottom padding to clear nav */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto min-h-full">
          {renderContent()}
        </div>
      </main>

      <BottomNav 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        language={language} 
      />
    </div>
  );
}

export default App;

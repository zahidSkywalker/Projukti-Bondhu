import React, { useState } from 'react';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';

// Import Views
import HomeView from './components/views/HomeView';
import CalendarView from './components/views/CalendarView';
import AgricultureView from './components/views/AgricultureView';
import CropCalendarView from './components/views/CropCalendarView';
import AIChatView from './components/views/AIChatView';
import AgricultureCalculator from './components/views/AgricultureCalculator';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en'); // Managing state locally again

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
      case 'calculator':
        return <AgricultureCalculator language={language} />;
      default:
        return <HomeView language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Header language={language} setLanguage={setLanguage} /> {/* Passing state and updater */}
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto min-h-full">
          {renderContent()}
        </div>
      </main>

      <BottomNav language={language} activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;

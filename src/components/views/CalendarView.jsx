import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gregorianToBangla, getBanglaMonthDates, toBanglaNumber, banglaMonths, banglaDayNames } from '../../utils/calendarUtils';

const CalendarView = ({ language }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarMode, setCalendarMode] = useState('gregorian');
  const [notes, setNotes] = useState({});
  const [noteInput, setNoteInput] = useState('');

  // Initialize Bangla state based on current date
  useEffect(() => {
    const bData = gregorianToBangla(new Date());
    // We handle local state for month navigation inside this component for simplicity
  }, []);

  const formatDateKey = (date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const handleDateClick = (date) => setSelectedDate(date);

  const addNote = () => {
    if (!selectedDate || !noteInput.trim()) return;
    const dateKey = formatDateKey(selectedDate);
    setNotes(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), { id: Date.now(), text: noteInput.trim() }]
    }));
    setNoteInput('');
  };

  const deleteNote = (dateKey, noteId) => {
    setNotes(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter(n => n.id !== noteId)
    }));
  };

  // --- Gregorian Logic ---
  const renderGregorianCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const monthName = currentMonth.toLocaleString(language === 'en' ? 'en-US' : 'bn-BD', { month: 'long', year: 'numeric' });
    const dayNames = language === 'en' 
      ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      : ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'];

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(<div key={`empty-g-${i}`} className="aspect-square" />);

    const colors = ['from-pink-200 to-pink-300', 'from-blue-200 to-blue-300', 'from-green-200 to-green-300', 'from-yellow-200 to-yellow-300', 'from-purple-200 to-purple-300', 'from-orange-200 to-orange-300', 'from-teal-200 to-teal-300'];
    
    const today = new Date();
    const isCurrentMonth = currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateKey = formatDateKey(date);
      const dayNotes = notes[dateKey];
      const hasNotes = dayNotes && dayNotes.length > 0;
      const isSelected = selectedDate && formatDateKey(selectedDate) === dateKey;
      const isToday = isCurrentMonth && day === today.getDate();
      const colorClass = colors[day % colors.length];
      const bangla = gregorianToBangla(date);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          className={`aspect-square bg-gradient-to-br ${colorClass} rounded-2xl p-1 relative transform transition-all duration-200 hover:scale-105 hover:rotate-2 hover:shadow-lg ${
            isSelected ? 'ring-4 ring-green-600 scale-105 rotate-3 z-10' : ''
          } ${isToday ? 'ring-4 ring-yellow-400 animate-pulse z-10' : ''}`}
        >
           {isToday && <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-20">TODAY</div>}
           <div className="flex flex-col items-center justify-center h-full">
             <span className={`text-sm font-bold ${isSelected ? 'text-green-800' : 'text-gray-800'}`}>{day}</span>
             <span className="text-[9px] font-semibold text-indigo-700 leading-tight">{toBanglaNumber(bangla.bDay)} {bangla.monthName.substring(0, 3)}</span>
             {hasNotes && <div className="text-[7px] font-semibold text-green-800 mt-0.5">●</div>}
           </div>
        </button>
      );
    }

    return (
      <>
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setCurrentMonth(new Date(year, month - 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft className="h-5 w-5 text-gray-600"/></button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">{monthName}</h2>
            <div className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full inline-block mt-1">{banglaMonths[bangla.bMonth]} {toBanglaNumber(bangla.bYear)}</div>
          </div>
          <button onClick={() => setCurrentMonth(new Date(year, month + 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight className="h-5 w-5 text-gray-600"/></button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">{dayNames.map(d => <div key={d} className="text-center text-xs font-medium text-gray-400">{d}</div>)}</div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </>
    );
  };

  // --- Bangla Logic ---
  const [banglaCurMonth, setBanglaCurMonth] = useState(0);
  const [banglaCurYear, setBanglaCurYear] = useState(1430); // Default fallback

  // Sync Bangla State with Gregorian Selection
  useEffect(() => {
     const bInfo = gregorianToBangla(selectedDate);
     setBanglaCurMonth(bInfo.bMonth);
     setBanglaCurYear(bInfo.bYear);
  }, [selectedDate]); // Only re-run if selectedDate changes drastically or initially

  const renderBanglaCalendar = () => {
    const { dates, startDayOfWeek } = getBanglaMonthDates(banglaCurYear, banglaCurMonth);
    const colors = ['from-pink-200 to-pink-300', 'from-blue-200 to-blue-300', 'from-green-200 to-green-300', 'from-yellow-200 to-yellow-300'];

    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) days.push(<div key={`empty-b-${i}`} className="aspect-square" />);

    const today = new Date();
    const todayKey = formatDateKey(today);

    dates.forEach(({ banglaDay, gregDate }) => {
      const dateKey = formatDateKey(gregDate);
      const dayNotes = notes[dateKey];
      const hasNotes = dayNotes && dayNotes.length > 0;
      const isSelected = selectedDate && formatDateKey(selectedDate) === dateKey;
      const isToday = dateKey === todayKey;
      const colorClass = colors[banglaDay % colors.length];

      days.push(
        <button
          key={banglaDay}
          onClick={() => handleDateClick(gregDate)}
          className={`aspect-square bg-gradient-to-br ${colorClass} rounded-2xl p-1 relative transform transition-all duration-200 hover:scale-105 hover:rotate-2 hover:shadow-lg ${
            isSelected ? 'ring-4 ring-indigo-600 scale-105 rotate-3 z-10' : ''
          } ${isToday ? 'ring-4 ring-yellow-400 animate-pulse z-10' : ''}`}
        >
           {isToday && <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-20">আজ</div>}
           <div className="flex flex-col items-center justify-center h-full">
             <span className={`text-lg font-bold ${isSelected ? 'text-indigo-800' : 'text-gray-800'}`}>{toBanglaNumber(banglaDay)}</span>
             <span className="text-[8px] text-gray-600 font-medium">{gregDate.getDate()}/{gregDate.getMonth()+1}</span>
             {hasNotes && <div className="text-[7px] font-semibold text-indigo-800">●</div>}
           </div>
        </button>
      );
    });

    return (
      <>
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => { if(banglaCurMonth===0) { setBanglaCurMonth(11); setBanglaCurYear(p=>p-1); } else setBanglaCurMonth(p=>p-1); }} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft className="h-5 w-5 text-gray-600"/></button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-indigo-700">{banglaMonths[banglaCurMonth]} {toBanglaNumber(banglaCurYear)}</h2>
            <div className="text-xs text-gray-500 font-medium">
               {dates.length > 0 ? dates[0].gregDate.toLocaleString('en-US', { month: 'short' }) : ''}
            </div>
          </div>
          <button onClick={() => { if(banglaCurMonth===11) { setBanglaCurMonth(0); setBanglaCurYear(p=>p+1); } else setBanglaCurMonth(p=>p+1); }} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight className="h-5 w-5 text-gray-600"/></button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">{banglaDayNames.map(d => <div key={d} className="text-center text-xs font-medium text-gray-400">{d}</div>)}</div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </>
    );
  };

  const selectedDateKey = formatDateKey(selectedDate);
  const currentNotes = notes[selectedDateKey] || [];
  const bInfo = gregorianToBangla(selectedDate);

  return (
    <div className="space-y-4 pb-20">
      {/* Mode Toggle */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1.5 flex">
        <button
          onClick={() => setCalendarMode('gregorian')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
            calendarMode === 'gregorian' ? 'bg-green-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          🗓️ {language === 'en' ? 'Gregorian' : 'গ্রেগরিয়ান'}
        </button>
        <button
          onClick={() => setCalendarMode('bangla')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
            calendarMode === 'bangla' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          🇧🇩 বাংলা
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        {calendarMode === 'gregorian' ? renderGregorianCalendar() : renderBanglaCalendar()}
      </div>

      {/* Notes Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="mb-4 pb-3 border-b border-gray-100">
          <h3 className="font-bold text-lg text-gray-800">
            {language === 'en' ? 'Notes for' : 'নোট —'} {selectedDate.toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD', { day: 'numeric', month: 'long' })}
          </h3>
          <div className="text-sm text-indigo-600 font-semibold mt-1">
            বাংলা: {toBanglaNumber(bInfo.bDay)} {bInfo.monthName}, {toBanglaNumber(bInfo.bYear)}
          </div>
        </div>

        <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
          {currentNotes.length > 0 ? currentNotes.map((note) => (
            <div key={note.id} className="flex justify-between items-start bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border-l-4 border-purple-400">
              <span className="text-sm text-gray-700">{note.text}</span>
              <button onClick={() => deleteNote(selectedDateKey, note.id)} className="text-red-400 hover:text-red-600 ml-2 text-lg leading-none">×</button>
            </div>
          )) : (
            <p className="text-gray-400 text-center py-4 text-sm bg-gray-50 rounded-lg">
              {language === 'en' ? 'No notes for this day' : 'এই দিনের জন্য কোন নোট নেই'}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <input
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder={language === 'en' ? "Add a note..." : "নোট যোগ করুন..."}
            className="flex-1 p-3 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm"
            onKeyPress={(e) => e.key === 'Enter' && addNote()}
          />
          <button onClick={addNote} className="bg-green-600 text-white px-5 rounded-xl hover:bg-green-700 font-semibold shadow-sm transition-colors">
            {language === 'en' ? 'Add' : 'যোগ'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;

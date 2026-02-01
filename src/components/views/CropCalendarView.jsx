import React, { useState, useEffect } from 'react';
import { cropCalendar, agriCategories } from '../../data/constants';
import { gregorianToBangla, banglaMonths } from '../../utils/calendarUtils';

const CropCalendarView = ({ language }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

  useEffect(() => {
    const bDate = gregorianToBangla(new Date());
    setSelectedMonthIndex(bDate.bMonth);
  }, []);

  const currentCropInfo = cropCalendar[language][selectedMonthIndex];

  return (
    <div className="space-y-4 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? '🌾 Crop Cultivation Guide' : '🌾 ফসল চাষ নির্দেশিকা'}
        </h2>
        <p className="text-green-100 text-sm opacity-90">
          {language === 'en' 
            ? 'Select a Bangla month to see recommended crops and cultivation stages'
            : 'বাংলা মাস নির্বাচন করুন এবং প্রস্তাবিত ফসল ও চাষের পর্যায় দেখুন'}
        </p>
      </div>

      {/* Month Selector */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <h3 className="font-bold text-lg mb-3 text-gray-800">
          {language === 'en' ? '📅 Select Bangla Month' : '📅 বাংলা মাস নির্বাচন করুন'}
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {banglaMonths.map((month, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMonthIndex(idx)}
              className={`p-3 rounded-lg font-semibold text-sm transition-all border ${
                selectedMonthIndex === idx
                  ? 'bg-green-600 text-white border-green-600 shadow-md scale-105'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-green-700">
              {currentCropInfo.month}
            </h3>
            <p className="text-sm text-gray-500 mt-1 bg-gray-100 inline-block px-2 py-0.5 rounded-full">
              <span className="font-semibold">{language === 'en' ? 'Season:' : 'মৌসুম:'}</span> {currentCropInfo.season}
            </p>
          </div>
          <div className="text-5xl">{currentCropInfo.crops[0]?.icon}</div>
        </div>

        <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
          <span className="mr-2 bg-green-100 p-1 rounded-lg">🌱</span>
          {language === 'en' ? 'Recommended Crops' : 'এই মাসের প্রস্তাবিত ফসল'}
        </h4>

        <div className="space-y-4">
          {currentCropInfo.crops.map((crop, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4 bg-white p-2 rounded-lg shadow-sm">{crop.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-lg text-gray-800">{crop.name}</h5>
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                      {crop.stage}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {crop.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropCalendarView;

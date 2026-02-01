import React, { useState, useEffect } from 'react';
import { cropCalendar } from '../../data/constants';
import { gregorianToBangla, banglaMonths } from '../../utils/calendarUtils';
import { useLanguage } from '../../context/LanguageContext';

const CropCalendarView = () => {
  const { language } = useLanguage();
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

      {/* Current Month Info */}
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

      {/* --- MISSED SECTION 1: About Farming Seasons --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h4 className="font-bold text-lg mb-3 flex items-center text-gray-800">
          <span className="mr-2 bg-blue-100 p-1 rounded-lg text-blue-600">📖</span>
          {language === 'en' ? 'About Farming Seasons' : 'কৃষি মৌসুম সম্পর্কে'}
        </h4>
        
        <div className="space-y-3">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
            <div className="font-semibold text-blue-900">
              {language === 'en' ? 'Kharif-1 (Pre-monsoon):' : 'খরিফ-১ (প্রাক-বর্ষা):'}
            </div>
            <div className="text-sm text-blue-800 mt-1">
              {language === 'en' 
                ? 'Chaitra to Asharh (March-June) - Aus rice, jute, vegetables'
                : 'চৈত্র থেকে আষাঢ় (মার্চ-জুন) - আউশ ধান, পাট, সবজি'}
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
            <div className="font-semibold text-blue-900">
              {language === 'en' ? 'Kharif-2 (Monsoon):' : 'খরিফ-২ (বর্ষা):'}
            </div>
            <div className="text-sm text-blue-800 mt-1">
              {language === 'en' 
                ? 'Asharh to Kartik (June-October) - Aman rice, vegetables'
                : 'আষাঢ় থেকে কার্তিক (জুন-অক্টোবর) - আমন ধান, সবজি'}
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg">
            <div className="font-semibold text-purple-900">
              {language === 'en' ? 'Rabi (Winter):' : 'রবি (শীত):'}
            </div>
            <div className="text-sm text-purple-800 mt-1">
              {language === 'en' 
                ? 'Kartik to Falgun (October-February) - Boro rice, wheat, potato, pulses'
                : 'কার্তিক থেকে ফাল্গুন (অক্টোবর-ফেব্রুয়ারি) - বোরো ধান, গম, আলু, ডাল'}
            </div>
          </div>
        </div>
      </div>

      {/* --- MISSED SECTION 2: Helpful Tips for Farmers --- */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 rounded-lg p-5">
        <h4 className="font-bold text-orange-900 flex items-center mb-3">
          <span className="mr-2">💡</span>
          {language === 'en' ? 'Helpful Tips for Farmers' : 'কৃষকদের জন্য সহায়ক পরামর্শ'}
        </h4>
        <ul className="space-y-2 text-sm text-orange-900">
          <li className="flex items-start">
            <span className="mr-2 text-orange-600">✓</span>
            <span>
              {language === 'en' 
                ? 'Always check weather forecast before major farming activities'
                : 'প্রধান কৃষি কাজের আগে সর্বদা পূর্বাভাস পরীক্ষা করুন'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-600">✓</span>
            <span>
              {language === 'en' 
                ? 'Use quality seeds from reliable sources for better yield'
                : 'ভালো ফলনের জন্য নির্ভরযোগ্য উৎস থেকে মানসম্পন্ন বীজ ব্যবহার করুন'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-600">✓</span>
            <span>
              {language === 'en' 
                ? 'Contact local agricultural office for region-specific advice'
                : 'অঞ্চল-নির্দিষ্ট পরামর্শের জন্য স্থানীয় কৃষি অফিসের সাথে যোগাযোগ করুন'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-600">✓</span>
            <span>
              {language === 'en' 
                ? 'Keep detailed records of planting dates, inputs, and yields'
                : 'বপনের তারিখ, উপকরণ এবং ফলনের বিস্তারিত রেকর্ড রাখুন'}
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default CropCalendarView;

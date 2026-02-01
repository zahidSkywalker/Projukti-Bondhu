import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { agriCategories } from '../../data/constants';

const AgricultureView = ({ language }) => {
  const [selectedAgriTopic, setSelectedAgriTopic] = useState(null);

  if (selectedAgriTopic) {
    return (
      <div className="space-y-4 pb-20">
        <button 
          onClick={() => setSelectedAgriTopic(null)}
          className="flex items-center text-green-600 font-bold mb-2 px-4 py-2 bg-green-50 rounded-xl w-max hover:bg-green-100 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          {language === 'en' ? 'Back to Categories' : 'ক্যাটাগরিতে ফিরুন'}
        </button>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-green-700 mb-2">{selectedAgriTopic.name}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{selectedAgriTopic.description}</p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
            <div className="font-semibold text-blue-900 mb-1 flex items-center">
               ⏰ {language === 'en' ? 'Timing & Season' : 'সময় ও মৌসুম'}
            </div>
            <div className="text-blue-800 text-sm">{selectedAgriTopic.timing}</div>
          </div>

          <h3 className="font-bold text-lg mb-4 text-gray-800">
            {language === 'en' ? 'Step-by-Step Guide:' : 'ধাপে ধাপে নির্দেশিকা:'}
          </h3>
          
          <div className="space-y-4">
            {selectedAgriTopic.steps.map((step, idx) => (
              <div key={idx} className="flex group">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      {agriCategories[language].map((category, idx) => (
        <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-3 text-gray-800 border-b border-gray-50 pb-2">{category.title}</h3>
          <div className="space-y-2">
            {category.items.map((item, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedAgriTopic(item)}
                className="w-full text-left p-4 bg-gray-50 rounded-xl flex justify-between items-center hover:bg-green-50 hover:border-l-4 hover:border-green-500 transition-all border border-transparent"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <ChevronRight className="h-5 w-5 text-green-600" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgricultureView;

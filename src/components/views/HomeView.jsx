import React from 'react';
import { Sun, MapPin, Leaf } from 'lucide-react';
import { marketProducts } from '../../data/constants';

const HomeView = ({ language }) => {
  const products = marketProducts[language];

  return (
    <div className="space-y-4 pb-4">
      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-2xl shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg">{language === 'en' ? 'Weather' : 'আবহাওয়া'}</h3>
            <div className="flex items-center text-blue-100 text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" /> Dhaka, BD
            </div>
          </div>
          <Sun className="h-10 w-10 text-yellow-300 drop-shadow-md" />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-4xl font-bold tracking-tighter">25°C</div>
            <div className="text-blue-100 text-sm mt-1">
              {language === 'en' ? 'Sunny' : 'রোদ্রোজ্জ্বল'}
            </div>
          </div>
          <div className="text-right text-xs text-blue-100 bg-white/20 px-2 py-1 rounded-lg">
            {language === 'en' ? 'Humidity: 65%' : 'আর্দ্রতা: ৬৫%'}
          </div>
        </div>
      </div>

      {/* Marketplace */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 flex items-center">
            <span className="bg-green-100 text-green-600 p-1.5 rounded-lg mr-2">
              <Leaf className="h-4 w-4" />
            </span>
            {language === 'en' ? 'Market Prices' : 'বাজার দর'}
          </h3>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
            {language === 'en' ? 'Updated: Today' : 'হালনাগাদ: আজ'}
          </span>
        </div>
        
        <div className="space-y-3">
          {products.map((product) => {
            const priceDiff = product.currentPrice - product.previousPrice;
            const isHigher = priceDiff > 0;
            const percentChange = Math.abs((priceDiff / product.previousPrice) * 100).toFixed(1);
            
            return (
              <div 
                key={product.id} 
                className={`flex justify-between items-center p-3 rounded-xl border-l-4 transition-all hover:shadow-md ${
                  isHigher 
                    ? 'bg-red-50 border-red-400' 
                    : 'bg-green-50 border-green-400'
                }`}
              >
                <div className="flex-1 pr-4">
                  <div className="font-bold text-gray-800">{product.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{product.category}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900">৳{product.currentPrice}</div>
                  <div className={`text-xs font-bold flex items-center justify-end gap-1 mt-0.5 ${
                    isHigher ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {isHigher ? '↑' : '↓'} ৳{Math.abs(priceDiff)} ({percentChange}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeView;

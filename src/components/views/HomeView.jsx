import React, { useState, useEffect } from 'react';
import { Sun, CloudRain, MapPin, Wind, Droplets, RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';
import { marketProducts as baseMarketData } from '../../data/constants';

const HomeView = ({ language }) => {
  // --- Weather State ---
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [location, setLocation] = useState({ city: 'Dhaka', lat: 23.81, lon: 90.41 });

  // --- Market State ---
  const [marketData, setMarketData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshingMarket, setRefreshingMarket] = useState(false);

  // 1. Fetch Real Weather (Open-Meteo - Free & No Key Required)
  useEffect(() => {
    const fetchWeather = async () => {
      setLoadingWeather(true);
      try {
        // Try to get user location first
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              fetchFromAPI(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
              console.log("Geo error, defaulting to Dhaka");
              fetchFromAPI(23.81, 90.41);
            }
          );
        } else {
          fetchFromAPI(23.81, 90.41);
        }
      } catch (err) {
        console.error("Weather fetch error:", err);
        setLoadingWeather(false);
      }
    };

    const fetchFromAPI = async (lat, lon) => {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
      const data = await res.json();
      
      setWeather({
        temp: Math.round(data.current_weather.temperature),
        windspeed: Math.round(data.current_weather.windspeed),
        humidity: data.current_weather.relativehumidity_2m,
        code: data.current_weather.weathercode
      });

      // Process forecast (next 3 days)
      const nextDays = data.daily.time.slice(1, 4).map((date, i) => ({
        date: new Date(date),
        max: Math.round(data.daily.temperature_2m_max[i+1]),
        min: Math.round(data.daily.temperature_2m_min[i+1]),
        code: data.daily.weathercode[i+1]
      }));
      
      setForecast(nextDays);
      setLoadingWeather(false);
    };

    fetchWeather();
  }, []);

  // 2. Simulate/Fetch Real Market Prices
  useEffect(() => {
    // Load base data initially
    setMarketData(baseMarketData[language]);
    setLastUpdated(new Date());
  }, [language]);

  const refreshMarketPrices = () => {
    setRefreshingMarket(true);
    // NOTE: Since there is no public CORS-enabled API for BD Govt markets, 
    // we simulate a fetch here. Replace this logic with your Backend API call.
    
    setTimeout(() => {
      const updatedPrices = baseMarketData[language].map(item => {
        // Simulate price fluctuation (+/- 5 Taka)
        const variance = Math.floor(Math.random() * 11) - 5; 
        const newPrice = item.previousPrice + variance;
        return {
          ...item,
          currentPrice: newPrice,
          previousPrice: item.previousPrice // Keep old price for comparison visual
        };
      });
      setMarketData(updatedPrices);
      setLastUpdated(new Date());
      setRefreshingMarket(false);
    }, 1000);
  };

  // Helper: Weather Icon
  const getWeatherIcon = (code) => {
    const codes = {
      0: Sun, 1: Sun, 2: Sun, 3: CloudRain, 
      45: CloudRain, 48: CloudRain, 51: CloudRain, 61: CloudRain,
      63: CloudRain, 65: CloudRain, 80: CloudRain, 95: CloudRain
    };
    const Icon = codes[code] || Sun;
    return <Icon className="h-6 w-6" />;
  };

  // Helper: Time format
  const formatTime = (date) => {
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'bn-BD', {
      hour: '2-digit', minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-4 pb-4 max-h-screen overflow-y-auto">
      
      {/* --- WEATHER CARD --- */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-2xl shadow-md">
        {loadingWeather ? (
          <div className="flex justify-between items-center h-24">
             <div className="animate-pulse bg-blue-400/50 w-20 h-20 rounded-full"></div>
             <div className="space-y-2 flex-1 ml-4">
                <div className="h-4 bg-blue-400/50 rounded w-1/2"></div>
                <div className="h-4 bg-blue-400/50 rounded w-1/3"></div>
             </div>
          </div>
        ) : weather ? (
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 text-blue-100 text-sm mb-1">
                  <MapPin className="h-3 w-3" />
                  <span>{location.city}</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter">{weather.temp}°C</div>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                {getWeatherIcon(weather.code)}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-3 text-xs bg-white/10 p-3 rounded-xl">
              <div className="flex items-center gap-1.5">
                <Wind className="h-3.5 w-3.5 text-blue-200" />
                <span className="font-semibold">{weather.windspeed} km/h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Droplets className="h-3.5 w-3.5 text-blue-200" />
                <span className="font-semibold">{weather.humidity}%</span>
              </div>
            </div>

            {/* Mini Forecast */}
            <div className="pt-2 border-t border-blue-400/30">
              <div className="text-xs text-blue-100 font-semibold mb-2">
                {language === 'en' ? '3-Day Forecast' : '৩ দিনের পূর্বাভাস'}
              </div>
              <div className="flex justify-between text-center gap-2">
                {forecast.map((day, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-2 flex-1 backdrop-blur-sm">
                    <div className="text-[10px] text-blue-100 mb-1">
                      {day.date.toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD', { weekday: 'short' })}
                    </div>
                    <div className="text-lg font-bold flex justify-center items-center gap-1 text-white/90">
                      {getWeatherIcon(day.code)}
                      <span>{day.max}°</span>
                    </div>
                    <div className="text-[10px] text-blue-200">{day.min}°</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* --- MARKET CARD --- */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col max-h-[55vh]">
        <div className="flex justify-between items-center mb-3 shrink-0">
          <h3 className="font-bold text-gray-800 flex items-center">
            <span className="bg-green-100 text-green-600 p-1.5 rounded-lg mr-2">
              <TrendingUp className="h-4 w-4" />
            </span>
            {language === 'en' ? 'Live Market Prices' : 'লাইভ বাজার দর'}
          </h3>
          <button 
            onClick={refreshMarketPrices}
            disabled={refreshingMarket}
            className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-gray-600 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-3 w-3 ${refreshingMarket ? 'animate-spin' : ''}`} />
            {refreshingMarket ? '...' : (language === 'en' ? 'Update' : 'আপডেট')}
          </button>
        </div>
        
        <div className="text-[10px] text-gray-400 mb-3 shrink-0">
          {language === 'en' ? 'Last updated' : 'শেষ আপডেট'}: {lastUpdated ? formatTime(lastUpdated) : '--:--'}
        </div>
        
        <div className="overflow-y-auto pr-1 space-y-2 flex-1">
          {marketData.map((product) => {
            const priceDiff = product.currentPrice - product.previousPrice;
            const isHigher = priceDiff > 0;
            const percentChange = Math.abs((priceDiff / product.previousPrice) * 100).toFixed(1);
            
            return (
              <div 
                key={product.id} 
                className={`flex justify-between items-center p-3 rounded-xl border-l-4 transition-all hover:shadow-md shrink-0 ${
                  isHigher 
                    ? 'bg-red-50 border-red-400' 
                    : 'bg-green-50 border-green-400'
                }`}
              >
                <div className="flex-1 pr-4 min-w-0">
                  <div className="font-bold text-gray-800 truncate">{product.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 truncate">{product.category}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-lg text-gray-900">৳{product.currentPrice}</div>
                  <div className={`text-xs font-bold flex items-center justify-end gap-1 mt-0.5 ${
                    isHigher ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {isHigher ? <TrendingUp className="h-3 w-3"/> : <TrendingDown className="h-3 w-3"/>}
                    {Math.abs(priceDiff)} ({percentChange}%)
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

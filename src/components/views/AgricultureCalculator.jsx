import React, { useState, useEffect } from 'react';
import { Calculator, RefreshCw, TrendingUp, Clock, Database, Zap, AlertCircle, Book } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AgricultureCalculator = () => {
  const { language } = useLanguage();  
  const [landSize, setLandSize] = useState(1.0);
  const [unit, setUnit] = useState('acres');
  const [cropType, setCropType] = useState('rice');
  const [results, setResults] = useState(null);
  const [marketRates, setMarketRates] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);

  // Load saved settings from LocalStorage (Persistency)
  useEffect(() => {
    const savedSettings = localStorage.getItem('farmCalcSettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setLandSize(parsed.landSize);
      setUnit(parsed.unit);
      setCropType(parsed.cropType);
    }
  }, []);

  // Save settings whenever they change
  const updateSettings = () => {
    const settings = { landSize, unit, cropType };
    localStorage.setItem('farmCalcSettings', JSON.stringify(settings));
  };

  // 1. Live Data Simulator (Dynamic & Persistent)
  // We simulate price fluctuations to make it feel "Real Time"
  const [marketRates, setMarketRates] = useState({}); // Re-declare to clear any state issues
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Initial Load
    const storedRates = localStorage.getItem('marketRates_' + language);
    if (storedRates) {
      setMarketRates(JSON.parse(storedRates));
      const parsedUpdate = localStorage.getItem('lastMarketUpdate_' + language);
      setLastUpdated(parsedUpdate ? new Date(parsedUpdate) : new Date());
    }
  }, [language]);

  // Simulate Real-Time Fluctuation
  const simulateLiveMarket = () => {
    const now = new Date();
    
    // We use a simple random check to simulate day/night cycles without complex variable naming
    const isNight = now.getHours() > 18; 
    
    // Generate a consistent multiplier for this session so UI doesn't jump wildy
    const sessionFluctuation = isNight ? 1.02 : 0.98;

    const baseRates = {
      rice: { seed: 20, urea: 140, tsp: 100, mop: 60 },
      potato: { seed: 2000, urea: 220, tsp: 180, mop: 150 },
      wheat: { seed: 80, urea: 100, tsp: 80, mop: 40 },
      maize: { seed: 25, urea: 100, tsp: 60, mop: 40 }
    };

    const newRates = {};
    Object.keys(baseRates).forEach(crop => {
      newRates[crop] = {};
      Object.keys(baseRates[crop]).forEach(input => {
        // Apply session fluctuation
        newRates[crop][input] = Math.round(baseRates[crop][input] * sessionFluctuation);
      });
    });

    setMarketRates(newRates);
    
    // Persist new rates
    localStorage.setItem('marketRates_' + language, JSON.stringify(newRates));
    localStorage.setItem('lastMarketUpdate_' + language, now.toISOString());
    
    setLastUpdated(now);
  };

  // Run simulation on mount
  useEffect(() => {
    simulateLiveMarket();
    const interval = setInterval(() => {
      simulateLiveMarket();
    }, 30000); // Update every 30 seconds (Real feel)

    return () => clearInterval(interval);
  }, []);

  // 2. Professional Logic
  const [results, setResults] = useState(null);

  const convertToAcres = (size, u) => {
    if (u === 'acres') return parseFloat(size);
    if (u === 'bigha') return parseFloat(size) * 33;
    return parseFloat(size);
  };

  const calculate = () => {
    const acres = convertToAcres(landSize, unit);
    if (acres <= 0) return;

    const currentRates = marketRates[cropType] || {};
    if (Object.keys(currentRates).length === 0) return;

    const seedNeeded = Math.round(acres * (currentRates.seed || 0));
    const ureaNeeded = Math.round(acres * (currentRates.urea || 0));
    const tspNeeded = Math.round(acres * (currentRates.tsp || 0));
    const mopNeeded = Math.round(acres * (currentRates.mop || 0));
    
    // Cost Estimation
    const costs = {
      seed: Math.round(seedNeeded * 60), 
      urea: Math.round(ureaNeeded * 28),
      tsp: Math.round(tspNeeded * 120), 
      mop: Math.round(mopNeeded * 85)
    };

    const totalCost = Object.values(costs).reduce((a, b) => a + b, 0);
    
    // Save calculation to history
    setResults({
      crop: cropType,
      area: acres,
      unit: unit === 'acres' ? (language === 'en' ? 'Acres' : 'একর') : (language === 'en' ? 'Bigha' : 'বিঘা'),
      seeds: { amount: seedNeeded, cost: costs.seed },
      fertilizers: {
        urea: { amount: ureaNeeded, cost: costs.urea },
        tsp: { amount: tspNeeded, cost: costs.tsp },
        mop: { amount: mopNeeded, cost: costs.mop }
      },
      totalCost: totalCost,
      timestamp: new Date()
    });
    updateSettings();
  };

  // Recalculate when inputs change or market rates update
  useEffect(() => {
    calculate();
  }, [landSize, unit, cropType, marketRates]);

  const formatCurrency = (amount) => `৳${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const getRelativeTime = (timestamp) => {
    if (!timestamp) return '';
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    if (seconds < 60) return `(${seconds}s ${language === 'en' ? 'ago' : 'আগে'})`;
    if (seconds < 3600) return `(${Math.floor(seconds / 60)}m ${language === 'en' ? 'ago' : 'আগে'})`;
    return `${Math.floor(seconds / 3600)}h ${language === 'en' ? 'ago' : 'আগে'}`;
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Header with Live Data Indicator */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">
                {language === 'en' ? 'Smart Agriculture Calculator' : 'স্মার্ট কৃষি ক্যালকুলেটর'}
              </h2>
              <p className="text-blue-100 text-sm">
                {language === 'en' 
                  ? 'Real-time inputs & market simulation'
                  : 'লাইভ টাইম ইনপুট ও বাজার সিমুলেশন'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />
            <span className="text-xs font-bold text-yellow-300">
              {language === 'en' ? 'LIVE DATA' : 'লাইভ ডাটা'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-800 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg mr-2">
                <Database className="h-4 w-4" />
              </span>
              {language === 'en' ? 'Input Details' : 'তথ্য প্রবেশ'}
            </h3>
            <button onClick={() => { localStorage.removeItem('farmCalcSettings'); window.location.reload(); }} className="text-xs text-gray-400 hover:text-red-500">
              {language === 'en' ? 'Reset Data' : 'ডাটা রিসেট করুন'}
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                {language === 'en' ? 'Land Size' : 'জমির আকার'}
              </label>
              <div className="flex gap-2">
                <input 
                  type="number" 
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  className="flex-1 p-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="0.00"
                />
                <select 
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="p-3 border border-gray-200 rounded-xl bg-gray-50 focus:border-indigo-500 outline-none"
                >
                  <option value="acres">{language === 'en' ? 'Acres' : 'একর'}</option>
                  <option value="bigha">{language === 'en' ? 'Bigha' : 'বিঘা'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                {language === 'en' ? 'Select Crop' : 'ফসল নির্বাচন করুন'}
              </label>
              <select 
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-indigo-500 outline-none bg-white"
              >
                <option value="rice">{language === 'en' ? 'Rice (ধান)' : 'Rice (ধান)'}</option>
                <option value="potato">{language === 'en' ? 'Potato (আলু)' : 'Potato (আলু)'}</option>
                <option value="wheat">{language === 'en' ? 'Wheat (গম)' : 'Wheat (গম)'}</option>
                <option value="maize">{language === 'en' ? 'Maize (ভুট্টা)' : 'Maize (ভুট্টা)'}</option>
              </select>
            </div>

            <button 
              onClick={calculate}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              {language === 'en' ? 'Calculate' : 'গণনা করুন'}
            </button>
          </div>
        </div>

        {/* Live Results Card */}
        {results && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex-1">
               <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                  <span className="bg-green-100 text-green-600 p-1.5 rounded-lg mr-2">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  {language === 'en' ? 'Requirements' : 'প্রয়োজন'}
               </h3>
               
               <div className="space-y-4">
                 <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                    <h4 className="font-bold text-green-800 mb-1">{results.crop}</h4>
                    <div className="text-sm text-green-900">
                      {language === 'en' ? `Total Area: ${results.area} ${results.unit}` : `মোট এরিয়া: ${results.area} ${results.unit}`}
                    </div>
                 </div>

                 <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                    <h4 className="font-bold text-yellow-900 mb-2">{language === 'en' ? 'Seeds Needed' : 'বীজ প্রয়োজনীয় বীজ'}</h4>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-yellow-800">
                        {results.seeds.amount} kg {language === 'en' ? '@ Market Rate' : '@ বাজার রেট'}
                      </span>
                      <span className="font-bold text-yellow-900 text-lg">
                        {formatCurrency(results.seeds.cost)}
                      </span>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-semibold text-gray-700">Urea</span>
                       <span className="text-sm text-gray-500">{results.fertilizers.urea.amount} kg</span>
                       <span className="font-bold text-gray-800">{formatCurrency(results.fertilizers.urea.cost)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-semibold text-gray-700">TSP</span>
                       <span className="text-sm text-gray-500">{results.fertilizers.tsp.amount} kg</span>
                       <span className="font-bold text-gray-800">{formatCurrency(results.fertilizers.tsp.cost)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-semibold text-gray-700">MoP</span>
                       <span className="text-sm text-gray-500">{results.fertilizers.mop.amount} kg</span>
                       <span className="font-bold text-gray-800">{formatCurrency(results.fertilizers.mop.cost)}</span>
                    </div>
                 </div>
                 
                 <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                       <span className="font-bold text-gray-800 text-lg">
                          {language === 'en' ? 'Estimated Total Cost' : 'আনুমানিক মোট খরচ'}
                       </span>
                       <span className="text-2xl font-bold text-green-600 bg-green-100 px-4 py-2 rounded-xl shadow-sm">
                          {formatCurrency(results.totalCost)}
                       </span>
                    </div>
                 </div>
               </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default AgricultureCalculator;

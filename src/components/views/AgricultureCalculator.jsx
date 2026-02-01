import React, { useState, useEffect } from 'react';
import { Calculator, RefreshCw, TrendingUp, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AgricultureCalculator = () => {
  const { language } = useLanguage();
  
  // Inputs
  const [landSize, setLandSize] = useState(1.0); // In Acres
  const [unit, setUnit] = useState('acres'); // 'acres' or 'bigha'
  const [cropType, setCropType] = useState('rice');

  // Calculated Results
  const [results, setResults] = useState(null);

  // Crop Data (Fertilizer Rates per Acre approx)
  const cropData = {
    rice: {
      en: { name: "Rice", seedRate: 20, urea: 140, tsp: 100, mop: 60 },
      bn: { name: "ধান", seedRate: 20, urea: 140, tsp: 100, mop: 60 }
    },
    potato: {
      en: { name: "Potato", seedRate: 2000, urea: 220, tsp: 180, mop: 150 },
      bn: { name: "আলু", seedRate: 2000, urea: 220, tsp: 180, mop: 150 }
    },
    wheat: {
      en: { name: "Wheat", seedRate: 80, urea: 100, tsp: 80, mop: 40 },
      bn: { name: "গম", seedRate: 80, urea: 100, tsp: 80, mop: 40 }
    },
    maize: {
      en: { name: "Maize", seedRate: 25, urea: 100, tsp: 60, mop: 40 },
      bn: { name: "ভুট্টা", seedRate: 25, urea: 100, tsp: 60, mop: 40 }
    }
  };

  // Unit Conversion (1 Bigha ≈ 33 Acres, simplified)
  const convertToAcres = (size, u) => {
    if (u === 'acres') return parseFloat(size);
    if (u === 'bigha') return parseFloat(size) * 33;
    return parseFloat(size);
  };

  const calculate = () => {
    const acres = convertToAcres(landSize, unit);
    if (acres <= 0 || !cropData[cropType]) return;

    const data = cropData[cropType][language];
    
    const seedNeeded = Math.round(acres * data.seedRate);
    const ureaNeeded = Math.round(acres * data.urea);
    const tspNeeded = Math.round(acres * data.tsp);
    const mopNeeded = Math.round(acres * data.mop);
    
    const costs = {
      seed: Math.round(seedNeeded * 60),
      urea: Math.round(ureaNeeded * 28),
      tsp: Math.round(tspNeeded * 120),
      mop: Math.round(mopNeeded * 85)
    };

    const totalCost = Object.values(costs).reduce((a, b) => a + b, 0);

    setResults({
      crop: data.name,
      area: acres,
      unit:
        unit === 'acres'
          ? language === 'en'
            ? 'Acres'
            : 'একর'
          : language === 'en'
          ? 'Bigha'
          : 'বিঘা',
      seeds: { amount: seedNeeded, cost: costs.seed },
      fertilizers: {
        urea: { amount: ureaNeeded, cost: costs.urea },
        tsp: { amount: tspNeeded, cost: costs.tsp },
        mop: { amount: mopNeeded, cost: costs.mop }
      },
      totalCost
    });
  };

  useEffect(() => {
    calculate();
  }, [landSize, unit, cropType]);

  const formatCurrency = (amount) => `৳${amount.toLocaleString()}`;

  return (
    <div className="space-y-4 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8" />
          <div>
            <h2 className="text-2xl font-bold">
              {language === 'en' ? 'Farming Calculator' : 'কৃষি ক্যালকুলেটর'}
            </h2>
            <p className="text-blue-100 text-sm">
              {language === 'en'
                ? 'Estimate seeds & fertilizers'
                : 'বীজ ও সারের পরিমাণ নির্ণয় করুন'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
            <span className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg mr-2">
              <BookOpen className="h-4 w-4" />
            </span>
            {language === 'en' ? 'Input Details' : 'তথ্য প্রদান'}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                {language === 'en' ? 'Land Size' : 'জমির পরিমাণ'}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  className="flex-1 p-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="p-3 border border-gray-200 rounded-xl bg-gray-50"
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
                className="w-full p-3 border border-gray-200 rounded-xl bg-white"
              >
                <option value="rice">Rice (ধান)</option>
                <option value="potato">Potato (আলু)</option>
                <option value="wheat">Wheat (গম)</option>
                <option value="maize">Maize (ভুট্টা)</option>
              </select>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-md flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              {language === 'en' ? 'Calculate' : 'গণনা করুন'}
            </button>
          </div>
        </div>

        {/* Results Card */}
        {results && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
              <span className="bg-green-100 text-green-600 p-1.5 rounded-lg mr-2">
                <TrendingUp className="h-4 w-4" />
              </span>
              {language === 'en' ? 'Requirements' : 'প্রয়োজনীয় উপকরণ'}
            </h3>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl mb-3">
              <h4 className="font-bold text-green-800">{results.crop}</h4>
              <p className="text-sm text-green-900">
                {language === 'en'
                  ? `Total Area: ${results.area} ${results.unit}`
                  : `মোট জমির পরিমাণ: ${results.area} ${results.unit}`}
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl mb-3">
              <h4 className="font-bold text-yellow-900 mb-1">
                {language === 'en' ? 'Seeds Needed' : 'প্রয়োজনীয় বীজ'}
              </h4>
              <div className="flex justify-between">
                <span className="text-sm">
                  {results.seeds.amount} কেজি @ ৬০ টাকা/কেজি
                </span>
                <span className="font-bold">
                  {formatCurrency(results.seeds.cost)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {['urea', 'tsp', 'mop'].map((f) => (
                <div key={f} className="flex justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="font-semibold uppercase">{f}</span>
                  <span>{results.fertilizers[f].amount} কেজি</span>
                  <span className="font-bold">
                    {formatCurrency(results.fertilizers[f].cost)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">
                  {language === 'en' ? 'Estimated Total Cost' : 'আনুমানিক মোট ব্যয়'}
                </span>
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(results.totalCost)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgricultureCalculator;

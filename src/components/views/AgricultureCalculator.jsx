import React, { useState, useEffect } from 'react';
import {
  Calculator,
  TrendingUp,
  Database,
  Zap,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AgricultureCalculator = () => {
  const { language } = useLanguage();

  const [landSize, setLandSize] = useState<number | string>(1.0);
  const [unit, setUnit] = useState('acres');
  const [cropType, setCropType] = useState('rice');

  /* ---------------- Persist Input Settings ---------------- */
  useEffect(() => {
    const saved = localStorage.getItem('farmCalcSettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setLandSize(parsed.landSize);
      setUnit(parsed.unit);
      setCropType(parsed.cropType);
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      'farmCalcSettings',
      JSON.stringify({ landSize, unit, cropType })
    );
  };

  /* ---------------- Market Simulation ---------------- */
  const [marketRates, setMarketRates] = useState<any>({});
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`marketRates_${language}`);
    const time = localStorage.getItem(`lastMarketUpdate_${language}`);
    if (stored) {
      setMarketRates(JSON.parse(stored));
      setLastUpdated(time ? new Date(time) : new Date());
    }
  }, [language]);

  const simulateMarket = () => {
    const now = new Date();

    const baseRates = {
      rice: { seed: 20, urea: 140, tsp: 100, mop: 60 },
      potato: { seed: 2000, urea: 220, tsp: 180, mop: 150 },
      wheat: { seed: 80, urea: 100, tsp: 80, mop: 40 },
      maize: { seed: 25, urea: 100, tsp: 60, mop: 40 }
    };

    const fluctuation = now.getSeconds() % 2 === 0 ? 1.05 : 0.95;

    const updated: any = {};
    Object.keys(baseRates).forEach(crop => {
      updated[crop] = {};
      Object.keys(baseRates[crop]).forEach(key => {
        updated[crop][key] = Math.round(
          baseRates[crop][key] * fluctuation
        );
      });
    });

    setMarketRates(updated);
    localStorage.setItem(`marketRates_${language}`, JSON.stringify(updated));
    localStorage.setItem(
      `lastMarketUpdate_${language}`,
      now.toISOString()
    );
    setLastUpdated(now);
  };

  useEffect(() => {
    simulateMarket();
    const interval = setInterval(simulateMarket, 30000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Calculation ---------------- */
  const [results, setResults] = useState<any>(null);

  const toAcres = (value: number | string, u: string) => {
    const v = parseFloat(value as string);
    if (u === 'bigha') return v * 0.33;
    return v;
  };

  const calculate = () => {
    const acres = toAcres(landSize, unit);
    if (!acres || !marketRates[cropType]) return;

    const rate = marketRates[cropType];

    const seed = Math.round(acres * rate.seed);
    const urea = Math.round(acres * rate.urea);
    const tsp = Math.round(acres * rate.tsp);
    const mop = Math.round(acres * rate.mop);

    const cost =
      seed * rate.seed +
      urea * rate.urea +
      tsp * rate.tsp +
      mop * rate.mop;

    setResults({
      crop: cropType,
      area: acres.toFixed(2),
      unit,
      seed,
      fertilizers: { urea, tsp, mop },
      totalCost: cost
    });
  };

  useEffect(() => {
    calculate();
    saveSettings();
  }, [landSize, unit, cropType, marketRates]);

  const money = (v: number) =>
    `৳${v.toLocaleString('bn-BD')}`;

  /* ---------------- UI ---------------- */
  return (
    <div className="space-y-4 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Calculator className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">
                {language === 'en'
                  ? 'Smart Agriculture Calculator'
                  : 'স্মার্ট কৃষি ক্যালকুলেটর'}
              </h2>
              <p className="text-sm text-blue-100">
                {language === 'en'
                  ? 'Real-time input & market simulation'
                  : 'রিয়েল-টাইম তথ্য ও বাজার সিমুলেশন'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded">
            <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />
            <span className="text-xs font-bold">
              {language === 'en' ? 'LIVE DATA' : 'লাইভ ডাটা'}
            </span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="bg-white p-5 rounded-2xl">
        <h3 className="font-bold text-lg flex items-center mb-4">
          <Database className="h-4 w-4 mr-2" />
          {language === 'en' ? 'Input Details' : 'তথ্য প্রদান'}
        </h3>

        <label className="block text-sm mb-1">
          {language === 'en' ? 'Land Size' : 'জমির পরিমাণ'}
        </label>

        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={landSize}
            onChange={e => setLandSize(e.target.value)}
            className="flex-1 p-3 border rounded-xl"
          />
          <select
            value={unit}
            onChange={e => setUnit(e.target.value)}
            className="p-3 border rounded-xl"
          >
            <option value="acres">
              {language === 'en' ? 'Acres' : 'একর'}
            </option>
            <option value="bigha">
              {language === 'en' ? 'Bigha' : 'বিঘা'}
            </option>
          </select>
        </div>

        <label className="block text-sm mb-1">
          {language === 'en' ? 'Select Crop' : 'ফসল নির্বাচন'}
        </label>

        <select
          value={cropType}
          onChange={e => setCropType(e.target.value)}
          className="w-full p-3 border rounded-xl"
        >
          <option value="rice">Rice (ধান)</option>
          <option value="potato">Potato (আলু)</option>
          <option value="wheat">Wheat (গম)</option>
          <option value="maize">Maize (ভুট্টা)</option>
        </select>
      </div>

      {/* Result */}
      {results && (
        <div className="bg-white p-5 rounded-2xl">
          <h3 className="font-bold text-lg flex items-center mb-3">
            <TrendingUp className="h-4 w-4 mr-2" />
            {language === 'en'
              ? 'Estimated Requirements'
              : 'আনুমানিক প্রয়োজনীয় হিসাব'}
          </h3>

          <p className="text-sm mb-2">
            {language === 'en'
              ? `Total Land: ${results.area} ${results.unit}`
              : `মোট জমি: ${results.area} ${results.unit}`}
          </p>

          <p>
            {language === 'en' ? 'Seed Required' : 'প্রয়োজনীয় বীজ'}:{' '}
            {results.seed} kg
          </p>

          <p className="mt-2 font-bold text-green-600">
            {language === 'en'
              ? 'Estimated Total Cost'
              : 'আনুমানিক মোট ব্যয়'}:{' '}
            {money(results.totalCost)}
          </p>

          <div className="mt-4 text-xs text-gray-500 flex gap-2 items-start">
            <AlertCircle className="h-4 w-4" />
            {language === 'en'
              ? 'Rates are simulated using DAE guidelines. Contact local extension office for accurate advice.'
              : 'এই হিসাব ডিএই (DAE) নির্দেশিকা অনুসারে সিমুলেশন করা হয়েছে। সঠিক পরামর্শের জন্য নিকটস্থ কৃষি সম্প্রসারণ অফিসে যোগাযোগ করুন।'}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgricultureCalculator;

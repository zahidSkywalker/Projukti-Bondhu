import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Lightbulb, AlertCircle, Book } from 'lucide-react';
import { agriCategories } from '../../data/constants';

const AgricultureView = ({ language }) => {
  const [selectedAgriTopic, setSelectedAgriTopic] = useState(null);

  // Helper to get specific Pro Tips based on topic
  const getProTips = (id, lang) => {
    const tips = {
      rice: {
        en: [
          "Maintain water level to ensure proper tillering.",
          "Test soil pH before planting; aim for 6.5 - 6.8.",
          "Use certified seeds from reliable sources."
        ],
        bn: [
          "সঠিক কুশি গজানোর জন্য জমিতে পর্যাপ্ত পানি বজায় রাখুন।",
          "রোপণের আগে মাটির pH পরীক্ষা করুন; আদর্শ মাত্রা ৫.৫–৫.৮।",
          "নির্ভরযোগ্য উৎস থেকে প্রত্যয়িত ও মানসম্মত বীজ ব্যবহার করুন।"
        ]
      },
      fish: {
        en: [
          "Maintain plankton bloom for fish nutrition.",
          "Check water quality (pH, oxygen) weekly.",
          "Avoid overstocking to prevent disease spread."
        ],
        bn: [
          "মাছের পুষ্টির জন্য পানিতে পর্যাপ্ত প্ল্যাঙ্কটন উৎপাদন নিশ্চিত করুন।",
          "পানির গুণমান (pH ও দ্রবীভূত অক্সিজেন) প্রতি সপ্তাহে পরীক্ষা করুন।",
          "রোগ ছড়ানো রোধে অতিরিক্ত মাছ মজুদ করবেন না।"
        ]
      },
      cattle: {
        en: [
          "Keep shed clean and well-ventilated.",
          "Follow strict vaccination schedule.",
          "Provide mineral licks to improve health."
        ],
        bn: [
          "গবাদি পশুর শেড পরিষ্কার ও পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।",
          "নিয়মিত ও নির্ধারিত সময়সূচি অনুযায়ী টিকা প্রদান করুন।",
          "স্বাস্থ্য উন্নয়নের জন্য মিনারেল লিক সরবরাহ করুন।"
        ]
      },
      poultry: {
        en: [
          "Ensure constant temperature for chicks (0-7 days).",
          "Disinfect brooding house regularly.",
          "Remove sick birds immediately to prevent spread."
        ],
        bn: [
          "বাচ্চা মুরগির জন্য স্থির তাপমাত্রা বজায় রাখুন (০–৭ দিন)।",
          "ব্রুডিং হাউস নিয়মিত জীবাণুমুক্ত করুন।",
          "রোগ ছড়ানো রোধে অসুস্থ পাখি দ্রুত আলাদা করুন।"
        ]
      },
      fruits: {
        en: [
          "Prune regularly to improve air circulation.",
          "Apply mulch to retain soil moisture.",
          "Intercropping can increase productivity."
        ],
        bn: [
          "বাতাস চলাচল উন্নত করতে নিয়মিত ছাঁটাই করুন।",
          "মাটির আর্দ্রতা ধরে রাখতে মালচ প্রয়োগ করুন।",
          "মিশ্র ফসল চাষে উৎপাদন বৃদ্ধি পেতে পারে।"
        ]
      },
      vegetables: {
        en: [
          "Use raised beds for better drainage.",
          "Rotate crops to maintain soil fertility.",
          "Apply organic manure before planting."
        ],
        bn: [
          "ভালো পানি নিষ্কাশনের জন্য উঁচু বেড ব্যবহার করুন।",
          "মাটির উর্বরতা বজায় রাখতে ফসল পর্যায়ক্রমে পরিবর্তন করুন।",
          "রোপণের আগে জৈব সার প্রয়োগ করুন।"
        ]
      }
    };

    return tips[id] ? tips[id][lang] : [];
  };

  if (selectedAgriTopic) {
    const tips = getProTips(selectedAgriTopic.id, language);

    return (
      <div className="space-y-4 pb-20">
        {/* Back Button */}
        <button
          onClick={() => setSelectedAgriTopic(null)}
          className="flex items-center text-green-600 font-bold mb-2 px-4 py-2 bg-green-50 rounded-xl w-max hover:bg-green-100 transition-colors shadow-sm"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          {language === 'en' ? 'Back to Categories' : 'ক্যাটাগরিতে ফিরে যান'}
        </button>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
          {/* Title & Description */}
          <div className="mb-6 border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-green-700">{selectedAgriTopic.name}</h2>
              <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                <span className="font-bold text-sm uppercase tracking-wider">
                  {language === 'en' ? 'Guide' : 'নির্দেশিকা'}
                </span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {selectedAgriTopic.description}
            </p>
          </div>

          {/* Timing */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-blue-900 mb-1 text-lg">
                  {language === 'en' ? 'Timing & Season' : 'সময় ও মৌসুম'}
                </div>
                <div className="text-blue-800 bg-blue-100/50 p-2 rounded-lg">
                  {selectedAgriTopic.timing}
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-yellow-500 text-white p-3 rounded-lg">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-yellow-900 mb-3 text-lg">
                  {language === 'en' ? 'Expert Tips' : 'বিশেষজ্ঞ পরামর্শ'}
                </div>
                <ul className="space-y-2">
                  {tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start text-sm text-yellow-900">
                      <span className="mr-2 font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Book className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Step-by-Step Guide' : 'ধাপে ধাপে নির্দেশিকা'}
            </h3>

            <div className="space-y-4">
              {selectedAgriTopic.steps.map((step, idx) => (
                <div key={idx} className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-600 text-green-600 font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl border">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 p-4 rounded-xl border text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-gray-500" />
            <span className="font-semibold text-sm">
              {language === 'en' ? 'Official Advice' : 'সরকারি পরামর্শ'}
            </span>
          </div>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            {language === 'en'
              ? 'For region-specific guidance and technical support, please contact your local Department of Agricultural Extension (DAE).'
              : 'অঞ্চলভিত্তিক পরামর্শ ও কারিগরি সহায়তার জন্য আপনার নিকটস্থ কৃষি সম্প্রসারণ অধিদপ্তর (DAE)-এর সাথে যোগাযোগ করুন।'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      {agriCategories[language].map((category, idx) => (
        <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border">
          <h3 className="font-bold text-lg mb-3 flex items-center">
            <Book className="h-4 w-4 mr-2" />
            {category.title}
          </h3>

          {category.items.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelectedAgriTopic(item)}
              className="w-full text-left p-4 bg-gray-50 rounded-xl flex justify-between items-center hover:bg-green-50"
            >
              <span>{item.name}</span>
              <ChevronRight className="h-5 w-5 text-green-600" />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AgricultureView;

import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Trash2, Mic, MicOff } from 'lucide-react';
import { qaDatabase } from '../../data/constants';

const AIChatView = ({ language }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  useEffect(() => {
    setMessages([{
      type: 'ai',
      text: language === 'en' 
        ? "Hello! I'm your farming and education assistant. How can I help?"
        : "হ্যালো! আমি আপনার কৃষি ও শিক্ষা সহায়ক। কীভাবে সাহায্য করতে পারি?",
      timestamp: new Date()
    }]);
  }, [language]);

  const getAIResponse = async (userText) => {
    const lowerText = userText.toLowerCase().trim();
    const greetings = {
      en: ['hi', 'hello', 'hey', 'good morning', 'assalamu alaikum'],
      bn: ['হাই', 'হ্যালো', 'আসসালামু আলাইকুম']
    };
    const greetingResponses = {
      en: ["Hello! 👋 How can I help you with farming today?"],
      bn: ["হ্যালো! 👋 আজ কৃষি বিষয়ে কীভাবে সাহায্য করতে পারি?"]
    };

    if (greetings[language].some(g => lowerText.includes(g))) {
      return greetingResponses[language][0];
    }

    const qa = qaDatabase[language].find(item => 
      item.q.toLowerCase().includes(lowerText) || 
      lowerText.includes(item.q.toLowerCase().split(' ').slice(0, 3).join(' '))
    );

    if (qa) return qa.a;

    return language === 'en' 
      ? "I'm not sure about that. Can you ask specifically about crops, weather, or market prices?"
      : "আমি তা নিশ্চিত নই। আপনি কি নির্দিষ্টভাবে ফসল, আবহাওয়া বা বাজার মূল্য সম্পর্কে জিজ্ঞাসা করতে পারেন?";
  };

  const handleChat = async () => {
    if (!input.trim()) return;
    const userMessage = { type: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(async () => {
      const responseText = await getAIResponse(input);
      setMessages(prev => [...prev, { type: 'ai', text: responseText, timestamp: new Date() }]);
      setIsTyping(false);
    }, 800);
  };

  const filteredQuestions = selectedCategory === 'all' 
    ? qaDatabase[language] 
    : qaDatabase[language].filter(q => q.category === selectedCategory);

  const categories = [
    { id: 'all', label: language === 'en' ? 'All' : 'সব', icon: '📚' },
    { id: 'agriculture', label: language === 'en' ? 'Agri' : 'কৃষি', icon: '🌾' },
    { id: 'education', label: language === 'en' ? 'Edu' : 'শিক্ষা', icon: '📖' },
    { id: 'market', label: language === 'en' ? 'Market' : 'বাজার', icon: '💰' }
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Header / Categories */}
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
              selectedCategory === cat.id ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200'
            }`}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
              msg.type === 'user' 
                ? 'bg-green-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
            }`}>
              <div className="whitespace-pre-line text-sm leading-relaxed">{msg.text}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions & Input */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="mb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {filteredQuestions.slice(0, 4).map((qa, idx) => (
            <button key={idx} onClick={() => { setInput(qa.q); handleChat(); }} className="flex-shrink-0 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-100 hover:bg-green-100 transition-colors">
              {qa.q.length > 25 ? qa.q.substring(0, 25) + '...' : qa.q}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button onClick={() => setVoiceEnabled(!voiceEnabled)} className={`p-3 rounded-xl ${voiceEnabled ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'}`}>
            {voiceEnabled ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyPress={e => e.key === 'Enter' && handleChat()}
            className="flex-1 bg-gray-100 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-sm" 
            placeholder={language === 'en' ? "Ask anything..." : "যেকোনো কিছু জিজ্ঞাসা করুন..."} 
          />
          <button onClick={handleChat} disabled={!input.trim()} className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-green-200">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatView;

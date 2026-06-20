import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { Send, Bot, User, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';
import { SMARTPHONE_CHARGE_CO2_RATIO } from '../config/constants';

const QUICK_CHIPS = [
  "How can I reduce my transport emissions?",
  "What's my biggest CO₂ category this week?",
  "Give me a 7-day eco challenge",
  "Compare my footprint to the Indian average",
  "What foods have the highest carbon impact?"
];

export default function AICoach() {
  const { userProfile } = useAuth();
  const { weeklyTotal } = useCarbon();
  
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hi ${userProfile?.name?.split(' ')[0] || 'there'}! 🌱 I'm your CarbonSync AI Coach. I've got your latest footprint data ready. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);




  const callGemini = async (chatHistory) => {
    const userStats = {
      monthlyCO2: weeklyTotal * SMARTPHONE_CHARGE_CO2_RATIO,
      streak: userProfile?.streak || 0,
      level: userProfile?.level || 'Seedling'
    };
    return getChatResponse(input, userStats, chatHistory);
  };

  const handleSend = async (e, textOverride = null) => {
    if (e) e.preventDefault();
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: textToSend }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await callGemini(newMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      toast.error(error.message || 'Trouble reaching the AI Coach. Try again.');
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops, I'm having trouble connecting right now. Please check your API key or try again later. 🍃" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)] flex flex-col animate-in fade-in duration-500">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shadow-sm">
          <Sparkles size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">AI Coach</h1>
          <p className="text-gray-500 text-sm mt-1">Personalized sustainability guidance powered by Google Gemini</p>
        </div>
      </div>

      <Card className="flex-1 flex flex-col bg-white border border-gray-200 shadow-sm overflow-hidden relative">
        
        {/* Quick Chips Section */}
        <div className="bg-gray-50/50 p-4 border-b border-gray-100 overflow-x-auto hide-scrollbar flex gap-2">
          {QUICK_CHIPS.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(null, chip)}
              disabled={isLoading}
              className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-all shadow-sm active:scale-95 disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-gray-50/30">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center mt-1 ${
                  msg.role === 'user' ? 'bg-gray-900 text-white' : 'bg-green-600 text-white shadow-md shadow-green-600/20'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={18} />}
                </div>
                
                <div className={`px-5 py-3.5 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-gray-900 text-white rounded-tr-sm' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center mt-1 bg-green-600 text-white shadow-md shadow-green-600/20">
                  <Bot size={18} />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-white border border-gray-200 rounded-tl-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSend} className="flex gap-3 relative">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <MessageSquare size={18} />
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your AI Coach anything..."
                className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
                disabled={isLoading}
                aria-label="Message AI Coach"
              />
            </div>
            <Button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              className="bg-green-600 hover:bg-green-700 h-auto py-0 px-5 rounded-xl shadow-md shadow-green-600/20"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </Button>
          </form>
          <div className="text-center mt-3">
            <p className="text-[11px] text-gray-400 font-medium flex items-center justify-center gap-1">
              <Sparkles size={10} /> Powered by Gemini 1.5 Flash
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

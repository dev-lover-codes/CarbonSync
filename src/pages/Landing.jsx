import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BarChart3, Brain, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Landing() {
  const scrollToFeatures = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#1B1B1B]">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-[#2D6A4F]" />
          <span className="text-xl font-bold tracking-tight text-[#2D6A4F]">CarbonSync</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth" className="text-sm font-semibold text-gray-700 hover:text-[#2D6A4F] transition-colors">
            Login
          </Link>
          <Link 
            to="/auth" 
            className="bg-[#2D6A4F] text-white rounded-xl px-5 py-2.5 hover:bg-[#1B4332] font-semibold text-sm transition-all shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-[#2D6A4F] leading-tight">
            Know your footprint.<br />
            <span className="text-[#52B788]">Own your impact.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Intercept emissions before you act. Get AI-powered insights. Join a community making real change. Take charge of your contribution to a healthier planet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/auth" 
              className="bg-[#2D6A4F] text-white rounded-xl px-7 py-4 hover:bg-[#1B4332] font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center gap-2 pointer-events-auto"
            >
              Start for free <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              onClick={scrollToFeatures}
              className="bg-white border border-gray-200 text-gray-700 rounded-xl px-7 py-4 hover:bg-gray-50 font-semibold text-base transition-all shadow-sm pointer-events-auto"
            >
              See how it works
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative w-full h-[400px]"
        >
          {/* Animated SVG Tree/Leaf illustration */}
          <svg viewBox="0 0 500 500" className="w-full max-w-md drop-shadow-2xl">
            <defs>
              <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5A2B" />
                <stop offset="100%" stopColor="#5C3A21" />
              </linearGradient>
              <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52B788" />
                <stop offset="100%" stopColor="#2D6A4F" />
              </linearGradient>
              <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B7E4C7" />
                <stop offset="100%" stopColor="#74C69D" />
              </linearGradient>
            </defs>
            <motion.path 
              d="M250,450 L250,250" 
              stroke="url(#trunkGrad)" 
              strokeWidth="24" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path 
              d="M250,320 Q180,260 150,280" 
              stroke="url(#trunkGrad)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path 
              d="M250,280 Q320,220 350,240" 
              stroke="url(#trunkGrad)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            
            {/* Canopy */}
            <motion.circle 
              cx="250" cy="180" r="80" 
              fill="url(#leafGrad1)" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            />
            <motion.circle 
              cx="170" cy="240" r="60" 
              fill="url(#leafGrad2)" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            />
            <motion.circle 
              cx="330" cy="210" r="65" 
              fill="url(#leafGrad2)" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
            />
            <motion.circle 
              cx="250" cy="130" r="45" 
              fill="#D8F3DC" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
            />
          </svg>

          {/* Absolute overlay over the 3D content area */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-4">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Intercept Your Footprint.<br/>
              <span className="text-emerald-400">Change Your Future.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-xl">
              Real-time AI that catches high-emission habits before you act — 
              not after.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-4 md:py-0">
            <p className="text-3xl font-black text-[#2D6A4F]">10kg</p>
            <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">Avg Daily Footprint</p>
          </div>
          <div className="py-4 md:py-0">
            <p className="text-3xl font-black text-[#2D6A4F]">40%</p>
            <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">Reducible with Simple Changes</p>
          </div>
          <div className="py-4 md:py-0">
            <p className="text-3xl font-black text-[#2D6A4F]">2.3B</p>
            <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">People Intercepting Globally</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#2D6A4F] mb-4">Core Ecosystem Features</h2>
          <p className="text-gray-500">Every aspect of CarbonSync is optimized to facilitate climate understanding and footprint reduction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2D6A4F] mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">In-The-Moment Intercept</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Calculate footprint impact before you act. Log transportation, home energy, diet, and shopping habits at the point of decision.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2D6A4F] mb-6">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">AI Insights & Tips</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Powered by Google Gemini to analyze your specific logs and generate encouraging, personalized reduction coaching recommendations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2D6A4F] mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Leaderboard & Streaks</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Stay inspired and share your progress. Gamified streaks, levels, and monthly rankings keep you moving in climate solidarity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#EAF3EC]/40 py-24 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight text-[#2D6A4F] mb-4">How It Works</h2>
            <p className="text-gray-500">Become carbon-aware in three basic steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-xl font-black mb-6">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Intercept in the Moment</h3>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">Evaluate transportation, home electricity usage, and food consumption before confirming your choice.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-xl font-black mb-6">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Analyze Decisions</h3>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">Watch interactive analytics break down carbon sources into actionable points of decision.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-xl font-black mb-6">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reduce Your Impact</h3>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">Implement personalized goals and AI tips to save CO2 and watch your score rise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#52B788] opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <h2 className="text-3xl lg:text-4xl font-black mb-4 relative z-10">Start reducing your footprint today</h2>
          <p className="text-[#D8F3DC] text-base mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
            Join thousands of active users deciding differently in the moment and saving metric tons of CO2. Intercept emissions on your terms.
          </p>
          <Link 
            to="/auth" 
            className="bg-white text-[#2D6A4F] rounded-xl px-8 py-3.5 hover:bg-gray-50 font-bold text-base transition-all inline-flex items-center gap-2 relative z-10 shadow-lg"
          >
            Create Your Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[#2D6A4F]" />
            <span className="font-bold tracking-tight text-[#2D6A4F]">CarbonSync</span>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} CarbonSync. Built for Hack2skill PromptWars Challenge 3. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

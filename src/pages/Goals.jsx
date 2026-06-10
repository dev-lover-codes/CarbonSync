import React, { useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { CheckCircle, Target, Plus, Sparkles, Loader2, Flag, Lock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { tapEffect } from '../utils/animations';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import Modal from '../components/ui/Modal';
import Input from '../components/ui/Input';
import toast from 'react-hot-toast';

const STATIC_CHALLENGES = [
  { id: 'c1', title: 'Zero Car Week', target: 0, unit: 'km', desc: 'Commute without a car for 7 days.' },
  { id: 'c2', title: 'Meatless Monday', target: 1, unit: 'day', desc: 'Eat fully vegetarian for one day.' },
  { id: 'c3', title: 'Cold Wash Month', target: 4, unit: 'washes', desc: 'Wash clothes on cold setting.' },
  { id: 'c4', title: 'No Shopping Spree', target: 30, unit: 'days', desc: 'Buy no non-essential items.' },
  { id: 'c5', title: 'Unplug Standby', target: 7, unit: 'days', desc: 'Unplug devices when not in use.' },
  { id: 'c6', title: 'Public Transit Pro', target: 50, unit: 'km', desc: 'Take the bus or train for 50km.' }
];

export default function Goals() {
  const { userProfile } = useAuth();
  const { goals, addGoal, toggleGoal, activities } = useCarbon();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestedGoals, setSuggestedGoals] = useState([]);
  
  // Custom goal form
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [unit, setUnit] = useState('');

  const activeGoals = useMemo(() => {
    return (goals || []).filter(g => g.status !== 'completed');
  }, [goals]);

  const completedGoals = useMemo(() => {
    return (goals || []).filter(g => g.status === 'completed');
  }, [goals]);

  const handleAddGoal = async (goalData) => {
    try {
      await addGoal({
        title: goalData.title || title,
        target: Number(goalData.target || target),
        current: 0,
        unit: goalData.unit || unit
      });
      toast.success('Goal added successfully! 🎯');
      setIsModalOpen(false);
      setTitle('');
      setTarget('');
      setUnit('');
      setSuggestedGoals([]);
    } catch (error) {
      console.error('Error adding goal', error);
      toast.error('Failed to add goal');
    }
  };

  const computedBadges = useMemo(() => {
    const totalSaved = userProfile?.totalSaved || 0;
    const streak = userProfile?.streak || 0;
    const energySource = userProfile?.energySourcePreference || '';
    
    // Check activities for transportation / recycling
    const hasCycling = (activities || []).some(a => a.type === 'bike_km' || a.description?.toLowerCase().includes('cycle') || a.description?.toLowerCase().includes('bike'));
    const hasRecycling = (activities || []).some(a => a.category === 'waste' || a.type === 'recycled_kg');

    return [
      { id: 'm1', earned: true, label: 'Eco Seed', icon: '🌱', desc: 'Started your carbon footprint sync.' },
      { id: 'm2', earned: hasCycling || userProfile?.transportPreference === 'cycle', label: 'Bike Knight', icon: '🚲', desc: 'Logged a cycling activity.' },
      { id: 'm3', earned: hasRecycling, label: 'Zero Waste', icon: '🗑️', desc: 'Logged a waste recycling activity.' },
      { id: 'm4', earned: energySource === 'solar', label: 'Solar Power', icon: '☀️', desc: 'Switched energy preference to Solar.' },
      { id: 'm5', earned: totalSaved >= 100, label: 'Forest Guard', icon: '🌲', desc: `Saved 100kg CO₂ total (Current: ${totalSaved.toFixed(0)}kg).` },
      { id: 'm6', earned: streak >= 7, label: 'CO₂ Slayer', icon: '⚔️', desc: `Maintained a 7-day streak (Current: ${streak} days).` },
    ];
  }, [userProfile, activities]);

  const getAIGoals = async () => {
    setIsSuggesting(true);
    setSuggestedGoals([]);
    try {
      const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;
      if (!apiKey) throw new Error("Missing API Key");

      // Find highest category
      const totals = {};
      (activities || []).forEach(a => {
        const factor = carbonFactors[a.category]?.[a.type] || 0;
        totals[a.category] = (totals[a.category] || 0) + (factor * a.amount);
      });
      const topCategory = Object.keys(totals).sort((a, b) => totals[b] - totals[a])[0] || 'general';

      const prompt = `Suggest exactly 3 realistic sustainability goals for a user whose highest carbon footprint category is "${topCategory}".
Format the response strictly as a JSON array of objects with keys: "title" (string), "target" (number), "unit" (string), "desc" (string). Nothing else. Example:
[{"title": "Walk to work", "target": 20, "unit": "km", "desc": "Walk instead of driving."}]`;

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerously-allow-browser': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      if (!res.ok) throw new Error("Failed to get suggestions");
      
      const data = await res.json();
      let text = data.content[0].text;
      
      // Attempt to parse JSON even if Claude wrapped it in markdown
      const match = text.match(/\[[\s\S]*\]/);
      if (match) {
        text = match[0];
      }
      
      const parsed = JSON.parse(text);
      setSuggestedGoals(parsed);
    } catch (error) {
      console.error(error);
      toast.error('Failed to generate AI suggestions.');
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Your Goals</h1>
          <p className="text-gray-500 mt-1">Set targets and challenge yourself to do better</p>
        </div>
        <motion.div
          whileHover={tapEffect.whileHover}
          whileTap={tapEffect.whileTap}
          transition={tapEffect.transition}
        >
          <Button onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary-dark flex items-center gap-2 shadow-lg shadow-primary/20">
            <Plus size={18} />
            Create Goal
          </Button>
        </motion.div>
      </div>

      {/* ACTIVE TARGETS GARDEN */}
      <div className="bg-surface-dark border border-primary/20 p-8 rounded-3xl relative overflow-hidden texture-noise text-white shadow-2xl mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2.5">
            <Target size={24} className="text-primary-light animate-pulse" /> ACTIVE TARGETS GARDEN
          </h2>
          <span className="text-xs text-primary-light font-mono bg-primary/20 px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">
            {activeGoals.length} Active
          </span>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeGoals.length > 0 ? activeGoals.map(goal => {
            const progress = Math.min((goal.current / goal.target) * 100, 100);
            return (
              <motion.div
                key={goal.id}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col justify-between hover:shadow-glow-green/10 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-extrabold text-white text-base leading-snug pr-4">{goal.title}</h3>
                    <div className="p-2 bg-white/10 text-primary-light rounded-xl shrink-0 border border-white/10">
                      <Flag size={16} />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-2 font-semibold tracking-wider uppercase">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-primary-light">{goal.current} / {goal.target} {goal.unit}</span>
                    </div>
                    <ProgressBar progress={progress} color="bg-primary-light" className="shadow-glow-green" />
                  </div>
                </div>
                
                <motion.button 
                  onClick={() => toggleGoal(goal.id, 'active')}
                  whileHover={tapEffect.whileHover}
                  whileTap={tapEffect.whileTap}
                  transition={tapEffect.transition}
                  className="w-full flex items-center justify-center gap-2 border border-white/10 text-white hover:bg-white/10 active:bg-white/20 transition-all py-3 rounded-2xl font-bold text-sm bg-white/5 shadow-md"
                >
                  <CheckCircle size={18} className="text-primary-light" /> Mark Complete
                </motion.button>
              </motion.div>
            );
          }) : (
            <div className="col-span-full py-16 text-center border-2 border-dashed border-white/10 rounded-3xl bg-white/5">
              <Target size={48} className="mx-auto text-gray-500 mb-4 animate-bounce" />
              <p className="text-lg font-bold text-white mb-1">Your Garden is Empty</p>
              <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Cultivate green targets and track your sustainability achievements!</p>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={tapEffect.whileHover}
                whileTap={tapEffect.whileTap}
                transition={tapEffect.transition}
                className="bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-6 rounded-2xl text-sm transition-all shadow-lg shadow-primary/20 border border-primary/30"
              >
                Set a Target
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* ECO COSMOS MEDALS */}
      <div className="bg-surface-dark border border-sky/20 p-8 rounded-3xl relative overflow-hidden texture-noise text-white shadow-2xl mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2.5">
            <Award size={24} className="text-sky-light animate-pulse" /> ECO COSMOS MEDALS
          </h2>
          <span className="text-xs text-sky-light font-mono bg-sky/20 px-3 py-1 rounded-full border border-sky/30 uppercase tracking-widest">
            {computedBadges.filter(b => b.earned).length} / {computedBadges.length} Earned
          </span>
        </div>
        
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {computedBadges.map(badge => (
            <div
              key={badge.id}
              className={`bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-5 text-center flex flex-col items-center justify-between transition-all duration-300 relative group overflow-hidden ${
                badge.earned 
                  ? 'shadow-lg shadow-primary/5 border-primary-light/20' 
                  : 'opacity-40 grayscale border-white/5'
              }`}
            >
              {badge.earned && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary-light/40 to-transparent"></div>
              )}
              <div className="flex flex-col items-center">
                <span className={`text-4xl mb-3 block transform group-hover:scale-110 transition-transform ${badge.earned ? 'animate-float-gentle' : ''}`}>
                  {badge.icon}
                </span>
                <h4 className="font-extrabold text-white text-sm tracking-tight mb-1">{badge.label}</h4>
                <p className="text-[10px] text-gray-400 leading-relaxed max-w-[120px] mx-auto">{badge.desc}</p>
              </div>
              <div className="mt-4 w-full">
                {badge.earned ? (
                  <span className="text-[10px] font-bold text-primary-light bg-primary/20 py-1 px-2.5 rounded-full border border-primary-light/20 uppercase tracking-wider">
                    Unlocked
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-gray-500 bg-white/5 py-1 px-2.5 rounded-full border border-white/5 uppercase tracking-wider flex items-center justify-center gap-1.5 mx-auto">
                    <Lock size={10} /> Locked
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Challenges */}
      <div className="bg-surface-dark border border-primary/20 p-8 rounded-3xl relative overflow-hidden texture-noise text-white shadow-2xl">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mb-6">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2.5">
            <Sparkles size={24} className="text-amber-500" /> SUGGESTED CHALLENGES
          </h2>
          <p className="text-xs text-gray-400 mt-1">Accept curated challenges to accelerate your green progress</p>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATIC_CHALLENGES.map(challenge => (
            <div 
              key={challenge.id} 
              className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col justify-between hover:shadow-glow-green/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div>
                <h3 className="font-extrabold text-white mb-2 text-base group-hover:text-primary-light transition-colors">{challenge.title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{challenge.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs font-bold text-primary-light bg-primary/20 px-3 py-1.5 rounded-xl border border-primary-light/10">
                  Target: {challenge.target} {challenge.unit}
                </span>
                <motion.button 
                  onClick={() => handleAddGoal(challenge)} 
                  whileHover={tapEffect.whileHover}
                  whileTap={tapEffect.whileTap}
                  transition={tapEffect.transition}
                  className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-xl text-xs transition-all shadow-md shadow-primary/20 border border-primary-light/10"
                >
                  Accept
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setSuggestedGoals([]); }} title="Create a Goal">
        <div className="mt-4 space-y-4">
          
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">Not sure what to pick?</p>
              <p className="text-xs text-gray-600">Let AI suggest goals based on your habits.</p>
            </div>
            <motion.div
              whileHover={tapEffect.whileHover}
              whileTap={tapEffect.whileTap}
              transition={tapEffect.transition}
            >
              <Button 
                onClick={getAIGoals} 
                disabled={isSuggesting}
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700 shadow-sm shadow-purple-600/20 whitespace-nowrap"
              >
                {isSuggesting ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} className="mr-1" />}
                AI Suggest
              </Button>
            </motion.div>
          </div>

          {suggestedGoals.length > 0 && (
            <div className="space-y-3 mt-4 animate-in fade-in slide-in-from-top-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">AI Suggestions</p>
              {suggestedGoals.map((sg, idx) => (
                <div key={idx} className="p-3 border border-purple-200 bg-white rounded-lg flex items-center justify-between hover:border-purple-400 transition-colors">
                  <div>
                    <p className="font-bold text-sm text-gray-900">{sg.title}</p>
                    <p className="text-xs text-gray-500">{sg.desc}</p>
                  </div>
                  <motion.div
                    whileHover={tapEffect.whileHover}
                    whileTap={tapEffect.whileTap}
                    transition={tapEffect.transition}
                  >
                    <Button onClick={() => handleAddGoal(sg)} size="sm" variant="outline" className="ml-2 border-purple-200 text-purple-700">Add</Button>
                  </motion.div>
                </div>
              ))}
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase">Or create custom</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Goal Title</label>
            <Input 
              placeholder="e.g. Cycle to work" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Target Number</label>
              <Input 
                type="number" 
                placeholder="e.g. 50" 
                value={target} 
                onChange={e => setTarget(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
              <Input 
                placeholder="e.g. km" 
                value={unit} 
                onChange={e => setUnit(e.target.value)} 
              />
            </div>
          </div>
          
          <motion.div
            whileHover={tapEffect.whileHover}
            whileTap={tapEffect.whileTap}
            transition={tapEffect.transition}
            className="w-full mt-2"
          >
            <Button 
              onClick={() => handleAddGoal({})} 
              disabled={!title || !target || !unit}
              className="w-full bg-primary hover:bg-primary-dark"
            >
              Save Goal
            </Button>
          </motion.div>
        </div>
      </Modal>
    </div>
  );
}

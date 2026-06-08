import React, { useState, useMemo } from 'react';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { CheckCircle, Target, Plus, Sparkles, Loader2, Flag, ArrowRight } from 'lucide-react';
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
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Your Goals</h1>
          <p className="text-gray-500 mt-1">Set targets and challenge yourself to do better</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 shadow-md shadow-blue-600/20">
          <Plus size={18} />
          Create Goal
        </Button>
      </div>

      {/* Active Goals */}
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Target size={24} className="text-blue-500" /> Active Goals
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {activeGoals.length > 0 ? activeGoals.map(goal => {
          const progress = Math.min((goal.current / goal.target) * 100, 100);
          return (
            <Card key={goal.id} className="p-6 shadow-sm border border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-gray-900 pr-4">{goal.title}</h3>
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <Flag size={18} />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1.5 font-medium">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-blue-600">{goal.current} / {goal.target} {goal.unit}</span>
                </div>
                <ProgressBar progress={progress} color="bg-blue-500" />
              </div>
              
              <Button 
                onClick={() => toggleGoal(goal.id, 'active')}
                variant="outline" 
                className="w-full border-gray-200 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-green-200"
              >
                <CheckCircle size={18} className="mr-2" /> Mark Complete
              </Button>
            </Card>
          );
        }) : (
          <div className="col-span-full py-12 text-center border-2 border-dashed border-gray-200 rounded-2xl">
            <Target size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-lg font-medium text-gray-900">No active goals</p>
            <p className="text-gray-500 mb-4">Set a goal to keep yourself motivated!</p>
            <Button onClick={() => setIsModalOpen(true)} variant="outline">Set your first goal</Button>
          </div>
        )}
      </div>

      {/* Suggested Challenges */}
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Sparkles size={24} className="text-amber-500" /> Suggested Challenges
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATIC_CHALLENGES.map(challenge => (
          <Card key={challenge.id} className="p-5 border border-gray-100 shadow-sm flex flex-col">
            <h3 className="font-bold text-gray-900 mb-1">{challenge.title}</h3>
            <p className="text-sm text-gray-500 flex-1 mb-4">{challenge.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">Target: {challenge.target} {challenge.unit}</span>
              <Button onClick={() => handleAddGoal(challenge)} size="sm" className="bg-gray-900 text-white hover:bg-black">
                Accept
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setSuggestedGoals([]); }} title="Create a Goal">
        <div className="mt-4 space-y-4">
          
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">Not sure what to pick?</p>
              <p className="text-xs text-gray-600">Let AI suggest goals based on your habits.</p>
            </div>
            <Button 
              onClick={getAIGoals} 
              disabled={isSuggesting}
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700 shadow-sm shadow-purple-600/20 whitespace-nowrap"
            >
              {isSuggesting ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} className="mr-1" />}
              AI Suggest
            </Button>
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
                  <Button onClick={() => handleAddGoal(sg)} size="sm" variant="outline" className="ml-2 border-purple-200 text-purple-700">Add</Button>
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
          
          <Button 
            onClick={() => handleAddGoal({})} 
            disabled={!title || !target || !unit}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
          >
            Save Goal
          </Button>
        </div>
      </Modal>
    </div>
  );
}

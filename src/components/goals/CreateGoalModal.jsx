import React, { useState, useEffect } from 'react';
import { useCarbon } from '../../contexts/CarbonContext';
import { motion } from 'framer-motion';
import { tapEffect } from '../../utils/animations';
import { Loader2, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import toast from 'react-hot-toast';

export default function CreateGoalModal({ isOpen, onClose }) {
  const { addGoal } = useCarbon();
  
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestedGoals, setSuggestedGoals] = useState([]);
  
  // Custom goal form
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [unit, setUnit] = useState('');

  // Reset form states when closed
  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setTarget('');
      setUnit('');
      setSuggestedGoals([]);
      setIsSuggesting(false);
    }
  }, [isOpen]);

  const handleAddGoal = async (goalData) => {
    try {
      const gTitle = goalData.title || title;
      const gTarget = Number(goalData.target || target);
      const gUnit = goalData.unit || unit;

      if (!gTitle || !gTarget || !gUnit) {
        toast.error('Please fill in all goal fields.');
        return;
      }

      await addGoal({
        title: gTitle,
        target: gTarget,
        current: 0,
        unit: gUnit
      });
      toast.success('Goal added successfully! 🎯');
      onClose();
    } catch (error) {
      toast.error('Failed to add goal');
    }
  };

  const getAIGoals = async () => {
    setIsSuggesting(true);
    setSuggestedGoals([]);
    try {
      const prompt = `Suggest exactly 3 realistic sustainability goals.
Format as JSON array: [{"title":"","target":0,"unit":"","desc":""}]
Only return the JSON array, nothing else.`;

      const judgeKey = sessionStorage.getItem('judge_gemini_key');
      const headers = { 'Content-Type': 'application/json' };
      if (judgeKey) {
        headers['Authorization'] = `Bearer ${judgeKey}`;
      }

      const response = await fetch('/api/gemini-proxy', {
        method: 'POST',
        headers,
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) throw new Error('Proxy error');
      const data = await response.json();
      const text = data.text;

      const match = text.match(/\[[\s\S]*\]/);
      if (match) setSuggestedGoals(JSON.parse(match[0]));
    } catch (error) {
      toast.error('Failed to generate AI suggestions.');
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create a Goal">
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
  );
}

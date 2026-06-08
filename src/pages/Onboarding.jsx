import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  Home, 
  ShoppingBag, 
  Utensils, 
  Bus, 
  Train, 
  Bike, 
  Laptop, 
  ChevronRight, 
  CheckCircle2 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    biggestSource: '',
    commute: '',
    reductionGoal: 50
  });
  const { updateProfile } = useAuth();
  const { addGoal } = useCarbon();
  const navigate = useNavigate();

  const handleComplete = async () => {
    try {
      // Save initial goal
      await addGoal({
        title: "Initial Reduction Goal",
        targetAmount: selections.reductionGoal,
        category: selections.biggestSource || 'general',
        period: 'monthly'
      });

      // Update profile
      await updateProfile({
        onboardingComplete: true,
        preferences: {
          primarySource: selections.biggestSource,
          commuteType: selections.commute
        }
      });

      navigate('/dashboard');
    } catch (error) {
      console.error("Failed to complete onboarding", error);
    }
  };

  const steps = [
    {
      title: "What's your biggest carbon source?",
      subtitle: "Choose the area where you think you have the most impact.",
      options: [
        { id: 'transport', label: 'Transport', icon: Car },
        { id: 'energy', label: 'Home Energy', icon: Home },
        { id: 'food', label: 'Food', icon: Utensils },
        { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
      ],
      field: 'biggestSource'
    },
    {
      title: "How do you usually commute?",
      subtitle: "This helps us calculate your baseline transport emissions.",
      options: [
        { id: 'car', label: 'Car', icon: Car },
        { id: 'bus', label: 'Bus', icon: Bus },
        { id: 'train', label: 'Train', icon: Train },
        { id: 'bike', label: 'Bike', icon: Bike },
        { id: 'wfh', label: 'Work from home', icon: Laptop },
      ],
      field: 'commute'
    }
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 px-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300
                ${step >= i ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-400'}
              `}>
                {step > i ? <CheckCircle2 size={20} /> : i}
              </div>
              {i < 4 && (
                <div className={`h-1 flex-1 mx-4 rounded-full transition-all duration-300 ${step > i ? 'bg-primary' : 'bg-gray-100'}`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step <= 2 && (
            <motion.div
              key="step-options"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-surface-dark mb-3">{steps[step-1].title}</h2>
                <p className="text-gray-500">{steps[step-1].subtitle}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {steps[step-1].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelections({...selections, [steps[step-1].field]: opt.id})}
                    className={`
                      flex flex-col items-center justify-center p-8 rounded-3xl border-4 transition-all duration-200
                      ${selections[steps[step-1].field] === opt.id 
                        ? 'border-primary bg-primary/5 text-primary scale-[1.02]' 
                        : 'border-white bg-white text-gray-400 hover:border-gray-100 shadow-sm'}
                    `}
                  >
                    <opt.icon size={48} strokeWidth={1.5} className="mb-4" />
                    <span className="font-bold">{opt.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-center pt-8">
                <Button 
                  disabled={!selections[steps[step-1].field]}
                  onClick={() => setStep(step + 1)}
                  className="px-12 py-4 text-lg"
                >
                  Continue <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-goal"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-surface-dark mb-3">Set your first goal</h2>
                <p className="text-gray-500">How much CO2 do you want to save every month?</p>
              </div>

              <Card className="p-10 text-center">
                <div className="mb-10">
                  <span className="text-6xl font-black text-primary">{selections.reductionGoal}</span>
                  <span className="text-2xl font-bold text-gray-400 ml-2">kg CO2 / month</span>
                </div>
                
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  step="10"
                  value={selections.reductionGoal}
                  onChange={(e) => setSelections({...selections, reductionGoal: parseInt(e.target.value)})}
                  className="w-full h-4 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4 text-sm font-bold text-gray-400 px-1">
                  <span>10kg</span>
                  <span>100kg</span>
                  <span>200kg</span>
                </div>
              </Card>

              <div className="flex justify-center pt-8">
                <Button onClick={() => setStep(4)} className="px-12 py-4 text-lg">
                  Set Goal <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step-finish"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className="relative bg-white p-8 rounded-full shadow-xl">
                  <CheckCircle2 size={80} className="text-primary" strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-black text-surface-dark mb-3">You're ready!</h2>
                <p className="text-xl text-gray-500 mb-8">
                  Welcome to CarbonSync. You've been assigned the <span className="text-primary font-bold">Seedling</span> level. 
                  Start logging your activities to grow!
                </p>
              </div>

              <Button onClick={handleComplete} className="px-12 py-5 text-xl shadow-lg shadow-primary/30">
                Go to Dashboard
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;

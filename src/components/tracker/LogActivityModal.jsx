import React, { useState, useEffect } from 'react';
import { useCarbon } from '../../contexts/CarbonContext';
import { HIGH_EMISSION_THRESHOLD_KG } from '../../config/constants';
import { carbonFactors } from '../../config/carbonFactors';
import { 
  calcCarCO2, 
  calcFlightCO2, 
  calcBusCO2, 
  calcBikeCO2, 
  calcElectricityCO2, 
  calcHeatingCO2, 
  calcMeatMealCO2, 
  calcVegMealCO2, 
  calcShoppingCO2 
} from '../../utils/carbonCalculator';
import { CheckCircle, ArrowRight, Leaf } from 'lucide-react';
import toast from 'react-hot-toast';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import { CATEGORIES, TYPE_LABELS, TYPE_UNITS } from './constants';

export default function LogActivityModal({ isOpen, onClose }) {
  const { addActivity } = useCarbon();
  
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [amount, setAmount] = useState('');

  // Reset modal state when closed
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setSelectedCategory('');
      setSelectedType('');
      setAmount('');
    }
  }, [isOpen]);

  const calculateCurrentCO2 = () => {
    if (!selectedCategory || !selectedType || !amount) return 0;
    const val = parseFloat(amount);
    if (isNaN(val)) return 0;

    switch (selectedType) {
      case 'car_petrol_km':
      case 'car_diesel_km':
        return calcCarCO2(val);
      case 'flight_km':
        return calcFlightCO2(val);
      case 'bus_km':
      case 'train_km':
        return calcBusCO2(val);
      case 'bike_km':
      case 'walk_km':
        return calcBikeCO2(val);
      case 'electricity_kwh':
        return calcElectricityCO2(val);
      case 'ac_hour':
      case 'gas_cubic_m':
        return calcHeatingCO2(val);
      case 'beef_meal':
      case 'chicken_meal':
      case 'fish_meal':
        return calcMeatMealCO2(val);
      case 'vegetarian_meal':
      case 'vegan_meal':
        return calcVegMealCO2(val);
      case 'clothing_item':
        return calcShoppingCO2(val, 'clothing');
      case 'electronics_item':
        return calcShoppingCO2(val, 'electronics');
      default:
        return calcShoppingCO2(val, 'other');
    }
  };

  const getAlternativeStats = () => {
    const num = parseFloat(amount) || 0;
    const currentCO2 = calculateCurrentCO2();
    if (selectedCategory === 'transport') {
      if (selectedType === 'car_petrol_km' || selectedType === 'car_diesel_km') {
        return {
          alternative: 'taking the bus',
          altCO2: calcBusCO2(num)
        };
      }
      if (selectedType === 'flight_km') {
        return {
          alternative: 'taking a train or carpooling',
          altCO2: calcBusCO2(num)
        };
      }
    }
    if (selectedCategory === 'food' && (selectedType === 'beef_meal' || selectedType === 'chicken_meal' || selectedType === 'fish_meal')) {
      return {
        alternative: 'a vegetarian meal',
        altCO2: calcVegMealCO2(num)
      };
    }
    if (selectedCategory === 'energy') {
      return {
        alternative: 'LED conversion or rooftop solar',
        altCO2: num * 0.2
      };
    }
    if (selectedCategory === 'shopping') {
      if (selectedType === 'electronics_item') {
        return {
          alternative: 'certified refurbished items',
          altCO2: calcShoppingCO2(num, 'clothing')
        };
      }
      if (selectedType === 'clothing_item') {
        return {
          alternative: 'thrifting or organic fabrics',
          altCO2: calcShoppingCO2(num, 'groceries')
        };
      }
    }
    return {
      alternative: 'greener choices',
      altCO2: currentCO2 * 0.5
    };
  };

  const handleLogActivity = async () => {
    try {
      await addActivity({
        category: selectedCategory,
        type: selectedType,
        amount: parseFloat(amount),
        description: `${amount} ${TYPE_UNITS[selectedType]} of ${TYPE_LABELS[selectedType]}`,
        timestamp: new Date(),
        co2: calculateCurrentCO2()
      });
      toast.success('Activity logged successfully! 🌱');
      onClose();
    } catch (error) {
      toast.error('Failed to log activity');
    }
  };

  const projectedCO2 = calculateCurrentCO2();
  const { alternative: suggestedAlternative, altCO2 } = getAlternativeStats();

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Log Carbon Activity"
    >
      <div className="mt-2">
        <div className="flex items-center justify-between mb-8 relative px-2">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full"></div>
          <div 
            className="absolute top-1/2 left-4 h-1 bg-green-500 -z-10 -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `calc(${((step - 1) / 2) * 100}% - 16px)` }}
          ></div>
          
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step > num 
                  ? 'bg-green-500 text-white shadow-md shadow-green-500/30' 
                  : step === num 
                    ? 'bg-green-600 text-white ring-4 ring-green-100' 
                    : 'bg-white border-2 border-gray-200 text-gray-400'
              }`}
            >
              {step > num ? <CheckCircle size={20} /> : num}
            </div>
          ))}
        </div>

        <div className="min-h-[300px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-900">What did you do?</h3>
              <div className="grid grid-cols-2 gap-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setStep(2);
                    }}
                    className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-200 gap-3"
                    style={{ hoverBackgroundColor: `${cat.color}08` }}
                  >
                    <div style={{ color: cat.color, backgroundColor: `${cat.color}15` }} className="p-3.5 rounded-xl transition-transform group-hover:scale-110">
                      <cat.icon size={32} strokeWidth={2} />
                    </div>
                    <span className="font-semibold text-gray-800">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center gap-3 mb-6 relative">
                <button 
                  onClick={() => setStep(1)} 
                  className="p-2 -ml-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight size={20} className="rotate-180" />
                </button>
                <h3 className="text-xl font-bold text-gray-900">Activity Details</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Activity Type</label>
                  <div className="relative">
                    <select 
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 bg-white shadow-sm"
                    >
                      <option value="" disabled>Select a specific activity...</option>
                      {Object.keys(carbonFactors[selectedCategory] || {}).map(typeKey => (
                        <option key={typeKey} value={typeKey}>
                          {TYPE_LABELS[typeKey]}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                
                {selectedType && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Amount ({TYPE_UNITS[selectedType]})
                    </label>
                    <Input 
                      type="number" 
                      min="0"
                      step="any"
                      placeholder={`e.g. 10`}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-lg py-3.5"
                    />
                  </div>
                )}
                
                {projectedCO2 > HIGH_EMISSION_THRESHOLD_KG && (
                  <div className="bg-amber-50 border border-amber-200 
                                  rounded-xl p-3 text-amber-800 text-sm mb-3">
                    ⚠️ This will add ~{projectedCO2.toFixed(1)}kg CO₂. 
                    Consider {suggestedAlternative} instead — it would only add 
                    ~{altCO2.toFixed(1)}kg.
                  </div>
                )}

                <div className="pt-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 h-12 text-base font-semibold shadow-md shadow-green-600/20 transition-all active:scale-[0.98]" 
                    disabled={!selectedType || !amount || parseFloat(amount) <= 0}
                    onClick={() => setStep(3)}
                  >
                    Calculate Impact
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 text-center py-4">
              <div className="flex items-center justify-center mb-8 relative">
                <button 
                  onClick={() => setStep(2)} 
                  className="absolute left-0 p-2 -ml-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight size={20} className="rotate-180" />
                </button>
                <h3 className="text-xl font-bold text-gray-900">Impact Summary</h3>
              </div>
              
              <div className="w-28 h-28 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 ring-8 ring-green-50/50">
                <Leaf size={48} strokeWidth={1.5} />
              </div>
              
              <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">
                {calculateCurrentCO2().toFixed(2)} <span className="text-2xl text-gray-400 font-medium tracking-normal">kg CO₂</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-8 max-w-sm mx-auto border border-gray-100">
                <p className="text-gray-700 text-sm font-medium">
                  {calculateCurrentCO2() > 0 
                    ? `Equivalent to driving a petrol car for ${(calculateCurrentCO2() / 0.21).toFixed(1)} km.`
                    : "Great job! This activity helps offset your carbon footprint."}
                </p>
              </div>
              
              <Button className="w-full bg-gray-900 hover:bg-black text-white h-14 text-lg font-bold shadow-lg shadow-gray-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2" onClick={handleLogActivity}>
                <CheckCircle size={20} />
                Confirm & Log Activity
              </Button>
            </div>
          )}
        </div>
        <p className="text-center text-xs text-gray-500 mt-6 italic font-semibold">
          See it. Decide differently. Track the change.
        </p>
      </div>
    </Modal>
  );
}

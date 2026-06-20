import React, { useState, useMemo } from 'react';
import { useCarbon } from '../contexts/CarbonContext';
import { HIGH_EMISSION_THRESHOLD_KG } from '../config/constants';
import { carbonFactors } from '../config/carbonFactors';
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
} from '../utils/carbonCalculator';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { 
  Car, Zap, Utensils, ShoppingBag, Trash2, Plus, Download, 
  ArrowRight, CheckCircle, Leaf, Activity as ActivityIcon
} from 'lucide-react';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';

const CATEGORIES = [
  { id: 'transport', label: 'Transport', icon: Car, color: '#3B82F6' },
  { id: 'energy', label: 'Energy', icon: Zap, color: '#F59E0B' },
  { id: 'food', label: 'Food', icon: Utensils, color: '#10B981' },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag, color: '#8B5CF6' },
  { id: 'waste', label: 'Waste', icon: Trash2, color: '#14B8A6' },
];

const TYPE_LABELS = {
  car_petrol_km: 'Car (Petrol)',
  car_diesel_km: 'Car (Diesel)',
  bus_km: 'Bus',
  train_km: 'Train',
  flight_km: 'Flight',
  bike_km: 'Bicycle',
  walk_km: 'Walking',
  electricity_kwh: 'Electricity',
  gas_cubic_m: 'Natural Gas',
  ac_hour: 'Air Conditioning',
  beef_meal: 'Beef Meal',
  chicken_meal: 'Chicken Meal',
  vegetarian_meal: 'Vegetarian Meal',
  vegan_meal: 'Vegan Meal',
  fish_meal: 'Fish Meal',
  clothing_item: 'Clothing',
  electronics_item: 'Electronics',
  furniture_item: 'Furniture',
  recycled_kg: 'Recycling',
  landfill_kg: 'Landfill Waste',
  compost_kg: 'Compost'
};

const TYPE_UNITS = {
  car_petrol_km: 'km',
  car_diesel_km: 'km',
  bus_km: 'km',
  train_km: 'km',
  flight_km: 'km',
  bike_km: 'km',
  walk_km: 'km',
  electricity_kwh: 'kWh',
  gas_cubic_m: 'm³',
  ac_hour: 'hours',
  beef_meal: 'meals',
  chicken_meal: 'meals',
  vegetarian_meal: 'meals',
  vegan_meal: 'meals',
  fish_meal: 'meals',
  clothing_item: 'items',
  electronics_item: 'items',
  furniture_item: 'items',
  recycled_kg: 'kg',
  landfill_kg: 'kg',
  compost_kg: 'kg'
};

export default function Tracker() {
  const { activities, addActivity } = useCarbon();
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Modal state
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [amount, setAmount] = useState('');

  // Derived data
  const filteredActivities = useMemo(() => {
    let result = activities || [];
    if (filter !== 'all') {
      result = result.filter(a => a.category === filter);
    }
    // Sort by timestamp desc
    return [...result].sort((a, b) => {
      const dateA = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
      const dateB = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
      return dateB - dateA;
    });
  }, [activities, filter]);

  const pieData = useMemo(() => {
    const totals = {};
    CATEGORIES.forEach(c => totals[c.id] = 0);
    
    (activities || []).forEach(a => {
      const factor = carbonFactors[a.category]?.[a.type] || 0;
      const co2 = factor * a.amount;
      if (totals[a.category] !== undefined && co2 > 0) {
        totals[a.category] += co2;
      }
    });
    
    return CATEGORIES.map(c => ({
      name: c.label,
      value: totals[c.id],
      color: c.color
    })).filter(d => d.value > 0);
  }, [activities]);

  const currentPeriodTotal = pieData.reduce((sum, item) => sum + item.value, 0);

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

  const { alternative: suggestedAlternative, altCO2 } = getAlternativeStats();
  const projectedCO2 = calculateCurrentCO2();

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
      setIsModalOpen(false);
      resetModal();
    } catch (error) {
      toast.error('Failed to log activity');
    }
  };

  const resetModal = () => {
    setStep(1);
    setSelectedCategory('');
    setSelectedType('');
    setAmount('');
  };

  const openModal = () => {
    resetModal();
    setIsModalOpen(true);
  };

  const exportCSV = () => {
    if (!activities || activities.length === 0) {
      toast.error('No activities to export');
      return;
    }
    
    const headers = ['Date', 'Category', 'Type', 'Amount', 'Unit', 'CO2 (kg)', 'Description'];
    const rows = activities.map(a => {
      const date = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
      const factor = carbonFactors[a.category]?.[a.type] || 0;
      const co2 = factor * a.amount;
      return [
        date.toISOString(),
        a.category,
        a.type,
        a.amount,
        TYPE_UNITS[a.type] || '',
        co2.toFixed(2),
        `"${a.description || ''}"`
      ].join(',');
    });
    
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'carbon_activities.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return '';
    const date = dateValue.toDate ? dateValue.toDate() : new Date(dateValue);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Activity Tracker</h1>
          <p className="text-gray-500 mt-1">Log and monitor your daily carbon footprint</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" onClick={exportCSV} className="flex-1 md:flex-none flex items-center justify-center gap-2 border-gray-200">
            <Download size={18} className="text-gray-600" />
            <span className="text-gray-700">Export CSV</span>
          </Button>
          <Button onClick={openModal} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 shadow-md shadow-green-600/20">
            <Plus size={18} />
            <span>Log Activity</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-1 p-8 flex flex-col justify-center items-center text-center shadow-sm border border-gray-100/60 bg-gradient-to-b from-white to-gray-50/50">
          <div className="w-16 h-16 bg-green-100/80 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <Leaf size={32} />
          </div>
          <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-500">Current Period Total</h2>
          <div className="text-6xl font-black text-gray-900 mt-3 tracking-tighter">
            {currentPeriodTotal.toFixed(1)} <span className="text-2xl text-gray-400 font-medium tracking-normal">kg</span>
          </div>
          <p className="text-sm text-gray-400 mt-4">Total emissions tracked</p>
        </Card>

        <Card className="lg:col-span-2 p-6 shadow-sm border border-gray-100/60">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Category Breakdown</h2>
          <div className="h-[280px] w-full">
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value.toFixed(1)} kg`, 'CO₂']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: '12px 16px' }}
                    itemStyle={{ fontWeight: 600, color: '#1f2937' }}
                  />
                  <Legend verticalAlign="middle" layout="vertical" align="right" iconType="circle" wrapperStyle={{ paddingLeft: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <PieChart size={48} className="mb-4 opacity-20" />
                <p>No data to display.</p>
                <button onClick={openModal} className="text-green-600 hover:text-green-700 font-medium mt-2">Log an activity</button>
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="mb-6 flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
        <Button 
          variant={filter === 'all' ? 'primary' : 'outline'} 
          onClick={() => setFilter('all')}
          className={`whitespace-nowrap rounded-full px-5 ${filter === 'all' ? 'bg-gray-900 text-white hover:bg-black shadow-md' : 'text-gray-600 border-gray-200 hover:bg-gray-50'}`}
          size="sm"
        >
          All Activities
        </Button>
        {CATEGORIES.map(cat => {
          const isActive = filter === cat.id;
          return (
            <Button 
              key={cat.id}
              variant={isActive ? 'primary' : 'outline'} 
              onClick={() => setFilter(cat.id)}
              className={`whitespace-nowrap rounded-full px-5 ${isActive ? 'shadow-md shadow-opacity-20' : 'border-gray-200 hover:bg-gray-50'}`}
              style={isActive ? { backgroundColor: cat.color, borderColor: cat.color, color: 'white', boxShadow: `0 4px 14px 0 ${cat.color}40` } : { color: 'var(--tw-text-opacity)' }}
              size="sm"
            >
              <cat.icon size={16} className="mr-2 inline" />
              {cat.label}
            </Button>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/60 overflow-hidden">
        {filteredActivities.length > 0 ? (
          <ul className="divide-y divide-gray-50">
            {filteredActivities.map((activity, i) => {
              const cat = CATEGORIES.find(c => c.id === activity.category) || CATEGORIES[0];
              const Icon = cat.icon;
              const factor = carbonFactors[activity.category]?.[activity.type] || 0;
              const co2 = activity.co2 || (factor * activity.amount);
              
              return (
                <li key={activity.id || i} className="p-4 sm:p-5 hover:bg-gray-50/80 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                        <Icon size={22} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold">{activity.description || TYPE_LABELS[activity.type]}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-md" style={{ backgroundColor: `${cat.color}10`, color: cat.color }}>{cat.label}</span>
                          <span className="text-xs text-gray-400">• {formatDate(activity.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={co2 <= 0 ? "success" : "warning"} className={`font-bold text-sm ${co2 <= 0 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {co2 > 0 ? '+' : ''}{co2.toFixed(1)} kg CO₂
                      </Badge>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="p-16 text-center text-gray-500 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <ActivityIcon size={32} className="text-gray-300" />
            </div>
            <p className="text-lg font-semibold text-gray-900">No activities found</p>
            <p className="mt-1 text-sm max-w-sm mx-auto">You haven't logged any activities in this category yet. Start tracking to see your impact.</p>
          </div>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
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
    </div>
  );
}

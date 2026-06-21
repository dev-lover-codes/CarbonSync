import React, { useState, useMemo } from 'react';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Plus, Download, Leaf, Activity as ActivityIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { CATEGORIES, TYPE_LABELS, TYPE_UNITS } from '../components/tracker/constants';
import { CONTAINER, PAGE_HEADER_CONTAINER, PAGE_HEADER_TITLE, PAGE_HEADER_SUBTITLE } from '../utils/styles';
import LogActivityModal from '../components/tracker/LogActivityModal';

export default function Tracker() {
  const { activities } = useCarbon();
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={CONTAINER}>
      <div className={PAGE_HEADER_CONTAINER}>
        <div>
          <h1 className={PAGE_HEADER_TITLE}>Activity Tracker</h1>
          <p className={PAGE_HEADER_SUBTITLE}>Log and monitor your daily carbon footprint</p>
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

      <LogActivityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

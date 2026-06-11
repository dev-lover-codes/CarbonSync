import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { saveInsight } from '../utils/firestoreHelpers';
import { getWeeklyInsight, getFootprintScore } from '../services/geminiService';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { Sparkles, Lightbulb, Loader2, TrendingUp, Leaf, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';

const GREENS = ['#2D6A4F', '#40916C', '#52B788', '#74C69D', '#95D5B2'];
const INDIAN_ANNUAL_AVERAGE = 1800; // kg/year
const GLOBAL_ANNUAL_AVERAGE = 4000; // kg/year

export default function Insights() {
  const { currentUser, userProfile } = useAuth();
  const { activities, insights, fetchInsights } = useCarbon();
  
  const [range, setRange] = useState('week'); // week | month | quarter
  const [isGenerating, setIsGenerating] = useState(false);
  const [scoreData, setScoreData] = useState({ score: 70, grade: 'B', summary: 'Good job!', topTip: 'Unplug devices.' });
  const [loadingScore, setLoadingScore] = useState(true);

  // Group activities and compute current period vs previous period
  const { 
    currentTotal, 
    prevTotal, 
    categoryBreakdown, 
    dailyChartData 
  } = useMemo(() => {
    const now = new Date();
    let daysToTrack = 7;
    if (range === 'month') daysToTrack = 30;
    if (range === 'quarter') daysToTrack = 90;

    const currentLimit = new Date();
    currentLimit.setDate(now.getDate() - daysToTrack);
    currentLimit.setHours(0,0,0,0);

    const prevLimit = new Date();
    prevLimit.setDate(now.getDate() - daysToTrack * 2);
    prevLimit.setHours(0,0,0,0);

    let curTotal = 0;
    let preTotal = 0;
    const breakdown = { transport: 0, energy: 0, food: 0, shopping: 0, waste: 0 };

    // Grouping by day for the BarChart
    const daysArray = Array.from({ length: daysToTrack }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (daysToTrack - 1 - i));
      d.setHours(0,0,0,0);
      return {
        date: d,
        label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        current: 0,
        previous: 0
      };
    });

    (activities || []).forEach(a => {
      const actDate = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
      const factor = carbonFactors[a.category]?.[a.type] || 0;
      const co2 = factor * a.amount;

      if (actDate >= currentLimit) {
        curTotal += co2;
        if (a.category in breakdown) {
          breakdown[a.category] += co2;
        }
        
        // Find day index
        const dMatch = daysArray.find(d => d.date.toDateString() === actDate.toDateString());
        if (dMatch) dMatch.current += co2;
      } else if (actDate >= prevLimit && actDate < currentLimit) {
        preTotal += co2;
        
        // Match day relative to daysToTrack
        const diffDays = Math.floor((currentLimit - actDate) / (1000 * 60 * 60 * 24));
        const matchedIndex = daysToTrack - 1 - diffDays;
        if (matchedIndex >= 0 && matchedIndex < daysToTrack) {
          daysArray[matchedIndex].previous += co2;
        }
      }
    });

    const pieData = Object.keys(breakdown).map((key, i) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: parseFloat(breakdown[key].toFixed(1)),
      color: GREENS[i % GREENS.length]
    })).filter(item => item.value > 0);

    const barData = daysArray.map(d => ({
      name: d.label,
      "This Period": parseFloat(d.current.toFixed(1)),
      "Previous Period": parseFloat(d.previous.toFixed(1))
    }));

    return { 
      currentTotal: curTotal, 
      prevTotal: preTotal, 
      categoryBreakdown: pieData, 
      dailyChartData: barData 
    };
  }, [activities, range]);

  // Fetch Footprint Score
  useEffect(() => {
    async function fetchScore() {
      if (!activities) return;
      setLoadingScore(true);
      try {
        const score = await getFootprintScore(activities);
        setScoreData(score);
      } catch (err) {
      } finally {
        setLoadingScore(false);
      }
    }
    fetchScore();
  }, [activities]);

  const latestInsight = insights && insights.length > 0 ? insights[0] : null;

  // Generate Weekly Insight using Gemini
  const generateInsight = async () => {
    if (!currentUser) return;
    setIsGenerating(true);
    
    try {
      const res = await getWeeklyInsight(dailyChartData, prevTotal);
      
      await saveInsight(currentUser.uid, {
        report: res.insight,
        weeklyTotal: currentTotal,
        trend: res.trend,
        highlight: res.highlight
      });
      
      await fetchInsights();
      toast.success('AI Report generated successfully! 📊');
    } catch (error) {
      toast.error('Failed to generate AI report.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Top 3 impact areas sorting
  const topImpactAreas = useMemo(() => {
    const totals = { transport: 0, energy: 0, food: 0, shopping: 0, waste: 0 };
    (activities || []).forEach(a => {
      const factor = carbonFactors[a.category]?.[a.type] || 0;
      totals[a.category] += factor * a.amount;
    });

    const sorted = Object.keys(totals).map(key => ({
      category: key,
      co2: totals[key]
    })).sort((a, b) => b.co2 - a.co2);

    const tips = {
      transport: "Try replacing solo car trips with public transport, carpools, or cycling.",
      energy: "Turn off standby appliances at the wall socket and switch to LED bulbs.",
      food: "Switching to vegetarian or vegan meals twice a week reduces food footprint significantly.",
      shopping: "Consolidate purchases and avoid fast-fashion products.",
      waste: "Practice strict segregation of recyclables and compost wet waste."
    };

    return sorted.slice(0, 3).map(item => ({
      category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
      co2: item.co2,
      tip: tips[item.category]
    }));
  }, [activities]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Data & Insights</h1>
          <p className="text-gray-500 mt-1">AI-powered tracking and analytics dashboard</p>
        </div>
        <Button 
          onClick={generateInsight} 
          disabled={isGenerating}
          className="bg-green-700 hover:bg-green-800 flex items-center gap-2 shadow-md shadow-green-700/20"
        >
          {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
          {isGenerating ? 'Analyzing Data...' : 'Generate AI Report'}
        </Button>
      </div>

      {/* Date Range Tabs */}
      <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setRange('week')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            range === 'week' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-green-700'
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => setRange('month')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            range === 'month' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-green-700'
          }`}
        >
          This Month
        </button>
        <button
          onClick={() => setRange('quarter')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            range === 'quarter' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-green-700'
          }`}
        >
          Last 3 Months
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Score Card with Conic Ring */}
        <Card className="p-6 shadow-sm border border-gray-100/60 flex flex-col items-center text-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-6 w-full text-left">Your Eco Score</h2>
          {loadingScore ? (
            <div className="h-40 flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-green-700" />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F3F4F6" strokeWidth="2.5" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2D6A4F" strokeWidth="3" strokeDasharray={`${scoreData.score}, 100`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-gray-900">{scoreData.score}</span>
                  <span className="text-sm font-bold text-green-700">Grade: {scoreData.grade}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-6 leading-relaxed px-4">{scoreData.summary}</p>
              
              {/* Benchmarks */}
              <div className="w-full space-y-3 pt-4 border-t border-gray-100 text-left">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                    <span>vs Indian Average</span>
                    <span>{((currentTotal / (INDIAN_ANNUAL_AVERAGE / 12)) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${Math.min((currentTotal / (INDIAN_ANNUAL_AVERAGE / 12)) * 100, 100)}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                    <span>vs Global Average</span>
                    <span>{((currentTotal / (GLOBAL_ANNUAL_AVERAGE / 12)) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#52B788]" style={{ width: `${Math.min((currentTotal / (GLOBAL_ANNUAL_AVERAGE / 12)) * 100, 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* AI Weekly Analysis */}
        <Card className="lg:col-span-2 p-6 border border-green-100 bg-gradient-to-b from-green-50/50 to-white shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 bg-green-100 text-green-700 rounded-lg">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">AI Analysis</h2>
          </div>
          
          <div className="relative z-10 space-y-4">
            {latestInsight ? (
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-medium">
                <p>{latestInsight.report}</p>
                {latestInsight.highlight && (
                  <div className="text-xs font-bold text-green-700 bg-green-100/60 px-3 py-1.5 rounded-full inline-block">
                    Highlight: {latestInsight.highlight}
                  </div>
                )}
                <div className="pt-4 border-t border-green-100 flex items-center text-xs text-gray-400 gap-1.5 font-bold">
                  <CheckCircle2 size={14} className="text-green-600" />
                  Report Trend: {latestInsight.trend || 'steady'}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 opacity-70">
                <Sparkles size={32} className="mx-auto text-green-300 mb-3" />
                <p className="text-gray-500">No report generated yet.<br/>Click the **Generate AI Report** button to analyze your history.</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Pie Category Distribution */}
        <Card className="p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Emissions by Category</h2>
          <div className="h-[280px] w-full flex items-center justify-center">
            {categoryBreakdown.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={105}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {categoryBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value.toFixed(1)} kg`, 'CO₂']} />
                  <Legend verticalAlign="middle" align="right" layout="vertical" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center text-gray-400 text-sm py-10">No activities logged in this range.</div>
            )}
          </div>
        </Card>

        {/* Current vs Previous Period BarChart */}
        <Card className="p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Current vs. Previous Period</h2>
          <div className="h-[280px] w-full">
            {currentTotal > 0 || prevTotal > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="This Period" fill="#2D6A4F" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Previous Period" fill="#95D5B2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center text-gray-400 text-sm py-10">No data to display.</div>
            )}
          </div>
        </Card>
      </div>

      {/* Top 3 Impact Areas */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Top 3 Impact Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topImpactAreas.length > 0 ? (
          topImpactAreas.map((area, idx) => (
            <Card key={idx} className="p-5 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded-full mb-3 inline-block">
                  Rank #{idx + 1}
                </span>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{area.category}</h4>
                <p className="text-2xl font-black text-gray-900 mb-3">{area.co2.toFixed(1)} <span className="text-xs text-gray-400 font-medium">kg CO₂</span></p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{area.tip}</p>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-3 py-10 text-center text-gray-400 text-sm bg-white rounded-xl border border-gray-100">
            Log activities to analyze your primary impact zones.
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { saveInsight } from '../utils/firestoreHelpers';
import { getWeeklyInsight, getFootprintScore } from '../services/geminiService';
import Card from '../components/ui/Card';
import toast from 'react-hot-toast';
import { CONTAINER, PAGE_HEADER_CONTAINER, PAGE_HEADER_TITLE, PAGE_HEADER_SUBTITLE } from '../utils/styles';
import EcoScoreCard from '../components/insights/EcoScoreCard';
import AIAnalysisCard from '../components/insights/AIAnalysisCard';
import InsightsCharts from '../components/insights/InsightsCharts';

const GREENS = ['#2D6A4F', '#40916C', '#52B788', '#74C69D', '#95D5B2'];

export default function Insights() {
  const { currentUser } = useAuth();
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
      } catch {
        // Silently ignore score fetch failures; UI handles null score state
      } finally {
        setLoadingScore(false);
      }
    }
    fetchScore();
  }, [activities]);

  const latestInsight = insights && insights.length > 0 ? insights[0] : null;

  // Generate Weekly Insight using Gemini
  const generateInsight = useCallback(async () => {
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
  }, [currentUser, dailyChartData, prevTotal, currentTotal, fetchInsights]);

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
    <div className={CONTAINER}>
      {/* Header */}
      <div className={PAGE_HEADER_CONTAINER}>
        <div>
          <h1 className={PAGE_HEADER_TITLE}>Data & Insights</h1>
          <p className={PAGE_HEADER_SUBTITLE}>AI-powered tracking and analytics dashboard</p>
        </div>
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
        <EcoScoreCard 
          loadingScore={loadingScore} 
          scoreData={scoreData} 
          currentTotal={currentTotal} 
        />

        <AIAnalysisCard 
          latestInsight={latestInsight} 
          isGenerating={isGenerating} 
          onGenerate={generateInsight} 
        />
      </div>

      <InsightsCharts 
        categoryBreakdown={categoryBreakdown} 
        dailyChartData={dailyChartData} 
        currentTotal={currentTotal} 
        prevTotal={prevTotal} 
      />

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

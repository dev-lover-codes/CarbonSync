import React, { useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { saveInsight } from '../lib/firestore';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { Sparkles, Plane, Users, TrendingUp, Loader2, Lightbulb, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';

const NATIONAL_AVG = {
  transport: 40,
  energy: 30,
  food: 50,
  shopping: 20,
  waste: 10
};

export default function Insights() {
  const { currentUser } = useAuth();
  const { activities, insights, fetchInsights, weeklyTotal } = useCarbon();
  const [isGenerating, setIsGenerating] = useState(false);

  // Derived data for 30-day Line Chart
  const lineChartData = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const data = [];
    
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      
      const dayActivities = (activities || []).filter(a => {
        const actDate = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
        return actDate.getDate() === d.getDate() && actDate.getMonth() === d.getMonth();
      });

      const dayTotal = dayActivities.reduce((sum, a) => {
        const factor = carbonFactors[a.category]?.[a.type] || 0;
        return sum + (factor * a.amount);
      }, 0);

      data.push({
        dateStr: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        co2: parseFloat(dayTotal.toFixed(1))
      });
    }
    return data;
  }, [activities]);

  // Derived data for Category Radar Chart vs National Average
  const radarData = useMemo(() => {
    const categoryTotals = { transport: 0, energy: 0, food: 0, shopping: 0, waste: 0 };
    
    // Use last 30 days for radar to compare fairly
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    (activities || []).forEach(a => {
      const actDate = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
      if (actDate >= thirtyDaysAgo) {
        const factor = carbonFactors[a.category]?.[a.type] || 0;
        if (a.category in categoryTotals) {
          categoryTotals[a.category] += (factor * a.amount);
        }
      }
    });

    return Object.keys(categoryTotals).map(key => ({
      subject: key.charAt(0).toUpperCase() + key.slice(1),
      user: parseFloat(categoryTotals[key].toFixed(1)),
      average: NATIONAL_AVG[key],
      fullMark: Math.max(categoryTotals[key], NATIONAL_AVG[key]) * 1.2
    }));
  }, [activities]);

  const latestInsight = insights && insights.length > 0 ? insights[0] : null;

  const generateInsight = async () => {
    if (!currentUser) return;
    setIsGenerating(true);
    
    try {
      const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;
      if (!apiKey) throw new Error("Missing Anthropic API Key");

      const systemPrompt = `You are a Carbon Analyst. Analyze the user's last 7 days of emissions.
Weekly CO2: ${weeklyTotal.toFixed(1)}kg.
Respond strictly in 3 short paragraphs:
1. What they did well.
2. What to improve.
3. A surprising fact about their primary emission source.`;

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
          max_tokens: 500,
          system: systemPrompt,
          messages: [{ role: 'user', content: 'Generate my weekly insight report.' }]
        })
      });

      if (!res.ok) throw new Error("Failed to generate insight");
      
      const data = await res.json();
      const reportText = data.content[0].text;
      
      await saveInsight(currentUser.uid, {
        report: reportText,
        weeklyTotal: weeklyTotal
      });
      
      await fetchInsights();
      toast.success('New insight generated! 📊');
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Failed to generate insight.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Data & Insights</h1>
          <p className="text-gray-500 mt-1">Deep dive into your environmental impact trends</p>
        </div>
        <Button 
          onClick={generateInsight} 
          disabled={isGenerating}
          className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2 shadow-md shadow-purple-600/20"
        >
          {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
          {isGenerating ? 'Analyzing Data...' : 'Generate AI Report'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Weekly Report Card */}
        <Card className="lg:col-span-1 p-6 border border-purple-100 bg-gradient-to-b from-purple-50/50 to-white shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">AI Weekly Report</h2>
          </div>
          
          <div className="relative z-10">
            {latestInsight ? (
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                {latestInsight.report.split('\n\n').map((paragraph, i) => (
                  <p key={i} className={i === 0 ? "font-medium text-gray-900" : ""}>{paragraph}</p>
                ))}
                <div className="mt-4 pt-4 border-t border-purple-100 flex items-center text-xs text-gray-500 gap-1">
                  <CheckCircle2 size={14} className="text-purple-500" />
                  Generated on {latestInsight.timestamp?.toDate ? latestInsight.timestamp.toDate().toLocaleDateString() : 'recently'}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 opacity-70">
                <Sparkles size={32} className="mx-auto text-purple-300 mb-3" />
                <p>No insights generated yet.<br/>Click the button above to analyze your data.</p>
              </div>
            )}
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        </Card>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Fun Equivalent 1 */}
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md relative overflow-hidden border-none">
            <Plane size={100} className="absolute -right-6 -bottom-6 text-white opacity-10 transform -rotate-12" />
            <h3 className="text-blue-100 font-medium mb-1 relative z-10">Equivalent To</h3>
            <div className="text-3xl font-black mb-2 relative z-10">
              {((weeklyTotal * 52) / 85).toFixed(1)} Flights
            </div>
            <p className="text-sm text-blue-50 relative z-10">
              Your projected yearly footprint is equal to flying Delhi ↔ Mumbai {((weeklyTotal * 52) / 85).toFixed(1)} times. (85kg CO₂ per flight)
            </p>
          </Card>

          {/* Fun Equivalent 2 */}
          <Card className="p-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-md relative overflow-hidden border-none">
            <Users size={100} className="absolute -right-4 -bottom-4 text-white opacity-10" />
            <h3 className="text-teal-100 font-medium mb-1 relative z-10">Versus Average</h3>
            <div className="text-3xl font-black mb-2 relative z-10">
              {(((weeklyTotal * 52) / 1900) * 100).toFixed(0)}%
            </div>
            <p className="text-sm text-teal-50 relative z-10">
              Your projected footprint is {(((weeklyTotal * 52) / 1900) * 100).toFixed(0)}% of the average Indian citizen (1,900kg CO₂ / year).
            </p>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* 30-Day Trend */}
        <Card className="p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">30-Day Trend</h2>
            <div className="flex items-center gap-1 text-sm text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-md">
              <TrendingUp size={16} /> Daily Log
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="dateStr" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} minTickGap={30} />
                <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#374151', marginBottom: '4px' }}
                />
                <Line type="monotone" dataKey="co2" name="CO₂ (kg)" stroke="#10b981" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Radar Comparison */}
        <Card className="p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="mb-2">
            <h2 className="text-lg font-bold text-gray-900">Your Pattern vs. Average</h2>
            <p className="text-sm text-gray-500">Last 30 days distribution compared to national benchmarks</p>
          </div>
          <div className="h-[300px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} tick={false} axisLine={false} />
                <Radar name="You" dataKey="user" stroke="#3b82f6" strokeWidth={2} fill="#3b82f6" fillOpacity={0.4} />
                <Radar name="Avg" dataKey="average" stroke="#9ca3af" strokeWidth={2} strokeDasharray="4 4" fill="#9ca3af" fillOpacity={0.1} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600"><div className="w-3 h-3 rounded-full bg-blue-500 opacity-60"></div> You</div>
            <div className="flex items-center gap-2 text-sm text-gray-600"><div className="w-3 h-3 rounded-full bg-gray-400 opacity-30 border border-gray-400 border-dashed"></div> National Avg</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

import React, { useMemo, useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { carbonFactors } from '../config/carbonFactors';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';
import { 
  Plus, MessageSquare, TrendingDown, TrendingUp, Flame, Award, 
  Target, ArrowRight, Lightbulb, Zap, Leaf, Car, Sparkles
} from 'lucide-react';
import { getDailyTip } from '../services/geminiService';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';

const TIPS = [
  { id: 1, title: 'Unplug Standby Devices', desc: 'Phantom energy can account for up to 10% of home electricity use.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-100' },
  { id: 2, title: 'Meatless Mondays', desc: 'Skipping meat one day a week saves roughly 3.5kg of CO₂.', icon: Leaf, color: 'text-green-500', bg: 'bg-green-100' },
  { id: 3, title: 'Cold Water Wash', desc: 'Washing clothes in cold water saves up to 90% of the energy used by a washing machine.', icon: Lightbulb, color: 'text-blue-500', bg: 'bg-blue-100' }
];

const CATEGORY_COLORS = {
  transport: '#3B82F6', // blue
  energy: '#F59E0B',    // amber
  food: '#10B981',      // green
  shopping: '#8B5CF6',  // purple
  waste: '#14B8A6'      // teal
};

export default function Dashboard() {
  const { userProfile } = useAuth();
  const { user, fetchUserStats, subscribeToLogs, userStats, isLoading, error } = useStore();
  const { activities, goals, weeklyTotal } = useCarbon();
  const navigate = useNavigate();

  const [dailyTip, setDailyTip] = useState(null);
  const [loadingTip, setLoadingTip] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;
    
    // Fetch initial stats
    fetchUserStats(user.uid);
    
    // Subscribe to real-time log updates
    const unsubscribe = subscribeToLogs(user.uid);
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [user?.uid]);

  useEffect(() => {
    async function fetchTip() {
      if (!userProfile) return;
      setLoadingTip(true);
      try {
        const today = new Date();
        today.setHours(0,0,0,0);
        const todayActs = (activities || []).filter(a => {
          const d = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
          return d.getTime() >= today.getTime();
        });
        const res = await getDailyTip(userProfile, todayActs);
        setDailyTip(res);
      } catch {
        // Silently ignore tip fetch failures; UI handles null tip state
      } finally {
        setLoadingTip(false);
      }
    }
    fetchTip();
  }, [userProfile, activities]);

  // Process data for charts
  const { todayTotal, weeklyData, sparklineData } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Group by last 7 days
    const last7Days = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      d.setHours(0, 0, 0, 0);
      return {
        date: d,
        dayStr: d.toLocaleDateString(undefined, { weekday: 'short' }),
        transport: 0,
        energy: 0,
        food: 0,
        shopping: 0,
        waste: 0,
        total: 0
      };
    });

    let todayCO2 = 0;

    (activities || []).forEach(a => {
      const date = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
      const actDate = new Date(date);
      actDate.setHours(0, 0, 0, 0);
      
      const factor = carbonFactors[a.category]?.[a.type] || 0;
      const co2 = factor * a.amount;
      
      if (co2 === 0) return;

      if (actDate.getTime() === today.getTime()) {
        todayCO2 += co2;
      }

      const dayMatch = last7Days.find(d => d.date.getTime() === actDate.getTime());
      if (dayMatch && a.category in dayMatch) {
        dayMatch[a.category] += co2;
        dayMatch.total += co2;
      }
    });

    const sparkData = last7Days.map(d => ({ value: d.total }));

    return { todayTotal: todayCO2, weeklyData: last7Days, sparklineData: sparkData };
  }, [activities]);

  const activeGoals = (goals || []).filter(g => g.status !== 'completed').slice(0, 3);
  const recentActivities = [...(activities || [])]
    .sort((a, b) => {
      const dA = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
      const dB = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
      return dB - dA;
    })
    .slice(0, 5);

  // Greeting based on time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const name = userProfile?.name?.split(' ')[0] || 'Eco Warrior';

  // Gauge calculation (assuming 15kg is daily budget)
  const dailyBudget = 15;
  const percentage = Math.min((todayTotal / dailyBudget) * 100, 100);
  const gaugeColor = percentage < 60 ? '#10B981' : percentage < 90 ? '#F59E0B' : '#EF4444';
  const strokeDasharray = `${percentage}, 100`;

  const formatDate = (dateValue) => {
    if (!dateValue) return '';
    const date = dateValue.toDate ? dateValue.toDate() : new Date(dateValue);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-emerald-400 text-sm tracking-widest animate-pulse">
        LOADING YOUR CARBON DATA...
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-400 text-sm">
        Error loading data. Please refresh.
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hero Section */}
        <div className="md:col-span-3 bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400 opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-black mb-2 tracking-tight">{greeting}, {name} 🌱</h1>
              <p className="text-green-100 text-lg mb-8 max-w-xl">
                You are making a difference. Small actions compound into massive environmental impact. Keep up the great work!
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/tracker')} className="bg-white text-green-900 hover:bg-gray-50 shadow-lg font-bold border-none">
                  <Plus size={18} className="mr-2" /> Log Activity
                </Button>
                <Button variant="outline" className="border-green-400/30 bg-green-800/30 text-white hover:bg-green-700/50 backdrop-blur-sm hidden sm:flex">
                  <MessageSquare size={18} className="mr-2" /> Ask AI Coach
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-green-50 font-medium mb-4 tracking-wide uppercase text-sm">Today's Impact</h3>
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path
                    className="text-white/20"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    style={{ stroke: gaugeColor, transition: 'stroke-dasharray 1s ease-out' }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black">{todayTotal.toFixed(1)}</span>
                  <span className="text-xs font-medium text-green-100">kg CO₂</span>
                </div>
              </div>
              <div className="mt-4 text-sm font-medium">
                {percentage < 100 ? (
                  <span className="text-green-300">{(dailyBudget - todayTotal).toFixed(1)}kg remaining</span>
                ) : (
                  <span className="text-red-300">Over daily budget</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">TODAY</h3>
              <div className={`p-1.5 rounded-lg ${userStats?.dailyFootprint < dailyBudget ? 'bg-primary/20 text-primary-light' : 'bg-red-500/20 text-red-400'}`}>
                {userStats?.dailyFootprint < dailyBudget ? <TrendingDown size={18} /> : <TrendingUp size={18} />}
              </div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight">
              {(userStats?.dailyFootprint || 0).toFixed(1)} <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">kg</span>
            </div>
            <span className="text-xs text-emerald-400 mt-1 block">
              ≈ {Math.round((userStats?.dailyFootprint || 0) * 4.3)} smartphones fully charged
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">WEEKLY</h3>
              <div className="w-16 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklineData}>
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight">
              {(userStats?.weeklyFootprint?.reduce((a,b)=>a+b,0) || 0).toFixed(1)} <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">kg</span>
            </div>
            <span className="text-xs text-emerald-400 mt-1 block">
              ≈ {Math.round((userStats?.weeklyFootprint?.reduce((a,b)=>a+b,0) || 0) * 4.3)} smartphones fully charged
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">SAVED</h3>
              <div className="p-1.5 rounded-lg bg-primary/20 text-primary-light">
                <Award size={18} />
              </div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight">
              {(userStats?.totalSaved || 0).toFixed(1)} <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">kg</span>
            </div>
            <span className="text-xs text-emerald-400 mt-1 block">
              ≈ {Math.round((userStats?.totalSaved || 0) * 4.3)} smartphones fully charged
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">STREAK</h3>
              <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
                <Flame size={18} />
              </div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight">
              {userStats?.streak || 0} <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">days</span>
            </div>
          </div>
        </div>

        {/* Main Content Bento Box Grid */}
        <Card className="md:col-span-2 p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Weekly Emissions</h2>
            <Badge variant="neutral" className="bg-gray-100 text-gray-600">Last 7 Days</Badge>
          </div>
          <div className="flex-1 min-h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="dayStr" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="transport" stackId="a" fill={CATEGORY_COLORS.transport} radius={[0, 0, 4, 4]} />
                <Bar dataKey="energy" stackId="a" fill={CATEGORY_COLORS.energy} />
                <Bar dataKey="food" stackId="a" fill={CATEGORY_COLORS.food} />
                <Bar dataKey="shopping" stackId="a" fill={CATEGORY_COLORS.shopping} />
                <Bar dataKey="waste" stackId="a" fill={CATEGORY_COLORS.waste} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="md:col-span-1 p-6 shadow-sm border border-gray-100 bg-gradient-to-b from-blue-50/50 to-white flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Active Goals</h2>
            <Target size={20} className="text-blue-500" />
          </div>
          
          {activeGoals.length > 0 ? (
            <div className="space-y-6 flex-1">
              {activeGoals.map(goal => {
                const progress = Math.min((goal.current / goal.target) * 100, 100);
                return (
                  <div key={goal.id}>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{goal.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{goal.current} / {goal.target} {goal.unit}</p>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">{Math.round(progress)}%</span>
                    </div>
                    <ProgressBar progress={progress} color="bg-blue-500" className="h-2" />
                  </div>
                );
              })}
              <Button variant="outline" className="w-full text-sm mt-4 border-gray-200">View All Goals</Button>
            </div>
          ) : (
            <div className="text-center py-6 flex-1 flex flex-col justify-center">
              <Target size={32} className="mx-auto text-gray-300 mb-3" />
              <p className="text-sm text-gray-500">No active goals set.</p>
              <Button variant="outline" className="mt-4 w-full" size="sm">Set a Goal</Button>
            </div>
          )}
        </Card>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold text-white">This Week's CO₂ Profile</h2>
              <p className="text-xs text-gray-400 mt-0.5">Daily emission trend over the last 7 days</p>
            </div>
            <Badge variant="neutral" className="bg-primary/10 text-primary font-semibold">7-Day Trend</Badge>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={weeklyData} margin={{ top: 8, right: 16, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="co2ProfileGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis
                  dataKey="dayStr"
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                  axisLine={{ stroke: '#ffffff10' }}
                  tickLine={false}
                  dy={8}
                />
                <YAxis
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                  axisLine={{ stroke: '#ffffff10' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    background: '#0d2417',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#9ca3af' }}
                  formatter={(value) => [`${value.toFixed(2)} kg`, 'Total CO₂']}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981', stroke: '#10b981', strokeWidth: 1, r: 3 }}
                  activeDot={{ fill: '#10b981', stroke: '#fff', strokeWidth: 2, r: 5 }}
                  fill="url(#co2ProfileGradient)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <Card className="md:col-span-1 p-6 shadow-sm border border-green-200 bg-green-50/50 overflow-hidden relative animate-in fade-in duration-300 flex flex-col">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-50"></div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-green-600 animate-pulse" />
            AI Coach Insight
          </h2>
          <div className="flex-1 flex flex-col justify-center relative z-10">
            {loadingTip ? (
              <div className="h-12 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                  {dailyTip?.tip || "Unplug standby devices to save electricity emissions today."}
                </p>
                {dailyTip?.impactKg > 0 && (
                  <div className="mb-4 text-xs font-bold text-green-700 bg-green-100/60 inline-block self-start px-2.5 py-1 rounded-full">
                    Estimated savings: {dailyTip.impactKg} kg CO₂
                  </div>
                )}
              </>
            )}
          </div>
          <Button onClick={() => navigate('/coach')} className="w-full bg-green-600 hover:bg-green-700 relative z-10 flex items-center justify-center gap-2 mt-auto">
            <MessageSquare size={16} /> Chat with Coach
          </Button>
        </Card>

        <Card className="md:col-span-2 p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activities</h2>
            <Link to="/tracker" className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="flex-1">
            {recentActivities.length > 0 ? (
              <div className="space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={activity.id || idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
                        {activity.category === 'transport' ? <Car size={18} /> : 
                         activity.category === 'food' ? <Leaf size={18} /> : <Zap size={18} />}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{activity.description || 'Logged Activity'}</p>
                        <p className="text-xs text-gray-500">{formatDate(activity.timestamp)}</p>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-gray-700">
                      {activity.co2?.toFixed(1)} kg
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No recent activities.</p>
                <Button onClick={() => navigate('/tracker')} variant="outline" className="mt-4" size="sm">Log your first activity</Button>
              </div>
            )}
          </div>
        </Card>

        <Card className="md:col-span-1 p-6 shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">Tips of the Day</h3>
          <div className="space-y-4 flex-1">
            {TIPS.map(tip => (
              <div key={tip.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tip.bg} ${tip.color}`}>
                  <tip.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{tip.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
}

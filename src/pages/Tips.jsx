import React, { useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { tips as staticTips } from '../data/tips';
import { Sparkles, Search, Loader2, BookmarkPlus, Bookmark } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import PageHeader from '../components/layout/PageHeader';
import toast from 'react-hot-toast';

export default function Tips() {
  const { userProfile, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'saved'
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('impact'); // 'impact' or 'co2'

  // AI Generator state
  const [lifestyle, setLifestyle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiTips, setAiTips] = useState([]);

  const savedTipIds = userProfile?.savedTips || [];

  const handleToggleSave = async (tipId) => {
    try {
      let newSaved;
      if (savedTipIds.includes(tipId)) {
        newSaved = savedTipIds.filter(id => id !== tipId);
        toast.success('Removed from saved tips');
      } else {
        newSaved = [...savedTipIds, tipId];
        toast.success('Tip saved to profile!');
      }
      await updateProfile({ savedTips: newSaved });
    } catch (error) {
      toast.error('Failed to update saved tips');
    }
  };

  const generateAITips = async () => {
    if (!lifestyle.trim()) return;
    setIsGenerating(true);
    setAiTips([]);
    try {
      const prompt = `Based on the following user lifestyle description: "${lifestyle}", suggest exactly 5 highly specific and customized carbon reduction tips.
Format as a JSON array of objects with keys: "id" (generate unique string starting with "ai-"), "category" ("transport", "energy", "food", "shopping", "waste"), "title", "description", "impact" ("High", "Medium", "Low"), "co2Saved" (estimated kg/month as a number), "emoji".
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
      if (match) {
        setAiTips(JSON.parse(match[0]));
        toast.success('Generated custom tips for you! 🌟');
      }
    } catch (error) {
      toast.error('Failed to generate AI tips.');
    } finally {
      setIsGenerating(false);
    }
  };


  const allTips = [...staticTips, ...aiTips];

  const filteredTips = useMemo(() => {
    let result = allTips;

    if (activeTab === 'saved') {
      result = result.filter(t => savedTipIds.includes(t.id));
    }

    if (filter !== 'all') {
      result = result.filter(t => t.category === filter);
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(t => t.title.toLowerCase().includes(s) || t.description.toLowerCase().includes(s));
    }

    return result.sort((a, b) => {
      if (sortBy === 'co2') return b.co2Saved - a.co2Saved;
      
      const impactScore = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return (impactScore[b.impact] || 0) - (impactScore[a.impact] || 0);
    });
  }, [allTips, filter, search, sortBy, activeTab, savedTipIds]);

  const categories = ['all', 'transport', 'energy', 'food', 'shopping', 'waste'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <PageHeader 
        title="Eco-Tips" 
        subtitle="Discover actionable ways to reduce your environmental impact." 
      />

      <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-100 shadow-sm">
        <div className="flex items-start gap-4 flex-col md:flex-row">
          <div className="flex-1 w-full">
            <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Sparkles className="text-green-500" /> AI-Powered Tips Generator
            </h2>
            <p className="text-sm text-gray-600 mb-4">Tell us about your routine, and Claude will generate personalized tips just for you.</p>
            <textarea
              className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
              rows={3}
              placeholder="e.g. I drive 20km to work daily, eat chicken 3 times a week, and leave my AC on all night..."
              value={lifestyle}
              onChange={e => setLifestyle(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-auto w-full md:w-auto">
            <Button onClick={generateAITips} disabled={isGenerating || !lifestyle.trim()} className="w-full md:w-auto bg-green-600 hover:bg-green-700">
              {isGenerating ? <Loader2 className="animate-spin mr-2" size={18} /> : <Sparkles className="mr-2" size={18} />}
              Generate Tips
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex p-1 bg-gray-100 rounded-lg">
          <button 
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('all')}
          >
            Explore
          </button>
          <button 
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'saved' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved ({savedTipIds.length})
          </button>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <Input 
              className="pl-9 py-2 text-sm" 
              placeholder="Search tips..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select 
            className="border border-gray-300 rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-green-500 outline-none"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="impact">Sort by Impact</option>
            <option value="co2">Sort by CO₂ Saved</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`capitalize whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              filter === cat ? 'bg-gray-900 text-white border-gray-900 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTips.map(tip => {
          const isSaved = savedTipIds.includes(tip.id);
          const isAI = tip.id.startsWith('ai-');
          
          return (
            <Card key={tip.id} className={`p-6 flex flex-col border ${isAI ? 'border-purple-200 bg-purple-50/10' : 'border-gray-100 hover:border-green-200'} transition-colors group relative`}>
              {isAI && <Badge variant="neutral" className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-[10px]">AI Generated</Badge>}
              
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm">
                {tip.emoji}
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 leading-snug pr-12">{tip.title}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-1">{tip.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  <Badge variant={tip.impact === 'High' ? 'success' : tip.impact === 'Medium' ? 'warning' : 'neutral'}>
                    {tip.impact} Impact
                  </Badge>
                  <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                    -{tip.co2Saved} kg/mo
                  </span>
                </div>
                
                <button 
                  onClick={() => handleToggleSave(tip.id)}
                  className={`p-2 rounded-lg transition-colors ${isSaved ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-900'}`}
                  aria-label={isSaved ? "Unsave tip" : "Save tip"}
                >
                  {isSaved ? <Bookmark fill="currentColor" size={20} /> : <BookmarkPlus size={20} />}
                </button>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">🍃</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">No tips found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
}
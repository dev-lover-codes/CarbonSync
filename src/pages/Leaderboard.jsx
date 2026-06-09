import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getLeaderboard } from '../lib/firestore';
import { Trophy, Share2, Medal, Target, Leaf, Loader2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import toast from 'react-hot-toast';

export default function Leaderboard() {
  const { currentUser, userProfile } = useAuth();
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const data = await getLeaderboard();
        setLeaders(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard", error);
        toast.error("Could not load leaderboard");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  const userRankIndex = leaders.findIndex(l => l.id === currentUser?.uid);
  const userRank = userRankIndex !== -1 ? userRankIndex + 1 : '> 10';
  
  const kgNeededForNextRank = useMemo(() => {
    if (userRankIndex > 0) {
      return (leaders[userRankIndex - 1].totalSaved - (userProfile?.totalSaved || 0)).toFixed(1);
    }
    return 0;
  }, [leaders, userRankIndex, userProfile]);

  const handleShare = () => {
    const text = `I'm rank #${userRank} on CarbonSync! 🌱 Join me in reducing our carbon footprint.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast.success('Share link copied to clipboard! 📋');
    } else {
      toast.error('Clipboard access not available');
    }
  };

  const getMedalColor = (index) => {
    if (index === 0) return 'text-yellow-500 bg-yellow-100'; // Gold
    if (index === 1) return 'text-gray-400 bg-gray-100';   // Silver
    if (index === 2) return 'text-amber-600 bg-amber-100'; // Bronze
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
          <Trophy size={32} />
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Community Leaderboard</h1>
        <p className="text-gray-500 mt-2 max-w-lg mx-auto">Compete with friends and the global community to maximize your environmental impact.</p>
      </div>

      {/* Rank Summary Card */}
      <Card className="p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white border-none shadow-xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <Leaf size={120} className="absolute -left-6 -bottom-6 text-white opacity-5" />
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Rank</span>
            <span className="text-3xl font-black text-white">#{userRank}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">{userProfile?.name || 'You'}</h2>
            <p className="text-gray-400 mt-1">
              <span className="text-white font-bold">{(userProfile?.totalSaved || 0).toFixed(1)}</span> kg CO₂ saved
            </p>
            {userRankIndex > 0 && (
              <p className="text-sm text-green-400 mt-2 flex items-center gap-1.5 font-medium">
                <Target size={14} />
                {kgNeededForNextRank} kg needed for rank #{userRankIndex}
              </p>
            )}
            {userRankIndex === 0 && (
              <p className="text-sm text-yellow-400 mt-2 flex items-center gap-1.5 font-medium">
                <Medal size={14} /> You are the top eco-warrior!
              </p>
            )}
          </div>
        </div>
        
        <Button onClick={handleShare} className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 flex items-center justify-center gap-2 font-bold z-10">
          <Share2 size={18} />
          Share Rank
        </Button>
      </Card>

      {/* Leaderboard Table */}
      <Card className="overflow-hidden border border-gray-200 shadow-sm bg-white">
        <div className="bg-gray-50/50 p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-700">Top 10 Savers</h3>
          <Badge variant="success" className="bg-green-100 text-green-700 font-bold">Global</Badge>
        </div>
        
        {loading ? (
          <div className="p-12 text-center text-gray-400 flex flex-col items-center">
            <Loader2 size={32} className="animate-spin mb-4 text-green-500" />
            <p>Loading leaderboard...</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {leaders.map((leader, index) => {
              const isCurrentUser = leader.id === currentUser?.uid;
              const medalClass = getMedalColor(index);
              
              return (
                <li 
                  key={leader.id} 
                  className={`p-4 flex items-center gap-4 transition-colors hover:bg-gray-50/50 ${
                    isCurrentUser ? 'bg-green-50/40' : ''
                  }`}
                >
                  <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-black text-lg ${medalClass}`}>
                    {index < 3 ? <Medal size={20} /> : index + 1}
                  </div>
                  
                  <div className="flex-1 flex items-center gap-3">
                    <Avatar name={leader.name || 'User'} className="w-10 h-10 border border-gray-200 shadow-sm" />
                    <div>
                      <h4 className={`font-bold ${isCurrentUser ? 'text-green-800' : 'text-gray-900'}`}>
                        {leader.name || 'Anonymous User'}
                        {isCurrentUser && <span className="ml-2 text-xs font-bold bg-green-200 text-green-800 px-2 py-0.5 rounded-md">YOU</span>}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">Lvl {leader.level || 'Seedling'}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-black text-gray-900">
                      {leader.totalSaved?.toFixed(1)}
                    </div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">kg saved</div>
                  </div>
                </li>
              );
            })}
            
            {leaders.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                <Trophy size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-lg font-medium text-gray-900">No data available</p>
                <p className="mt-1">Be the first to save CO₂ and get on the board!</p>
              </div>
            )}
          </ul>
        )}
      </Card>
    </div>
  );
}

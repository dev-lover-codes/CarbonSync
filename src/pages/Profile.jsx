import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCarbon } from '../contexts/CarbonContext';
import { getLevel } from '../utils/helpers';
import { User, LogOut, Trash2, Settings, Target, Flame, Leaf, ChevronDown, Check, Lock } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ProgressBar from '../components/ui/ProgressBar';
import PageHeader from '../components/layout/PageHeader';
import toast from 'react-hot-toast';
import { CONTAINER } from '../utils/styles';

const ACHIEVEMENTS = [
  { id: 'a1', title: 'First Step', desc: 'Log your first activity', icon: '🌱', req: (a) => a.length >= 1 },
  { id: 'a2', title: 'Consistent', desc: 'Reach a 7-day streak', icon: '🔥', req: (a, p) => p.streak >= 7 },
  { id: 'a3', title: 'Goal Crusher', desc: 'Complete 5 goals', icon: '🎯', req: (a, p, g) => g.filter(x => x.status === 'completed').length >= 5 },
  { id: 'a4', title: 'Centurion', desc: 'Save 100kg of CO2', icon: '💯', req: (a, p) => p.totalSaved >= 100 },
  { id: 'a5', title: 'Zero Waste', desc: 'Log 10 waste activities', icon: '♻️', req: (a) => a.filter(x => x.category === 'waste').length >= 10 },
  { id: 'a6', title: 'Transit Pro', desc: 'Log 20 transport activities', icon: '🚇', req: (a) => a.filter(x => x.category === 'transport').length >= 20 },
  { id: 'a7', title: 'Vegan Day', desc: 'Log vegan meals', icon: '🥗', req: (a) => a.filter(x => x.type === 'vegan_meal').length >= 3 },
  { id: 'a8', title: 'Half Ton', desc: 'Save 500kg of CO2', icon: '🏆', req: (a, p) => p.totalSaved >= 500 },
  { id: 'a9', title: 'Energy Saver', desc: 'Log 15 energy activities', icon: '⚡', req: (a) => a.filter(x => x.category === 'energy').length >= 15 },
  { id: 'a10', title: 'Dedicated', desc: 'Reach 30-day streak', icon: '🌋', req: (a, p) => p.streak >= 30 },
  { id: 'a11', title: 'Local Shopper', desc: 'Log shopping activities', icon: '🛍️', req: (a) => a.filter(x => x.category === 'shopping').length >= 5 },
  { id: 'a12', title: 'Carbon Hero', desc: 'Reach Earth Champion level', icon: '🌍', req: (a, p) => getLevel(p.totalSaved).title === 'Earth Champion' },
];

export default function Profile() {
  const { userProfile, updateProfile, logout } = useAuth();
  const { activities, goals } = useCarbon();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userProfile?.name || '');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const levelInfo = getLevel(userProfile?.totalSaved);
  const completedGoals = (goals || []).filter(g => g.status === 'completed').length;

  const handleSaveName = async () => {
    if (!name.trim()) return;
    try {
      await updateProfile({ name });
      setIsEditing(false);
      toast.success('Profile updated');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className={CONTAINER}>
      <PageHeader title="Your Profile" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* User Card */}
        <Card className="lg:col-span-1 p-8 text-center flex flex-col items-center justify-center border-none shadow-lg bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
          <div className="absolute top-0 w-full h-32 bg-green-600/10"></div>
          
          <div className="relative w-32 h-32 mb-6 mt-4">
            <svg className="w-full h-full transform -rotate-90 absolute inset-0 text-green-100" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeDasharray={`${levelInfo.progress}, 100`} strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
              <User size={48} className="text-gray-300" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white text-sm font-bold shadow-sm" title={levelInfo.title}>
              {levelInfo.title.charAt(0)}
            </div>
          </div>

          {isEditing ? (
            <div className="flex gap-2 w-full max-w-xs mb-2 z-10">
              <Input value={name} onChange={e => setName(e.target.value)} className="text-center py-1.5" />
              <Button onClick={handleSaveName} size="sm" className="bg-green-600 hover:bg-green-700"><Check size={16} /></Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-2 z-10 cursor-pointer group" onClick={() => setIsEditing(true)}>
              <h2 className="text-2xl font-black text-gray-900 group-hover:text-green-600 transition-colors">{userProfile?.name}</h2>
            </div>
          )}
          
          <p className="text-sm text-gray-500 font-medium mb-6 z-10">{userProfile?.email}</p>
          
          <div className="w-full flex items-center justify-center gap-6 py-4 border-t border-gray-100 z-10">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Streak</p>
              <p className="font-bold text-gray-900 flex items-center justify-center gap-1">
                <Flame size={16} className="text-orange-500" /> {userProfile?.streak || 0}
              </p>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Joined</p>
              <p className="font-bold text-gray-900 text-sm">
                {userProfile?.joinedAt?.toDate ? userProfile.joinedAt.toDate().getFullYear() : new Date().getFullYear()}
              </p>
            </div>
          </div>
        </Card>

        {/* Stats & Levels */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Logs', value: activities?.length || 0, icon: Leaf, color: 'text-green-600' },
              { label: 'CO₂ Saved', value: `${(userProfile?.totalSaved || 0).toFixed(1)}kg`, icon: Target, color: 'text-blue-600' },
              { label: 'Goals Met', value: completedGoals, icon: Check, color: 'text-purple-600' },
              { label: 'Best Streak', value: userProfile?.streak || 0, icon: Flame, color: 'text-orange-500' }
            ].map((stat, i) => (
              <Card key={i} className="p-4 border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <stat.icon size={24} className={`mb-2 ${stat.color}`} />
                <div className="text-xl font-black text-gray-900">{stat.value}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="p-6 border-gray-100 shadow-sm bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Target size={20} className="text-green-400" /> Level Progress
            </h3>
            
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-green-400">{levelInfo.title}</span>
              {levelInfo.next && <span className="text-gray-400">Next: {(levelInfo.next - (userProfile?.totalSaved || 0)).toFixed(1)}kg to go</span>}
            </div>
            <ProgressBar progress={levelInfo.progress} color="bg-green-500" className="h-3 bg-gray-700" />
            
            <div className="flex justify-between mt-6 text-xs font-bold text-gray-500">
              <span className={levelInfo.title === 'Seedling' ? 'text-white' : ''}>Seedling</span>
              <span className={levelInfo.title === 'Sapling' ? 'text-white' : ''}>Sapling</span>
              <span className={levelInfo.title === 'Tree' ? 'text-white' : ''}>Tree</span>
              <span className={levelInfo.title === 'Forest Guardian' ? 'text-white' : ''}>Guardian</span>
              <span className={levelInfo.title === 'Earth Champion' ? 'text-white' : ''}>Champion</span>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Achievements */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target size={24} className="text-yellow-500" /> Badges & Achievements
          </h2>
          <Card className="p-6 border-gray-100 shadow-sm">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {ACHIEVEMENTS.map(ach => {
                const isUnlocked = ach.req(activities || [], userProfile || {}, goals || []);
                return (
                  <div key={ach.id} className="flex flex-col items-center text-center group relative cursor-help">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-2 transition-all duration-300 ${isUnlocked ? 'bg-amber-100 shadow-inner' : 'bg-gray-50 grayscale opacity-40'}`}>
                      {ach.icon}
                    </div>
                    <span className={`text-xs font-bold ${isUnlocked ? 'text-gray-900' : 'text-gray-400'}`}>{ach.title}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 w-32 bg-gray-900 text-white text-xs p-2 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none">
                      {ach.desc}
                      {!isUnlocked && <div className="mt-1 text-amber-300 font-medium">Locked <Lock size={10} className="inline ml-1 mb-0.5" /></div>}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Settings */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings size={24} className="text-gray-400" /> Account Settings
          </h2>
          <Card className="border-gray-100 shadow-sm divide-y divide-gray-100 overflow-hidden">
            
            <div className="p-0">
              <button className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('units')}>
                <div className="font-semibold text-gray-900">Preferences & Units</div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${activeAccordion === 'units' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'units' && (
                <div className="px-5 pb-5 pt-2 text-sm text-gray-600 bg-gray-50/50">
                  <p className="mb-3">CarbonSync uses Metric (kg CO₂) by default based on international standards.</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="primary">Metric (kg)</Button>
                    <Button size="sm" variant="outline" disabled>Imperial (lbs) - Soon</Button>
                  </div>
                </div>
              )}
            </div>

            <div className="p-0">
              <button className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('privacy')}>
                <div className="font-semibold text-gray-900">Privacy & Leaderboard</div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${activeAccordion === 'privacy' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'privacy' && (
                <div className="px-5 pb-5 pt-2 text-sm text-gray-600 bg-gray-50/50 flex items-center justify-between">
                  <span>Show my profile on public leaderboards</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              )}
            </div>

            <div className="p-0">
              <button className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('danger')}>
                <div className="font-semibold text-red-600">Danger Zone</div>
                <ChevronDown size={20} className={`text-red-400 transition-transform ${activeAccordion === 'danger' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'danger' && (
                <div className="px-5 pb-5 pt-2 bg-red-50/50 text-sm">
                  <p className="text-red-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                  <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 flex items-center gap-2">
                    <Trash2 size={16} /> Delete Account
                  </Button>
                </div>
              )}
            </div>

          </Card>
          
          <Button onClick={handleLogout} variant="outline" className="w-full mt-6 flex items-center justify-center gap-2 border-gray-200 hover:bg-gray-50 text-gray-600 font-bold h-12">
            <LogOut size={18} /> Log Out securely
          </Button>
        </div>
      </div>
    </div>
  );
}
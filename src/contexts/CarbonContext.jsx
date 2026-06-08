import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { 
  logActivity, 
  getActivities, 
  getGoals, 
  saveGoal, 
  updateGoal, 
  getInsights 
} from '../lib/firestore';
import { calculateFootprint } from '../config/carbonFactors';

const CarbonContext = createContext();

export function useCarbon() {
  return useContext(CarbonContext);
}

export function CarbonProvider({ children }) {
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActivities = async () => {
    if (!currentUser) return;
    const data = await getActivities(currentUser.uid, 50);
    setActivities(data);
  };

  const fetchGoals = async () => {
    if (!currentUser) return;
    const data = await getGoals(currentUser.uid);
    setGoals(data);
  };

  const fetchInsights = async () => {
    if (!currentUser) return;
    const data = await getInsights(currentUser.uid);
    setInsights(data);
  };

  const addActivity = async (data) => {
    if (!currentUser) return;
    await logActivity(currentUser.uid, data);
    await fetchActivities();
  };

  const addGoal = async (data) => {
    if (!currentUser) return;
    await saveGoal(currentUser.uid, data);
    await fetchGoals();
  };

  const toggleGoal = async (goalId, currentStatus) => {
    if (!currentUser) return;
    const newStatus = currentStatus === 'completed' ? 'active' : 'completed';
    await updateGoal(currentUser.uid, goalId, { status: newStatus });
    await fetchGoals();
  };

  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      Promise.all([fetchActivities(), fetchGoals(), fetchInsights()])
        .finally(() => setLoading(false));
    } else {
      setActivities([]);
      setGoals([]);
      setInsights([]);
    }
  }, [currentUser]);

  const weeklyTotal = useMemo(() => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const weeklyActivities = activities.filter(a => {
      const date = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp);
      return date >= oneWeekAgo;
    });
    return calculateFootprint(weeklyActivities);
  }, [activities]);

  const monthlyTotal = useMemo(() => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const monthlyActivities = activities.filter(a => {
      const date = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp);
      return date >= oneMonthAgo;
    });
    return calculateFootprint(monthlyActivities);
  }, [activities]);

  const value = {
    activities,
    goals,
    insights,
    weeklyTotal,
    monthlyTotal,
    loading,
    addActivity,
    fetchActivities,
    fetchGoals,
    addGoal,
    toggleGoal,
    fetchInsights
  };

  return (
    <CarbonContext.Provider value={value}>
      {children}
    </CarbonContext.Provider>
  );
}

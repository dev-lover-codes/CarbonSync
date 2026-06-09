import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  getDocs, 
  serverTimestamp 
} from "firebase/firestore";
import { db, isMock } from "./firebase";

// User Profile Helpers
export const createUserProfile = async (uid, data) => {
  if (isMock) {
    const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
    users[uid] = {
      ...data,
      totalSaved: data.totalSaved !== undefined ? data.totalSaved : 0,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("mock_users", JSON.stringify(users));
    return;
  }

  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    ...data,
    totalSaved: 0,
    createdAt: serverTimestamp(),
  });
};

export const getUserProfile = async (uid) => {
  if (isMock) {
    const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
    return users[uid] || null;
  }

  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
};

export const updateUserProfile = async (uid, data) => {
  if (isMock) {
    const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
    if (users[uid]) {
      users[uid] = { ...users[uid], ...data };
      localStorage.setItem("mock_users", JSON.stringify(users));
    }
    return;
  }

  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, data);
};

// Activity Helpers
export const logActivity = async (uid, activityData) => {
  if (isMock) {
    const key = `mock_activities_${uid}`;
    const activities = JSON.parse(localStorage.getItem(key) || "[]");
    const newAct = {
      id: Math.random().toString(36).substr(2, 9),
      ...activityData,
      timestamp: new Date().toISOString()
    };
    activities.unshift(newAct);
    localStorage.setItem(key, JSON.stringify(activities));

    // Update user profile totalSaved
    const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
    if (users[uid]) {
      const change = activityData.co2 < 0 ? Math.abs(activityData.co2) : 0;
      users[uid].totalSaved = (users[uid].totalSaved || 0) + change + 1.0; // Reward +1kg for logging
      localStorage.setItem("mock_users", JSON.stringify(users));
    }
    return;
  }

  const activitiesRef = collection(db, "users", uid, "activities");
  await addDoc(activitiesRef, {
    ...activityData,
    timestamp: serverTimestamp(),
  });
};

export const getActivities = async (uid, limitCount = 10) => {
  if (isMock) {
    const activities = JSON.parse(localStorage.getItem(`mock_activities_${uid}`) || "[]");
    return activities.slice(0, limitCount);
  }

  const activitiesRef = collection(db, "users", uid, "activities");
  const q = query(activitiesRef, orderBy("timestamp", "desc"), limit(limitCount));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Goals Helpers
export const saveGoal = async (uid, goalData) => {
  if (isMock) {
    const key = `mock_goals_${uid}`;
    const goals = JSON.parse(localStorage.getItem(key) || "[]");
    const newGoal = {
      id: Math.random().toString(36).substr(2, 9),
      ...goalData,
      status: "active",
      createdAt: new Date().toISOString()
    };
    goals.unshift(newGoal);
    localStorage.setItem(key, JSON.stringify(goals));
    return;
  }

  const goalsRef = collection(db, "users", uid, "goals");
  await addDoc(goalsRef, {
    ...goalData,
    status: "active",
    createdAt: serverTimestamp(),
  });
};

export const getGoals = async (uid) => {
  if (isMock) {
    return JSON.parse(localStorage.getItem(`mock_goals_${uid}`) || "[]");
  }

  const goalsRef = collection(db, "users", uid, "goals");
  const querySnapshot = await getDocs(goalsRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateGoal = async (uid, goalId, data) => {
  if (isMock) {
    const key = `mock_goals_${uid}`;
    const goals = JSON.parse(localStorage.getItem(key) || "[]");
    const idx = goals.findIndex(g => g.id === goalId);
    if (idx !== -1) {
      const oldStatus = goals[idx].status;
      goals[idx] = { ...goals[idx], ...data };
      localStorage.setItem(key, JSON.stringify(goals));

      // Reward on completion
      if (data.status === "completed" && oldStatus !== "completed") {
        const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
        if (users[uid]) {
          users[uid].totalSaved = (users[uid].totalSaved || 0) + 15.0;
          localStorage.setItem("mock_users", JSON.stringify(users));
        }
      }
    }
    return;
  }

  const goalRef = doc(db, "users", uid, "goals", goalId);
  await updateDoc(goalRef, data);
};

// Leaderboard Helper
export const getLeaderboard = async () => {
  if (isMock) {
    const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
    const list = Object.keys(users).map(uid => ({ id: uid, ...users[uid] }));
    if (list.length < 5) {
      const mockLeaders = [
        { id: 'leader_1', name: 'Greta Thunberg', email: 'greta@earth.org', totalSaved: 850.5, level: 'Earth Champion' },
        { id: 'leader_2', name: 'David Attenborough', email: 'david@bbc.co.uk', totalSaved: 720.2, level: 'Earth Champion' },
        { id: 'leader_3', name: 'Jane Goodall', email: 'jane@roots.org', totalSaved: 480.0, level: 'Forest Guardian' },
        { id: 'leader_4', name: 'Leonardo DiCaprio', email: 'leo@foundation.org', totalSaved: 340.4, level: 'Forest Guardian' },
        { id: 'leader_5', name: 'Boyan Slat', email: 'boyan@theoceancleanup.com', totalSaved: 290.1, level: 'Forest Guardian' },
      ];
      mockLeaders.forEach(leader => {
        if (!list.find(u => u.email === leader.email)) {
          list.push(leader);
        }
      });
    }
    return list.sort((a, b) => (b.totalSaved || 0) - (a.totalSaved || 0)).slice(0, 10);
  }

  const usersRef = collection(db, "users");
  const q = query(usersRef, orderBy("totalSaved", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Insights Helpers
export const saveInsight = async (uid, insightData) => {
  if (isMock) {
    const key = `mock_insights_${uid}`;
    const insights = JSON.parse(localStorage.getItem(key) || "[]");
    const newInsight = {
      id: Math.random().toString(36).substr(2, 9),
      ...insightData,
      timestamp: new Date().toISOString()
    };
    insights.unshift(newInsight);
    localStorage.setItem(key, JSON.stringify(insights));
    return;
  }

  const insightsRef = collection(db, "users", uid, "insights");
  await addDoc(insightsRef, {
    ...insightData,
    timestamp: serverTimestamp(),
  });
};

export const getInsights = async (uid) => {
  if (isMock) {
    const key = `mock_insights_${uid}`;
    const insights = JSON.parse(localStorage.getItem(key) || "[]");
    if (insights.length === 0) {
      const defaultInsight = {
        id: 'default_ins',
        summary: 'Your emissions are stable this week. Focus on reducing shopping item purchases (especially electronics) which account for your largest potential savings. Consider commuting by bike or walking to save an additional 4.2kg of CO2 weekly.',
        timestamp: new Date().toISOString()
      };
      insights.push(defaultInsight);
      localStorage.setItem(key, JSON.stringify(insights));
    }
    return insights;
  }

  const insightsRef = collection(db, "users", uid, "insights");
  const q = query(insightsRef, orderBy("timestamp", "desc"), limit(7));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};


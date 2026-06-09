import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  serverTimestamp 
} from "firebase/firestore";
import { db, getIsMock } from "../lib/firebase";

// Helper for Mock Data
const getMockStorage = (key, defaultVal = []) => {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultVal));
};

const setMockStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

// 1. Log Activity
export async function logActivity(userId, activityData) {
  if (getIsMock()) {
    const activities = getMockStorage("mock_activities", []);
    const newActivity = {
      id: "act_" + Math.random().toString(36).substring(2, 9),
      userId,
      ...activityData,
      timestamp: new Date().toISOString()
    };
    activities.unshift(newActivity);
    setMockStorage("mock_activities", activities);

    // Automatically update stats and streak
    await updateUserStats(userId, activityData.co2);
    await updateStreak(userId);
    return newActivity;
  }

  try {
    const docRef = await addDoc(collection(db, "activities"), {
      userId,
      ...activityData,
      timestamp: serverTimestamp()
    });
    // Update stats and streak
    await updateUserStats(userId, activityData.co2);
    await updateStreak(userId);
    return { id: docRef.id, ...activityData };
  } catch (error) {
    console.error("Error logging activity:", error);
    throw error;
  }
}

// 2. Get User Activities
export async function getUserActivities(userId, days = 30) {
  if (getIsMock()) {
    const activities = getMockStorage("mock_activities", []);
    // Filter by userId
    const userActs = activities.filter(a => a.userId === userId);
    
    // Sort and filter by days
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - days);
    
    return userActs.filter(a => new Date(a.timestamp) >= limitDate);
  }

  try {
    const q = query(
      collection(db, "activities"),
      where("userId", "==", userId),
      orderBy("timestamp", "desc")
    );
    const snap = await getDocs(q);
    const results = [];
    snap.forEach(d => {
      const data = d.data();
      results.push({ id: d.id, ...data });
    });
    
    // Client-side day filtering if timestamp is Firestore Timestamp
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - days);

    return results.filter(r => {
      const date = r.timestamp?.toDate ? r.timestamp.toDate() : new Date(r.timestamp);
      return date >= limitDate;
    });
  } catch (error) {
    console.error("Error fetching user activities:", error);
    return [];
  }
}

// 3. Update User Stats
export async function updateUserStats(userId, co2Added) {
  // co2Added: carbon savings (negative carbon represents addition, positive saved represents reduction)
  // Master prompt implies we track CO2 saved. Let's make sure we update totals.
  if (getIsMock()) {
    const users = getMockStorage("mock_users", {});
    if (users[userId]) {
      const user = users[userId];
      user.totalSaved = (user.totalSaved || 0) + (co2Added > 0 ? co2Added : 0);
      user.monthlySaved = (user.monthlySaved || 0) + (co2Added > 0 ? co2Added : 0);
      
      // Level progression helper
      if (user.totalSaved > 500) user.level = "Forest";
      else if (user.totalSaved > 250) user.level = "Tree";
      else if (user.totalSaved > 100) user.level = "Sapling";
      else user.level = "Seedling";

      users[userId] = user;
      setMockStorage("mock_users", users);
      
      // Sync to leaderboard
      await upsertLeaderboardEntry(userId, user.name, user.photoURL || "", user.monthlySaved);
    }
    return;
  }

  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const newTotal = (data.totalSaved || 0) + (co2Added > 0 ? co2Added : 0);
      const newMonthly = (data.monthlySaved || 0) + (co2Added > 0 ? co2Added : 0);
      
      let newLevel = "Seedling";
      if (newTotal > 500) newLevel = "Forest";
      else if (newTotal > 250) newLevel = "Tree";
      else if (newTotal > 100) newLevel = "Sapling";

      await updateDoc(userRef, {
        totalSaved: newTotal,
        monthlySaved: newMonthly,
        level: newLevel
      });

      await upsertLeaderboardEntry(userId, data.name || "Eco Warrior", data.photoURL || "", newMonthly);
    }
  } catch (error) {
    console.error("Error updating user stats:", error);
  }
}

// 4. Update Streak
export async function updateStreak(userId) {
  if (getIsMock()) {
    const users = getMockStorage("mock_users", {});
    if (users[userId]) {
      const user = users[userId];
      const today = new Date().toDateString();
      const lastLog = user.lastLogDate ? new Date(user.lastLogDate).toDateString() : null;
      
      if (lastLog === today) {
        // Already logged today
        return;
      }
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      if (lastLog === yesterdayStr) {
        user.streak = (user.streak || 0) + 1;
      } else {
        user.streak = 1;
      }
      user.lastLogDate = new Date().toISOString();
      users[userId] = user;
      setMockStorage("mock_users", users);
    }
    return;
  }

  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const today = new Date().toDateString();
      const lastLog = data.lastLogDate ? new Date(data.lastLogDate).toDateString() : null;
      
      if (lastLog === today) return;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();

      let newStreak = 1;
      if (lastLog === yesterdayStr) {
        newStreak = (data.streak || 0) + 1;
      }

      await updateDoc(userRef, {
        streak: newStreak,
        lastLogDate: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error("Error updating streak:", error);
  }
}

// 5. Get Leaderboard
export async function getLeaderboard() {
  if (getIsMock()) {
    const leaderboard = getMockStorage("mock_leaderboard", []);
    // Return sorted by monthlySaved
    return leaderboard
      .sort((a, b) => (b.thisMonthSaved || 0) - (a.thisMonthSaved || 0))
      .slice(0, 10);
  }

  try {
    const q = query(
      collection(db, "leaderboard"),
      orderBy("thisMonthSaved", "desc"),
      limit(10)
    );
    const snap = await getDocs(q);
    const results = [];
    snap.forEach(d => {
      results.push({ id: d.id, ...d.data() });
    });
    return results;
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    return [];
  }
}

// 6. Get User Goals
export async function getUserGoals(userId) {
  if (getIsMock()) {
    const goals = getMockStorage("mock_goals", []);
    return goals.filter(g => g.userId === userId);
  }

  try {
    const q = query(
      collection(db, "goals"),
      where("userId", "==", userId)
    );
    const snap = await getDocs(q);
    const results = [];
    snap.forEach(d => {
      results.push({ id: d.id, ...d.data() });
    });
    return results;
  } catch (error) {
    console.error("Error getting user goals:", error);
    return [];
  }
}

// 7. Create Goal
export async function createGoal(userId, goalData) {
  if (getIsMock()) {
    const goals = getMockStorage("mock_goals", []);
    const newGoal = {
      id: "goal_" + Math.random().toString(36).substring(2, 9),
      userId,
      ...goalData,
      progress: 0,
      createdAt: new Date().toISOString()
    };
    goals.push(newGoal);
    setMockStorage("mock_goals", goals);
    return newGoal;
  }

  try {
    const docRef = await addDoc(collection(db, "goals"), {
      userId,
      ...goalData,
      progress: 0,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...goalData, progress: 0 };
  } catch (error) {
    console.error("Error creating goal:", error);
    throw error;
  }
}

// 8. Update Goal Progress
export async function updateGoalProgress(goalId, progress) {
  if (getIsMock()) {
    const goals = getMockStorage("mock_goals", []);
    const idx = goals.findIndex(g => g.id === goalId);
    if (idx !== -1) {
      goals[idx].progress = progress;
      if (progress >= 100) goals[idx].status = "completed";
      setMockStorage("mock_goals", goals);
    }
    return;
  }

  try {
    const goalRef = doc(db, "goals", goalId);
    await updateDoc(goalRef, { 
      progress,
      status: progress >= 100 ? "completed" : "active"
    });
  } catch (error) {
    console.error("Error updating goal progress:", error);
  }
}

// 9. Get Tips
const INITIAL_TIPS = [
  { id: "tip_1", title: "Switch to LED bulbs", description: "Replacing 5 bulbs saves ~18kg CO₂/year. Takes 10 minutes.", category: "energy", impactKg: 18, difficulty: "easy", likes: 0 },
  { id: "tip_2", title: "One meat-free day per week", description: "Going veg just once a week saves ~170kg CO₂/year.", category: "food", impactKg: 170, difficulty: "easy", likes: 0 },
  { id: "tip_3", title: "Carpool twice a week", description: "Sharing your commute 2x/week saves ~250kg CO₂/year.", category: "transport", impactKg: 250, difficulty: "medium", likes: 0 },
  { id: "tip_4", title: "Wash clothes in cold water", description: "Cold wash uses 90% less energy — saves ~20kg CO₂/year.", category: "energy", impactKg: 20, difficulty: "easy", likes: 0 },
  { id: "tip_5", title: "Take the bus instead of Ola", description: "Bus emits 5x less CO₂ per km than a solo cab ride.", category: "transport", impactKg: 180, difficulty: "medium", likes: 0 },
  { id: "tip_6", title: "Buy local produce", description: "Locally sourced food cuts food-miles emissions by ~50%.", category: "food", impactKg: 60, difficulty: "easy", likes: 0 },
  { id: "tip_7", title: "Unplug devices at night", description: "Standby power wastes ~10% of household electricity.", category: "energy", impactKg: 30, difficulty: "easy", likes: 0 },
  { id: "tip_8", title: "Avoid fast fashion", description: "One fewer clothing purchase/month saves ~120kg CO₂/year.", category: "shopping", impactKg: 120, difficulty: "medium", likes: 0 }
];

export async function getTips() {
  if (getIsMock()) {
    return getMockStorage("mock_tips", INITIAL_TIPS);
  }

  try {
    const snap = await getDocs(collection(db, "tips"));
    const results = [];
    snap.forEach(d => {
      results.push({ id: d.id, ...d.data() });
    });
    return results;
  } catch (error) {
    console.error("Error getting tips:", error);
    return [];
  }
}

export async function seedTips() {
  if (getIsMock()) {
    const existing = localStorage.getItem("mock_tips");
    if (!existing) {
      setMockStorage("mock_tips", INITIAL_TIPS);
    }
    return;
  }

  try {
    const snap = await getDocs(collection(db, "tips"));
    if (snap.empty) {
      for (const tip of INITIAL_TIPS) {
        // Strip id for firestore auto id
        const { id, ...tipData } = tip;
        await addDoc(collection(db, "tips"), tipData);
      }
      console.log("Seeded tips collection successfully.");
    }
  } catch (error) {
    console.error("Error seeding tips:", error);
  }
}

// 10. Upsert Leaderboard Entry
export async function upsertLeaderboardEntry(userId, displayName, photoURL, co2Saved) {
  if (getIsMock()) {
    const leaderboard = getMockStorage("mock_leaderboard", []);
    const idx = leaderboard.findIndex(l => l.id === userId);
    const entry = {
      id: userId,
      displayName,
      photoURL,
      thisMonthSaved: co2Saved,
      totalSaved: co2Saved // simplistic mock mapping
    };
    if (idx !== -1) {
      leaderboard[idx] = entry;
    } else {
      leaderboard.push(entry);
    }
    setMockStorage("mock_leaderboard", leaderboard);
    return;
  }

  try {
    const docRef = doc(db, "leaderboard", userId);
    await setDoc(docRef, {
      displayName,
      photoURL,
      thisMonthSaved: co2Saved,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error("Error upserting leaderboard entry:", error);
  }
}

// 11. Save Insight
export async function saveInsight(userId, insightData) {
  if (getIsMock()) {
    const insights = getMockStorage("mock_insights", []);
    const newInsight = {
      id: "ins_" + Math.random().toString(36).substring(2, 9),
      userId,
      ...insightData,
      timestamp: new Date().toISOString()
    };
    insights.unshift(newInsight);
    setMockStorage("mock_insights", insights);
    return newInsight;
  }

  try {
    const docRef = await addDoc(collection(db, "insights"), {
      userId,
      ...insightData,
      timestamp: serverTimestamp()
    });
    return { id: docRef.id, ...insightData };
  } catch (error) {
    console.error("Error saving insight:", error);
    throw error;
  }
}

// 12. Get Insights
export async function getInsights(userId, limitCount = 7) {
  if (getIsMock()) {
    const insights = getMockStorage("mock_insights", []);
    return insights.filter(i => i.userId === userId).slice(0, limitCount);
  }

  try {
    const q = query(
      collection(db, "insights"),
      where("userId", "==", userId),
      orderBy("timestamp", "desc"),
      limit(limitCount)
    );
    const snap = await getDocs(q);
    const results = [];
    snap.forEach(d => {
      results.push({ id: d.id, ...d.data() });
    });
    return results;
  } catch (error) {
    console.error("Error getting insights:", error);
    return [];
  }
}


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
  serverTimestamp,
  Timestamp
} from "firebase/firestore";
import { db } from "../lib/firebase";

// 1. Log Activity
export async function logActivity(userId, activityData) {
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
    throw error;
  }
}

// 2. Get User Activities
export async function getUserActivities(userId, days = 30) {
  try {
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - days);

    const q = query(
      collection(db, "activities"),
      where("userId", "==", userId),
      where("timestamp", ">=", Timestamp.fromDate(limitDate)),
      orderBy("timestamp", "desc")
    );
    const snap = await getDocs(q);
    const results = [];
    snap.forEach(d => {
      const data = d.data();
      results.push({ id: d.id, ...data });
    });
    return results;
  } catch (error) {
    return [];
  }
}

// 3. Update User Stats
export async function updateUserStats(userId, co2Added) {
  // co2Added: carbon savings (negative carbon represents addition, positive saved represents reduction)
  // Master prompt implies we track CO2 saved. Let's make sure we update totals.
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
  }
}

// 4. Update Streak
export async function updateStreak(userId) {
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
  }
}

// 5. Get Leaderboard
export async function getLeaderboard() {
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
    return [];
  }
}

// 6. Get User Goals
export async function getUserGoals(userId) {
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
    return [];
  }
}

// 7. Create Goal
export async function createGoal(userId, goalData) {
  try {
    const docRef = await addDoc(collection(db, "goals"), {
      userId,
      ...goalData,
      progress: 0,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...goalData, progress: 0 };
  } catch (error) {
    throw error;
  }
}

// 8. Update Goal Progress
export async function updateGoalProgress(goalId, progress) {
  try {
    const goalRef = doc(db, "goals", goalId);
    await updateDoc(goalRef, { 
      progress,
      status: progress >= 100 ? "completed" : "active"
    });
  } catch (error) {
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
  try {
    const snap = await getDocs(collection(db, "tips"));
    const results = [];
    snap.forEach(d => {
      results.push({ id: d.id, ...d.data() });
    });
    return results;
  } catch (error) {
    return [];
  }
}

export async function seedTips() {
  try {
    const snap = await getDocs(collection(db, "tips"));
    if (snap.empty) {
      for (const tip of INITIAL_TIPS) {
        // Strip id for firestore auto id
        const { id, ...tipData } = tip;
        await addDoc(collection(db, "tips"), tipData);
      }
    }
  } catch (error) {
  }
}

// 10. Upsert Leaderboard Entry
export async function upsertLeaderboardEntry(userId, displayName, photoURL, co2Saved) {
  try {
    const docRef = doc(db, "leaderboard", userId);
    await setDoc(docRef, {
      displayName,
      photoURL,
      thisMonthSaved: co2Saved,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
  }
}

// 11. Save Insight
export async function saveInsight(userId, insightData) {
  try {
    const docRef = await addDoc(collection(db, "insights"), {
      userId,
      ...insightData,
      timestamp: serverTimestamp()
    });
    return { id: docRef.id, ...insightData };
  } catch (error) {
    throw error;
  }
}

// 12. Get Insights
export async function getInsights(userId, limitCount = 7) {
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
    return [];
  }
}


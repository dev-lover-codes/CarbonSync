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
import {
  LEVEL_FOREST_THRESHOLD,
  LEVEL_TREE_THRESHOLD,
  LEVEL_SAPLING_THRESHOLD
} from "../config/constants";

/**
 * Logs a new user carbon footprint activity to Firestore.
 * Updates the user statistics and streak.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {Object} activityData - Activity payload containing category, type, and amount.
 * @returns {Promise<Object>} The logged activity containing doc ID. Throws error on invalid firestore operation.
 */
export async function logActivity(userId, activityData) {
  const docRef = await addDoc(collection(db, "activities"), {
    userId,
    ...activityData,
    timestamp: serverTimestamp()
  });
  // Update stats and streak
  await updateUserStats(userId, activityData.co2);
  await updateStreak(userId);
  return { id: docRef.id, ...activityData };
}

/**
 * Fetches user activity logs within a specified date window.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {number} [days=30] - Number of days in the past to pull logs. Defaults to 30.
 * @returns {Promise<Array>} List of user activity log objects. Returns empty array on failure/invalid input.
 */
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
  } catch {
    return [];
  }
}

/**
 * Accumulates user stats (total CO2 saved, monthly saved) and promotes levels.
 * Updates leaderboard tracking index.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {number} co2Added - Carbon emissions saved or added (positive for reduction).
 * @returns {Promise<void>} Resolves when stats write completes. Fails silently on database errors.
 */
export async function updateUserStats(userId, co2Added) {
  // co2Added: carbon savings (negative carbon represents addition, positive saved represents reduction)
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const newTotal = (data.totalSaved || 0) + (co2Added > 0 ? co2Added : 0);
      const newMonthly = (data.monthlySaved || 0) + (co2Added > 0 ? co2Added : 0);
      
      let newLevel = "Seedling";
      if (newTotal > LEVEL_FOREST_THRESHOLD) newLevel = "Forest";
      else if (newTotal > LEVEL_TREE_THRESHOLD) newLevel = "Tree";
      else if (newTotal > LEVEL_SAPLING_THRESHOLD) newLevel = "Sapling";

      await updateDoc(userRef, {
        totalSaved: newTotal,
        monthlySaved: newMonthly,
        level: newLevel
      });

      await upsertLeaderboardEntry(userId, data.name || "Eco Warrior", data.photoURL || "", newMonthly);
    }
  } catch {
    // Silently ignore stats update failures to not disrupt activity logging
  }
}

/**
 * Increments or resets user daily engagement logging streak.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @returns {Promise<void>} Resolves when streak update completes. Fails silently on database errors.
 */
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
  } catch {
    // Silently ignore streak update failures
  }
}

/**
 * Gets the top 10 users ranked by monthly carbon offset achievements.
 * @returns {Promise<Array>} Top 10 monthly leaderboard entries. Returns empty array on database failure.
 */
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
  } catch {
    return [];
  }
}

/**
 * Fetches user carbon reduction goals.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @returns {Promise<Array>} List of user goals. Returns empty array on database failure/invalid input.
 */
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
  } catch {
    return [];
  }
}

/**
 * Creates a new personal carbon reduction goal.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {Object} goalData - Goal targets (e.g. category, target limit, timeline).
 * @returns {Promise<Object>} Created goal configuration with reference ID. Throws on error.
 */
export async function createGoal(userId, goalData) {
  const docRef = await addDoc(collection(db, "goals"), {
    userId,
    ...goalData,
    progress: 0,
    createdAt: serverTimestamp()
  });
  return { id: docRef.id, ...goalData, progress: 0 };
}

/**
 * Updates progress metrics for a carbon target/goal.
 * Marks target as completed if progress is >= 100%.
 * @param {string} goalId - Unique target identifier.
 * @param {number} progress - Completion percentage metric (0 to 100).
 * @returns {Promise<void>} Resolves when database update completes. Fails silently on database error.
 */
export async function updateGoalProgress(goalId, progress) {
  try {
    const goalRef = doc(db, "goals", goalId);
    await updateDoc(goalRef, { 
      progress,
      status: progress >= 100 ? "completed" : "active"
    });
  } catch {
    // Silently ignore progress update failures
  }
}

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

/**
 * Gets all sustainability tips.
 * @returns {Promise<Array>} List of sustainability tips. Returns empty array on database failure.
 */
export async function getTips() {
  try {
    const snap = await getDocs(collection(db, "tips"));
    const results = [];
    snap.forEach(d => {
      results.push({ id: d.id, ...d.data() });
    });
    return results;
  } catch {
    return [];
  }
}

/**
 * Seeds starting set of ecological tips if database tips collection is empty.
 * @returns {Promise<void>} Resolves when seeding completes. Fails silently on database error.
 */
export async function seedTips() {
  try {
    const snap = await getDocs(collection(db, "tips"));
    if (snap.empty) {
      for (const tip of INITIAL_TIPS) {
        // Strip id for firestore auto id
        const { id: _id, ...tipData } = tip;
        await addDoc(collection(db, "tips"), tipData);
      }
    }
  } catch {
    // Silently ignore seed failures
  }
}

/**
 * Updates or inserts user details in leaderboard rankings.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {string} displayName - Name display value.
 * @param {string} photoURL - Avatar image reference url.
 * @param {number} co2Saved - Current month's saved carbon in kg.
 * @returns {Promise<void>} Resolves when write completes. Fails silently on database error.
 */
export async function upsertLeaderboardEntry(userId, displayName, photoURL, co2Saved) {
  try {
    const docRef = doc(db, "leaderboard", userId);
    await setDoc(docRef, {
      displayName,
      photoURL,
      thisMonthSaved: co2Saved,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch {
    // Silently ignore leaderboard update failures
  }
}

/**
 * Saves a new coaching/insight report generated by the AI Coach.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {Object} insightData - The summary, scores, and advice payload.
 * @returns {Promise<Object>} Document containing database reference ID. Throws on error.
 */
export async function saveInsight(userId, insightData) {
  const docRef = await addDoc(collection(db, "insights"), {
    userId,
    ...insightData,
    timestamp: serverTimestamp()
  });
  return { id: docRef.id, ...insightData };
}

/**
 * Fetches saved coach reports/insights for a user.
 * @param {string} userId - Firebase Auth unique ID of the user.
 * @param {number} [limitCount=7] - Number of records to return. Defaults to 7.
 * @returns {Promise<Array>} List of insight reports. Returns empty array on database failure/invalid input.
 */
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
  } catch {
    return [];
  }
}

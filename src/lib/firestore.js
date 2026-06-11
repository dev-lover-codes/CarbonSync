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
import { db } from "./firebase";

// User Profile Helpers
export const createUserProfile = async (uid, data) => {
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {
      ...data,
      totalSaved: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (uid, data) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, data);
  } catch (error) {
    throw error;
  }
};

// Activity Helpers
export const logActivity = async (uid, activityData) => {
  try {
    const activitiesRef = collection(db, "users", uid, "activities");
    await addDoc(activitiesRef, {
      ...activityData,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const getActivities = async (uid, limitCount = 10) => {
  try {
    const activitiesRef = collection(db, "users", uid, "activities");
    const q = query(activitiesRef, orderBy("timestamp", "desc"), limit(limitCount));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};

// Goals Helpers
export const saveGoal = async (uid, goalData) => {
  try {
    const goalsRef = collection(db, "users", uid, "goals");
    await addDoc(goalsRef, {
      ...goalData,
      status: "active",
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const getGoals = async (uid) => {
  try {
    const goalsRef = collection(db, "users", uid, "goals");
    const querySnapshot = await getDocs(goalsRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};

export const updateGoal = async (uid, goalId, data) => {
  try {
    const goalRef = doc(db, "users", uid, "goals", goalId);
    await updateDoc(goalRef, data);
  } catch (error) {
    throw error;
  }
};

// Leaderboard Helper
export const getLeaderboard = async () => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, orderBy("totalSaved", "desc"), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};

// Insights Helpers
export const saveInsight = async (uid, insightData) => {
  try {
    const insightsRef = collection(db, "users", uid, "insights");
    await addDoc(insightsRef, {
      ...insightData,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const getInsights = async (uid) => {
  try {
    const insightsRef = collection(db, "users", uid, "insights");
    const q = query(insightsRef, orderBy("timestamp", "desc"), limit(7));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};


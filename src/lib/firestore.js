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
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    ...data,
    totalSaved: 0,
    createdAt: serverTimestamp(),
  });
};

export const getUserProfile = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
};

export const updateUserProfile = async (uid, data) => {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, data);
};

// Activity Helpers
export const logActivity = async (uid, activityData) => {
  const activitiesRef = collection(db, "users", uid, "activities");
  await addDoc(activitiesRef, {
    ...activityData,
    timestamp: serverTimestamp(),
  });
};

export const getActivities = async (uid, limitCount = 10) => {
  const activitiesRef = collection(db, "users", uid, "activities");
  const q = query(activitiesRef, orderBy("timestamp", "desc"), limit(limitCount));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Goals Helpers
export const saveGoal = async (uid, goalData) => {
  const goalsRef = collection(db, "users", uid, "goals");
  await addDoc(goalsRef, {
    ...goalData,
    status: "active",
    createdAt: serverTimestamp(),
  });
};

export const getGoals = async (uid) => {
  const goalsRef = collection(db, "users", uid, "goals");
  const querySnapshot = await getDocs(goalsRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateGoal = async (uid, goalId, data) => {
  const goalRef = doc(db, "users", uid, "goals", goalId);
  await updateDoc(goalRef, data);
};

// Leaderboard Helper
export const getLeaderboard = async () => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, orderBy("totalSaved", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Insights Helpers
export const saveInsight = async (uid, insightData) => {
  const insightsRef = collection(db, "users", uid, "insights");
  await addDoc(insightsRef, {
    ...insightData,
    timestamp: serverTimestamp(),
  });
};

export const getInsights = async (uid) => {
  const insightsRef = collection(db, "users", uid, "insights");
  const q = query(insightsRef, orderBy("timestamp", "desc"), limit(7));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

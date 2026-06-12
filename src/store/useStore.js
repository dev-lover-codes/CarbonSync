import { create } from 'zustand';
import { db } from '../lib/firebase';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  query, 
  where, 
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  serverTimestamp 
} from 'firebase/firestore';

export const useStore = create((set, get) => ({
  currentPage: 'landing',
  user: null,
  isLoading: false,
  error: null,
  
  userStats: {
    dailyFootprint: 0,
    weeklyFootprint: [0, 0, 0, 0, 0, 0, 0],
    totalSaved: 0,
    streak: 0,
    level: 1,
    points: 0,
    categories: {
      transport: 0,
      food: 0,
      energy: 0,
      shopping: 0,
    }
  },

  // Fetch real user stats from Firestore
  fetchUserStats: async (uid) => {
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        set({ 
          userStats: { 
            ...get().userStats, 
            ...userSnap.data() 
          },
          isLoading: false 
        });
      } else {
        // First time user — create their document
        const defaultStats = {
          dailyFootprint: 0,
          weeklyFootprint: [0, 0, 0, 0, 0, 0, 0],
          totalSaved: 0,
          streak: 0,
          level: 1,
          points: 0,
          categories: {
            transport: 0,
            food: 0,
            energy: 0,
            shopping: 0,
          },
          createdAt: serverTimestamp()
        };
        await setDoc(userRef, defaultStats);
        set({ userStats: defaultStats, isLoading: false });
      }
    } catch (error) {
      set({ error: error.message, isLoading: false });
      console.error('fetchUserStats error:', error);
    }
  },

  // Subscribe to real-time carbon logs
  subscribeToLogs: (uid) => {
    const logsRef = collection(db, 'users', uid, 'carbonLogs');
    const q = query(logsRef, orderBy('createdAt', 'desc'), limit(50));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const logs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Calculate real stats from logs
      const today = new Date().toDateString();
      const todayLogs = logs.filter(log => 
        new Date(log.createdAt?.toDate()).toDateString() === today
      );
      
      const dailyFootprint = todayLogs.reduce(
        (sum, log) => sum + (log.carbon_kg || 0), 0
      );
      
      // Build weekly array (last 7 days)
      const weeklyFootprint = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        const dateStr = date.toDateString();
        return logs
          .filter(log => 
            new Date(log.createdAt?.toDate()).toDateString() === dateStr
          )
          .reduce((sum, log) => sum + (log.carbon_kg || 0), 0);
      });
      
      // Calculate category breakdown
      const categories = { 
        transport: 0, food: 0, energy: 0, shopping: 0 
      };
      todayLogs.forEach(log => {
        if (categories.hasOwnProperty(log.category)) {
          categories[log.category] += log.carbon_kg || 0;
        }
      });
      
      set(state => ({
        userStats: {
          ...state.userStats,
          dailyFootprint: Math.round(dailyFootprint * 10) / 10,
          weeklyFootprint,
          categories
        }
      }));
    });
    
    return unsubscribe;
  },

  // Add a new carbon log entry
  addCarbonLog: async (uid, logData) => {
    set({ isLoading: true });
    try {
      const logsRef = collection(db, 'users', uid, 'carbonLogs');
      await addDoc(logsRef, {
        ...logData,
        userId: uid,
        createdAt: serverTimestamp()
      });
      
      // Update points
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const current = userSnap.data();
        await setDoc(userRef, {
          ...current,
          points: (current.points || 0) + 10,
          totalSaved: logData.carbon_kg < 5 
            ? (current.totalSaved || 0) + logData.carbon_kg 
            : current.totalSaved
        }, { merge: true });
      }
      set({ isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  navigate: (page) => {
    set({ transitionActive: true });
    setTimeout(() => set({ currentPage: page }), 600);
    setTimeout(() => set({ transitionActive: false }), 1200);
  },
  
  setUser: (user) => set({ user }),
  setUserStats: (stats) => set((state) => ({ 
    userStats: { ...state.userStats, ...stats } 
  })),
  
  transitionActive: false,
  setTransition: (v) => set({ transitionActive: v }),
  
  chatHistory: [
    { 
      sender: 'bot', 
      text: 'Greetings, Eco-Traveler! I am EcoBot, your AI carbon coach. Ask me anything about reducing your carbon footprint.' 
    }
  ],
  addChatMessage: (msg) => set((s) => ({ 
    chatHistory: [...s.chatHistory, msg] 
  })),
  clearChatHistory: () => set({
    chatHistory: [
      { 
        sender: 'bot', 
        text: 'Greetings, Eco-Traveler! I am EcoBot, your AI carbon coach. Ask me anything about reducing your carbon footprint.' 
      }
    ]
  })
}));

export default useStore;

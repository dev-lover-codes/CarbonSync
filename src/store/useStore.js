import { create } from 'zustand';

export const useStore = create((set) => ({
  currentPage: 'landing', // 'landing' | 'auth' | 'onboarding' | 'dashboard' | 'tracker' | 'insights' | 'goals' | 'leaderboard' | 'coach'
  user: null,
  userStats: {
    dailyFootprint: 10.2,
    weeklyFootprint: [12, 10, 11, 8, 9, 7, 10],
    totalSaved: 45.3,
    streak: 5,
    level: 1,
    points: 120,
    categories: {
      transport: 4.2,
      food: 2.1,
      energy: 2.8,
      shopping: 1.1,
    }
  },
  navigate: (page) => {
    set({ transitionActive: true });
    setTimeout(() => {
      set({ currentPage: page });
    }, 600);
    setTimeout(() => {
      set({ transitionActive: false });
    }, 1200);
  },
  setUser: (user) => set({ user }),
  setUserStats: (stats) => set((state) => ({ userStats: { ...state.userStats, ...stats } })),
  transitionActive: false,
  setTransition: (v) => set({ transitionActive: v }),
  chatHistory: [
    { sender: 'bot', text: 'Greetings, Eco-Traveler! I am EcoBot, your 3D carbon intelligence coach. Ask me anything about reducing your carbon footprint.' }
  ],
  addChatMessage: (msg) => set((s) => ({ chatHistory: [...s.chatHistory, msg] })),
  clearChatHistory: () => set({
    chatHistory: [
      { sender: 'bot', text: 'Greetings, Eco-Traveler! I am EcoBot, your 3D carbon intelligence coach. Ask me anything about reducing your carbon footprint.' }
    ]
  })
}));

export default useStore;

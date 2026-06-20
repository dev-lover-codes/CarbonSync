import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/firebase', () => ({
  db: {}
}));

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(() => ({})),
  getDoc: vi.fn(() => Promise.resolve({
    exists: () => true,
    data: () => ({ dailyFootprint: 10, totalSaved: 5, streak: 3 })
  })),
  setDoc: vi.fn(() => Promise.resolve()),
  collection: vi.fn(() => ({})),
  addDoc: vi.fn(() => Promise.resolve({ id: 'new-log-id' })),
  query: vi.fn(() => ({})),
  orderBy: vi.fn(() => ({})),
  limit: vi.fn(() => ({})),
  onSnapshot: vi.fn((q, cb) => {
    cb({
      docs: [
        {
          id: 'log1',
          data: () => ({ carbon_kg: 5.2, category: 'transport', createdAt: { toDate: () => new Date() } })
        }
      ]
    });
    return vi.fn();
  }),
  serverTimestamp: vi.fn(() => 'mock-timestamp')
}));

import { useStore } from '../store/useStore';

const INITIAL_GREETING = {
  sender: 'bot',
  text: 'Greetings, Eco-Traveler! I am EcoBot, your AI carbon coach. Ask me anything about reducing your carbon footprint.'
};

describe('useStore', () => {
  beforeEach(() => {
    useStore.setState({
      currentPage: 'landing',
      user: null,
      isLoading: false,
      error: null,
      transitionActive: false,
      userStats: {
        dailyFootprint: 0,
        weeklyFootprint: [0, 0, 0, 0, 0, 0, 0],
        totalSaved: 0,
        streak: 0,
        level: 1,
        points: 0,
        categories: { transport: 0, food: 0, energy: 0, shopping: 0 }
      },
      chatHistory: [INITIAL_GREETING]
    });
  });

  it('getWeeklyAverage returns 0 for all-zero week', () => {
    expect(useStore.getState().getWeeklyAverage()).toBe(0);
  });

  it('getWeeklyAverage calculates correct average', () => {
    useStore.setState({
      userStats: { ...useStore.getState().userStats, weeklyFootprint: [7, 7, 7, 7, 7, 7, 7] }
    });
    expect(useStore.getState().getWeeklyAverage()).toBe(7);
  });

  it('addChatMessage appends to chatHistory', () => {
    useStore.getState().addChatMessage({ sender: 'user', text: 'hello' });
    expect(useStore.getState().chatHistory).toHaveLength(2);
  });

  it('setUserStats merges partial updates without losing other fields', () => {
    useStore.getState().setUserStats({ streak: 5 });
    expect(useStore.getState().userStats.streak).toBe(5);
    expect(useStore.getState().userStats.totalSaved).toBe(0);
  });

  it('clearChatHistory resets to single bot greeting', () => {
    useStore.getState().addChatMessage({ sender: 'user', text: 'test' });
    useStore.getState().clearChatHistory();
    expect(useStore.getState().chatHistory).toHaveLength(1);
    expect(useStore.getState().chatHistory[0].sender).toBe('bot');
  });

  it('setUser sets user state', () => {
    useStore.getState().setUser({ uid: 'user123' });
    expect(useStore.getState().user).toEqual({ uid: 'user123' });
  });

  it('setTransition sets transition state', () => {
    useStore.getState().setTransition(true);
    expect(useStore.getState().transitionActive).toBe(true);
  });

  it('navigate triggers page transition and changes currentPage', async () => {
    vi.useFakeTimers();
    useStore.getState().navigate('dashboard');
    expect(useStore.getState().transitionActive).toBe(true);
    
    vi.advanceTimersByTime(600);
    expect(useStore.getState().currentPage).toBe('dashboard');
    
    vi.advanceTimersByTime(600);
    expect(useStore.getState().transitionActive).toBe(false);
    vi.useRealTimers();
  });

  it('fetchUserStats fetches user stats from firestore', async () => {
    await useStore.getState().fetchUserStats('user123');
    expect(useStore.getState().userStats.streak).toBe(3);
    expect(useStore.getState().userStats.dailyFootprint).toBe(10);
  });

  it('addCarbonLog logs carbon logs to firestore', async () => {
    await useStore.getState().addCarbonLog('user123', { carbon_kg: 4.5, category: 'transport' });
    expect(useStore.getState().isLoading).toBe(false);
  });

  it('subscribeToLogs registers listeners', () => {
    const unsub = useStore.getState().subscribeToLogs('user123');
    expect(unsub).toBeDefined();
    expect(useStore.getState().userStats.dailyFootprint).toBe(5.2);
    unsub();
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { useStore } from '../store/useStore';

const INITIAL_GREETING = {
  sender: 'bot',
  text: 'Greetings, Eco-Traveler! I am EcoBot, your AI carbon coach. Ask me anything about reducing your carbon footprint.'
};

describe('useStore', () => {
  beforeEach(() => {
    useStore.setState({
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
});

import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../lib/firebase', () => ({
  db: {}
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  doc: vi.fn(),
  addDoc: vi.fn(() => Promise.resolve({ id: 'mock-id' })),
  getDoc: vi.fn(() => Promise.resolve({ exists: () => false })),
  setDoc: vi.fn(() => Promise.resolve()),
  updateDoc: vi.fn(() => Promise.resolve()),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  limit: vi.fn(),
  getDocs: vi.fn(() => Promise.resolve({ forEach: () => {} })),
  serverTimestamp: vi.fn(() => 'mock-timestamp'),
  Timestamp: { fromDate: vi.fn((d) => d) }
}));

import { logActivity, getUserGoals } from '../utils/firestoreHelpers';

describe('firestoreHelpers', () => {
  it('logActivity does not throw on valid input', async () => {
    await expect(logActivity('user123', { category: 'transport', co2: 5 }))
      .resolves.not.toThrow;
  });

  it('getUserGoals returns an array even with no data', async () => {
    const result = await getUserGoals('user123');
    expect(Array.isArray(result)).toBe(true);
  });
});

import { describe, it, expect, vi } from 'vitest';

// lucide-react exports React components that are not needed for these pure-JS
// utility tests. Mock the module so the import in helpers.js resolves without
// requiring a real React/SVG render environment.
vi.mock('lucide-react', () => ({
  Car: () => null,
  Zap: () => null,
  Utensils: () => null,
  ShoppingBag: () => null,
  Trash2: () => null,
  Leaf: () => null,
}));

import { formatCO2, getLevel, getCategoryColor } from '../utils/helpers';

describe('Helper Utilities', () => {
  describe('formatCO2', () => {
    it('formats a number to 1 decimal place', () => {
      expect(formatCO2(10.256)).toBe('10.3');
    });
    it('returns 0.0 for undefined', () => {
      expect(formatCO2(undefined)).toBe('0.0');
    });
    it('returns 0.0 for null', () => {
      expect(formatCO2(null)).toBe('0.0');
    });
    it('handles exact integers', () => {
      expect(formatCO2(5)).toBe('5.0');
    });
    it('handles zero', () => {
      expect(formatCO2(0)).toBe('0.0');
    });
  });

  describe('getLevel', () => {
    it('returns Seedling for 0 kg saved', () => {
      expect(getLevel(0).title).toBe('Seedling');
    });
    it('returns Sapling for 10 kg saved', () => {
      expect(getLevel(10).title).toBe('Sapling');
    });
    it('returns Tree for 50 kg saved', () => {
      expect(getLevel(50).title).toBe('Tree');
    });
    it('returns Forest Guardian for 200 kg saved', () => {
      expect(getLevel(200).title).toBe('Forest Guardian');
    });
    it('returns Earth Champion for 500+ kg saved', () => {
      expect(getLevel(500).title).toBe('Earth Champion');
      expect(getLevel(500).next).toBeNull();
    });
    it('Earth Champion has 100% progress', () => {
      expect(getLevel(1000).progress).toBe(100);
    });
    it('progress is a number between 0 and 100', () => {
      const level = getLevel(25);
      expect(level.progress).toBeGreaterThanOrEqual(0);
      expect(level.progress).toBeLessThanOrEqual(100);
    });
  });

  describe('getCategoryColor', () => {
    it('returns blue class for transport', () => {
      expect(getCategoryColor('transport')).toContain('blue');
    });
    it('returns amber class for energy', () => {
      expect(getCategoryColor('energy')).toContain('amber');
    });
    it('returns green class for food', () => {
      expect(getCategoryColor('food')).toContain('green');
    });
    it('returns gray class for unknown category', () => {
      expect(getCategoryColor('unknown')).toContain('gray');
    });
  });
});

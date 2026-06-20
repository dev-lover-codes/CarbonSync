import { describe, it, expect } from 'vitest';
import {
  calcCarCO2,
  calcFlightCO2,
  calcBusCO2,
  calcBikeCO2,
  calcElectricityCO2,
  calcHeatingCO2,
  calcMeatMealCO2,
  calcVegMealCO2,
  calcShoppingCO2
} from '../utils/carbonCalculator';

describe('Calculator error paths', () => {
  const allCalculators = [
    calcCarCO2,
    calcFlightCO2,
    calcBusCO2,
    calcBikeCO2,
    calcElectricityCO2,
    calcHeatingCO2,
    calcMeatMealCO2,
    calcVegMealCO2
  ];

  it('returns 0 for string inputs across all single-argument calculators', () => {
    allCalculators.forEach(calc => {
      expect(calc('abc')).toBe(0);
      expect(calc('')).toBe(0);
    });
  });

  it('returns 0 for undefined inputs across all single-argument calculators', () => {
    allCalculators.forEach(calc => {
      expect(calc(undefined)).toBe(0);
    });
  });

  it('returns 0 for null inputs across all single-argument calculators', () => {
    allCalculators.forEach(calc => {
      expect(calc(null)).toBe(0);
    });
  });

  it('returns 0 for NaN inputs across all single-argument calculators', () => {
    allCalculators.forEach(calc => {
      expect(calc(NaN)).toBe(0);
    });
  });

  it('returns 0 for Infinity inputs across all single-argument calculators', () => {
    allCalculators.forEach(calc => {
      expect(calc(Infinity)).toBe(0);
      expect(calc(-Infinity)).toBe(0);
    });
  });

  it('returns 0 for negative inputs across all single-argument calculators', () => {
    allCalculators.forEach(calc => {
      expect(calc(-100)).toBe(0);
    });
  });

  it('handles very large numbers gracefully', () => {
    expect(calcCarCO2(1e12)).toBe(1e12 * 0.21);
    expect(calcFlightCO2(1e12)).toBe(1e12 * 0.255);
    expect(calcBusCO2(1e12)).toBe(1e12 * 0.089);
    expect(calcElectricityCO2(1e12)).toBe(1e12 * 0.82);
  });

  describe('calcShoppingCO2 specific error paths', () => {
    it('returns 0 for invalid item counts', () => {
      expect(calcShoppingCO2('abc', 'clothing')).toBe(0);
      expect(calcShoppingCO2(undefined, 'clothing')).toBe(0);
      expect(calcShoppingCO2(null, 'clothing')).toBe(0);
      expect(calcShoppingCO2(NaN, 'clothing')).toBe(0);
      expect(calcShoppingCO2(Infinity, 'clothing')).toBe(0);
      expect(calcShoppingCO2(-5, 'clothing')).toBe(0);
    });

    it('handles unknown shopping category gracefully', () => {
      expect(calcShoppingCO2(1, 'unknown_category')).toBe(0);
      expect(calcShoppingCO2(10, '')).toBe(0);
      expect(calcShoppingCO2(5, undefined)).toBe(0);
    });

    it('calculates valid categories correctly', () => {
      expect(calcShoppingCO2(2, 'electronics')).toBe(140);
      expect(calcShoppingCO2(3, 'clothing')).toBe(30);
      expect(calcShoppingCO2(4, 'groceries')).toBe(20);
      expect(calcShoppingCO2(5, 'other')).toBe(25);
    });
  });
});

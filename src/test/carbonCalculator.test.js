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

describe('Carbon Calculator', () => {
  // Happy path tests
  it('calculates car CO2 correctly', () => {
    expect(calcCarCO2(100)).toBe(21);
  });
  it('calculates flight CO2 correctly', () => {
    expect(calcFlightCO2(1000)).toBe(255);
  });
  it('calculates bus CO2 correctly', () => {
    expect(calcBusCO2(100)).toBeCloseTo(8.9);
  });
  it('calculates bike CO2 as zero', () => {
    expect(calcBikeCO2(100)).toBe(0);
  });
  it('calculates electricity CO2 correctly', () => {
    expect(calcElectricityCO2(10)).toBeCloseTo(8.2);
  });
  it('calculates heating CO2 correctly', () => {
    expect(calcHeatingCO2(10)).toBeCloseTo(2);
  });
  it('calculates meat meal CO2 correctly', () => {
    expect(calcMeatMealCO2(3)).toBeCloseTo(9.9);
  });
  it('calculates veg meal CO2 correctly', () => {
    expect(calcVegMealCO2(3)).toBeCloseTo(2.1);
  });
  it('calculates clothing shopping CO2 correctly', () => {
    expect(calcShoppingCO2(2, 'clothing')).toBe(20);
  });
  it('calculates electronics shopping CO2 correctly', () => {
    expect(calcShoppingCO2(1, 'electronics')).toBe(70);
  });
  it('calculates groceries CO2 correctly', () => {
    expect(calcShoppingCO2(5, 'groceries')).toBe(25);
  });

  // Edge cases
  it('handles zero km for car', () => {
    expect(calcCarCO2(0)).toBe(0);
  });
  it('handles zero meals for meat', () => {
    expect(calcMeatMealCO2(0)).toBe(0);
  });
  it('handles large values without overflow', () => {
    expect(calcFlightCO2(10000)).toBe(2550);
  });
  it('handles negative input gracefully for car', () => {
    expect(calcCarCO2(-10)).toBeLessThanOrEqual(0);
  });
  it('handles invalid hours for heating', () => {
    expect(calcHeatingCO2('invalid')).toBe(0);
    expect(calcHeatingCO2(null)).toBe(0);
  });
  it('bike CO2 is always zero regardless of distance', () => {
    expect(calcBikeCO2(9999)).toBe(0);
  });

  // ── Edge cases: NaN, Infinity, very large numbers ──────────────────────────
  describe('NaN inputs return 0', () => {
    it('calcCarCO2(NaN) → 0', () => { expect(calcCarCO2(NaN)).toBe(0); });
    it('calcFlightCO2(NaN) → 0', () => { expect(calcFlightCO2(NaN)).toBe(0); });
    it('calcBusCO2(NaN) → 0', () => { expect(calcBusCO2(NaN)).toBe(0); });
    it('calcBikeCO2(NaN) → 0', () => { expect(calcBikeCO2(NaN)).toBe(0); });
    it('calcElectricityCO2(NaN) → 0', () => { expect(calcElectricityCO2(NaN)).toBe(0); });
    it('calcHeatingCO2(NaN) → 0', () => { expect(calcHeatingCO2(NaN)).toBe(0); });
    it('calcMeatMealCO2(NaN) → 0', () => { expect(calcMeatMealCO2(NaN)).toBe(0); });
    it('calcVegMealCO2(NaN) → 0', () => { expect(calcVegMealCO2(NaN)).toBe(0); });
    it('calcShoppingCO2(NaN, "clothing") → 0', () => { expect(calcShoppingCO2(NaN, 'clothing')).toBe(0); });
  });

  describe('Infinity inputs return 0', () => {
    it('calcCarCO2(Infinity) → 0', () => { expect(calcCarCO2(Infinity)).toBe(0); });
    it('calcFlightCO2(Infinity) → 0', () => { expect(calcFlightCO2(Infinity)).toBe(0); });
    it('calcBusCO2(Infinity) → 0', () => { expect(calcBusCO2(Infinity)).toBe(0); });
    it('calcBikeCO2(Infinity) → 0', () => { expect(calcBikeCO2(Infinity)).toBe(0); });
    it('calcElectricityCO2(Infinity) → 0', () => { expect(calcElectricityCO2(Infinity)).toBe(0); });
    it('calcHeatingCO2(Infinity) → 0', () => { expect(calcHeatingCO2(Infinity)).toBe(0); });
    it('calcMeatMealCO2(Infinity) → 0', () => { expect(calcMeatMealCO2(Infinity)).toBe(0); });
    it('calcVegMealCO2(Infinity) → 0', () => { expect(calcVegMealCO2(Infinity)).toBe(0); });
    it('calcShoppingCO2(Infinity, "electronics") → 0', () => { expect(calcShoppingCO2(Infinity, 'electronics')).toBe(0); });
  });

  describe('Very large numbers (1e12) scale linearly', () => {
    it('calcCarCO2(1e12) is a finite positive number', () => {
      const result = calcCarCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcFlightCO2(1e12) is a finite positive number', () => {
      const result = calcFlightCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcBusCO2(1e12) is a finite positive number', () => {
      const result = calcBusCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcBikeCO2(1e12) is always 0', () => {
      expect(calcBikeCO2(1e12)).toBe(0);
    });
    it('calcElectricityCO2(1e12) is a finite positive number', () => {
      const result = calcElectricityCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcHeatingCO2(1e12) is a finite positive number', () => {
      const result = calcHeatingCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcMeatMealCO2(1e12) is a finite positive number', () => {
      const result = calcMeatMealCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcVegMealCO2(1e12) is a finite positive number', () => {
      const result = calcVegMealCO2(1e12);
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
    it('calcShoppingCO2(1e12, "groceries") is a finite positive number', () => {
      const result = calcShoppingCO2(1e12, 'groceries');
      expect(Number.isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });
  });
});

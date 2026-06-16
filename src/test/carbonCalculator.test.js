import { describe, it, expect } from 'vitest';
import {
  calcCarCO2,
  calcFlightCO2,
  calcBusCO2,
  calcBikeCO2,
  calcElectricityCO2,
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
  it('bike CO2 is always zero regardless of distance', () => {
    expect(calcBikeCO2(9999)).toBe(0);
  });
});

import { describe, it, expect } from 'vitest';
import {
  calcCarCO2, calcFlightCO2, calcBusCO2, calcElectricityCO2,
  calcMeatMealCO2, calcVegMealCO2, calcShoppingCO2, calcHeatingCO2
} from '../utils/carbonCalculator';

describe('Carbon Calculator - Additional Edge Cases', () => {
  // ── Type-coercion guards ──────────────────────────────────────────────────
  it('handles string input gracefully (type coercion guard)', () => {
    expect(calcCarCO2('100')).toBe(0);
  });

  it('handles NaN input', () => {
    expect(calcCarCO2(NaN)).toBe(0);
  });

  it('handles Infinity input', () => {
    expect(calcFlightCO2(Infinity)).toBe(0);
  });

  it('handles null input', () => {
    expect(calcBusCO2(null)).toBe(0);
  });

  it('handles undefined input', () => {
    expect(calcElectricityCO2(undefined)).toBe(0);
  });

  it('handles boolean input', () => {
    expect(calcMeatMealCO2(true)).toBe(0);
  });

  it('handles array input', () => {
    expect(calcVegMealCO2([1, 2, 3])).toBe(0);
  });

  // ── Shopping-specific edge cases ──────────────────────────────────────────
  // Note: unknown_category falls through every type branch and returns 0 (not
  // the groceries rate). The current implementation has no default fallback.
  it('shopping with unrecognized type returns 0', () => {
    expect(calcShoppingCO2(1, 'unknown_category')).toBe(0);
  });

  it('shopping with negative items returns 0', () => {
    expect(calcShoppingCO2(-5, 'clothing')).toBe(0);
  });

  // ── Boundary / extreme numeric values ────────────────────────────────────
  it('heating handles zero hours', () => {
    expect(calcHeatingCO2(0)).toBe(0);
  });

  it('very large electricity value does not overflow to Infinity', () => {
    const result = calcElectricityCO2(1_000_000);
    expect(Number.isFinite(result)).toBe(true);
  });

  it('very large car value does not overflow to Infinity', () => {
    expect(Number.isFinite(calcCarCO2(1_000_000))).toBe(true);
  });

  it('-Infinity returns 0 for all calculators', () => {
    expect(calcCarCO2(-Infinity)).toBe(0);
    expect(calcFlightCO2(-Infinity)).toBe(0);
    expect(calcBusCO2(-Infinity)).toBe(0);
  });

  it('object input returns 0', () => {
    expect(calcHeatingCO2({})).toBe(0);
    expect(calcMeatMealCO2({ value: 5 })).toBe(0);
  });

  it('zero is a valid input and returns 0 emissions', () => {
    expect(calcCarCO2(0)).toBe(0);
    expect(calcFlightCO2(0)).toBe(0);
    expect(calcMeatMealCO2(0)).toBe(0);
    expect(calcElectricityCO2(0)).toBe(0);
  });

  it('shopping with zero items returns 0', () => {
    expect(calcShoppingCO2(0, 'electronics')).toBe(0);
    expect(calcShoppingCO2(0, 'clothing')).toBe(0);
    expect(calcShoppingCO2(0, 'groceries')).toBe(0);
  });
});

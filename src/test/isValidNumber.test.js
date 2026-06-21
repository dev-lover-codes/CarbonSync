import { describe, it, expect } from 'vitest';
import { isValidNumber } from '../utils/carbonCalculator';

describe('isValidNumber (exported helper)', () => {
  // ── Valid inputs ─────────────────────────────────────────────────────────
  it('returns true for a positive integer', () => {
    expect(isValidNumber(42)).toBe(true);
  });

  it('returns true for a positive float', () => {
    expect(isValidNumber(3.14)).toBe(true);
  });

  it('returns true for zero', () => {
    expect(isValidNumber(0)).toBe(true);
  });

  it('returns true for a very large finite number', () => {
    expect(isValidNumber(1e15)).toBe(true);
  });

  // ── Invalid inputs ───────────────────────────────────────────────────────
  it('returns false for a negative number', () => {
    expect(isValidNumber(-1)).toBe(false);
  });

  it('returns false for NaN', () => {
    expect(isValidNumber(NaN)).toBe(false);
  });

  it('returns false for Infinity', () => {
    expect(isValidNumber(Infinity)).toBe(false);
  });

  it('returns false for -Infinity', () => {
    expect(isValidNumber(-Infinity)).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isValidNumber('100')).toBe(false);
  });

  it('returns false for null', () => {
    expect(isValidNumber(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isValidNumber(undefined)).toBe(false);
  });

  it('returns false for a boolean', () => {
    expect(isValidNumber(true)).toBe(false);
    expect(isValidNumber(false)).toBe(false);
  });

  it('returns false for an object', () => {
    expect(isValidNumber({})).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isValidNumber([])).toBe(false);
  });
});

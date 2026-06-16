import { describe, it, expect } from 'vitest';
import { calculateFootprint, carbonFactors } from '../config/carbonFactors';

describe('Carbon Factors Config', () => {
  it('has transport category with required types', () => {
    expect(carbonFactors.transport).toBeDefined();
    expect(carbonFactors.transport.car_petrol_km).toBeDefined();
    expect(carbonFactors.transport.bus_km).toBeDefined();
    expect(carbonFactors.transport.flight_km).toBeDefined();
  });

  it('has food category with required types', () => {
    expect(carbonFactors.food).toBeDefined();
    expect(carbonFactors.food.beef_meal).toBeDefined();
    expect(carbonFactors.food.vegan_meal).toBeDefined();
  });

  it('has energy category with electricity', () => {
    expect(carbonFactors.energy).toBeDefined();
    expect(carbonFactors.energy.electricity_kwh).toBeDefined();
  });

  it('calculates footprint for single activity', () => {
    const activities = [
      { category: 'transport', type: 'car_petrol_km', amount: 100 }
    ];
    const result = calculateFootprint(activities);
    expect(result).toBeCloseTo(21);
  });

  it('calculates footprint for multiple activities', () => {
    const activities = [
      { category: 'transport', type: 'car_petrol_km', amount: 50 },
      { category: 'food', type: 'beef_meal', amount: 2 },
    ];
    const result = calculateFootprint(activities);
    expect(result).toBeGreaterThan(0);
  });

  it('returns 0 for empty activities array', () => {
    expect(calculateFootprint([])).toBe(0);
  });

  it('ignores unknown category gracefully', () => {
    const activities = [
      { category: 'unknown', type: 'unknown_type', amount: 100 }
    ];
    expect(calculateFootprint(activities)).toBe(0);
  });

  it('ignores unknown type within valid category', () => {
    const activities = [
      { category: 'transport', type: 'teleportation_km', amount: 100 }
    ];
    expect(calculateFootprint(activities)).toBe(0);
  });

  it('bike and walk have zero emission factor', () => {
    expect(carbonFactors.transport.bike_km).toBe(0);
    expect(carbonFactors.transport.walk_km).toBe(0);
  });

  it('recycling has negative factor (offset)', () => {
    expect(carbonFactors.waste.recycled_kg).toBeLessThan(0);
  });
});

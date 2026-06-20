import { describe, it, expect } from 'vitest';
import { tapEffect } from '../utils/animations';

describe('animations', () => {
  describe('tapEffect', () => {
    it('exports tapEffect as an object', () => {
      expect(tapEffect).toBeDefined();
      expect(typeof tapEffect).toBe('object');
    });

    it('has a whileHover key', () => {
      expect(tapEffect).toHaveProperty('whileHover');
    });

    it('has a whileTap key', () => {
      expect(tapEffect).toHaveProperty('whileTap');
    });

    it('has a transition key', () => {
      expect(tapEffect).toHaveProperty('transition');
    });

    it('whileHover contains scale and y properties', () => {
      expect(tapEffect.whileHover).toHaveProperty('scale');
      expect(tapEffect.whileHover).toHaveProperty('y');
    });

    it('whileTap contains scale and y properties', () => {
      expect(tapEffect.whileTap).toHaveProperty('scale');
      expect(tapEffect.whileTap).toHaveProperty('y');
    });

    it('transition contains type, stiffness, and damping properties', () => {
      expect(tapEffect.transition).toHaveProperty('type');
      expect(tapEffect.transition).toHaveProperty('stiffness');
      expect(tapEffect.transition).toHaveProperty('damping');
    });

    it('has expected whileHover values', () => {
      expect(tapEffect.whileHover.scale).toBe(1.02);
      expect(tapEffect.whileHover.y).toBe(-2);
    });

    it('has expected whileTap values', () => {
      expect(tapEffect.whileTap.scale).toBe(0.98);
      expect(tapEffect.whileTap.y).toBe(0);
    });

    it('has expected transition values', () => {
      expect(tapEffect.transition.type).toBe('spring');
      expect(tapEffect.transition.stiffness).toBe(500);
      expect(tapEffect.transition.damping).toBe(15);
    });
  });
});

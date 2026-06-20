import { Car, Zap, Utensils, ShoppingBag, Trash2, Leaf } from 'lucide-react';

/**
 * Formats a CO₂ value in kilograms to a one-decimal-place string.
 * Returns '0.0' for missing or null values.
 *
 * @param {number|null|undefined} kg - CO₂ amount in kilograms.
 * @returns {string} Formatted string with one decimal place (e.g. '3.7').
 */
export const formatCO2 = (kg) => {
  if (kg === undefined || kg === null) return '0.0';
  return Number(kg).toFixed(1);
};

/**
 * Converts a Firestore Timestamp or plain Date into a human-readable
 * relative time string (e.g. 'Just now', '5m ago', '2h ago', '3d ago').
 * Falls back to a 'Mon DD' locale string for timestamps older than 7 days.
 *
 * @param {import('firebase/firestore').Timestamp|Date|null} timestamp - The timestamp to format.
 * @returns {string} Relative time string, or empty string when timestamp is falsy.
 */
export const getTimeAgo = (timestamp) => {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

/**
 * Returns a Tailwind CSS class pair (text + background) for a given activity category.
 *
 * @param {'transport'|'energy'|'food'|'shopping'|'waste'|string} category - Activity category key.
 * @returns {string} Tailwind class string, e.g. 'text-blue-600 bg-blue-100'. Defaults to gray.
 */
export const getCategoryColor = (category) => {
  const colors = {
    transport: 'text-blue-600 bg-blue-100',
    energy: 'text-amber-600 bg-amber-100',
    food: 'text-green-600 bg-green-100',
    shopping: 'text-purple-600 bg-purple-100',
    waste: 'text-teal-600 bg-teal-100'
  };
  return colors[category] || 'text-gray-600 bg-gray-100';
};

/**
 * Returns the Lucide React icon component associated with an activity category.
 *
 * @param {'transport'|'energy'|'food'|'shopping'|'waste'|string} category - Activity category key.
 * @returns {React.ComponentType} A Lucide icon component. Defaults to Leaf for unknown categories.
 */
export const getCategoryIcon = (category) => {
  switch (category) {
    case 'transport': return Car;
    case 'energy': return Zap;
    case 'food': return Utensils;
    case 'shopping': return ShoppingBag;
    case 'waste': return Trash2;
    default: return Leaf;
  }
};

/**
 * Calculates the user's gamification level based on total CO₂ saved.
 * Returns the current level title, the kg threshold needed to reach the next level,
 * and a progress percentage towards the next level.
 *
 * @param {number} [totalSaved=0] - Total kilograms of CO₂ saved by the user.
 * @returns {{ title: string, next: number|null, progress: number }}
 *   - title:    Display name of the current level (e.g. 'Sapling').
 *   - next:     kg threshold of the next level, or null if already at max.
 *   - progress: Percentage (0–100) of progress towards the next level.
 */
export const getLevel = (totalSaved = 0) => {
  if (totalSaved >= 500) return { title: 'Earth Champion', next: null, progress: 100 };
  if (totalSaved >= 200) return { title: 'Forest Guardian', next: 500, progress: (totalSaved / 500) * 100 };
  if (totalSaved >= 50) return { title: 'Tree', next: 200, progress: (totalSaved / 200) * 100 };
  if (totalSaved >= 10) return { title: 'Sapling', next: 50, progress: (totalSaved / 50) * 100 };
  return { title: 'Seedling', next: 10, progress: (totalSaved / 10) * 100 };
};
import { Car, Zap, Utensils, ShoppingBag, Trash2 } from 'lucide-react';

export const formatCO2 = (kg) => {
  if (kg === undefined || kg === null) return '0.0';
  return Number(kg).toFixed(1);
};

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

export const getLevel = (totalSaved = 0) => {
  if (totalSaved >= 500) return { title: 'Earth Champion', next: null, progress: 100 };
  if (totalSaved >= 200) return { title: 'Forest Guardian', next: 500, progress: (totalSaved / 500) * 100 };
  if (totalSaved >= 50) return { title: 'Tree', next: 200, progress: (totalSaved / 200) * 100 };
  if (totalSaved >= 10) return { title: 'Sapling', next: 50, progress: (totalSaved / 50) * 100 };
  return { title: 'Seedling', next: 10, progress: (totalSaved / 10) * 100 };
};
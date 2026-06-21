import { Car, Zap, Utensils, ShoppingBag, Trash2 } from 'lucide-react';

export const CATEGORIES = [
  { id: 'transport', label: 'Transport', icon: Car, color: '#3B82F6' },
  { id: 'energy', label: 'Energy', icon: Zap, color: '#F59E0B' },
  { id: 'food', label: 'Food', icon: Utensils, color: '#10B981' },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag, color: '#8B5CF6' },
  { id: 'waste', label: 'Waste', icon: Trash2, color: '#14B8A6' },
];

export const TYPE_LABELS = {
  car_petrol_km: 'Car (Petrol)',
  car_diesel_km: 'Car (Diesel)',
  bus_km: 'Bus',
  train_km: 'Train',
  flight_km: 'Flight',
  bike_km: 'Bicycle',
  walk_km: 'Walking',
  electricity_kwh: 'Electricity',
  gas_cubic_m: 'Natural Gas',
  ac_hour: 'Air Conditioning',
  beef_meal: 'Beef Meal',
  chicken_meal: 'Chicken Meal',
  vegetarian_meal: 'Vegetarian Meal',
  vegan_meal: 'Vegan Meal',
  fish_meal: 'Fish Meal',
  clothing_item: 'Clothing',
  electronics_item: 'Electronics',
  furniture_item: 'Furniture',
  recycled_kg: 'Recycling',
  landfill_kg: 'Landfill Waste',
  compost_kg: 'Compost'
};

export const TYPE_UNITS = {
  car_petrol_km: 'km',
  car_diesel_km: 'km',
  bus_km: 'km',
  train_km: 'km',
  flight_km: 'km',
  bike_km: 'km',
  walk_km: 'km',
  electricity_kwh: 'kWh',
  gas_cubic_m: 'm³',
  ac_hour: 'hours',
  beef_meal: 'meals',
  chicken_meal: 'meals',
  vegetarian_meal: 'meals',
  vegan_meal: 'meals',
  fish_meal: 'meals',
  clothing_item: 'items',
  electronics_item: 'items',
  furniture_item: 'items',
  recycled_kg: 'kg',
  landfill_kg: 'kg',
  compost_kg: 'kg'
};

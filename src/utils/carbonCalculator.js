// Input validation helper — shared guard across all calculator functions
const isValidNumber = (v) => typeof v === 'number' && !isNaN(v) && v >= 0;

export const calcCarCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return km * 0.21;
};

export const calcFlightCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return km * 0.255;
};

export const calcBusCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return km * 0.089;
};

export const calcBikeCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return 0;
};

export const calcElectricityCO2 = (kwh) => {
  if (!isValidNumber(kwh)) return 0;
  return kwh * 0.82;
};

export const calcHeatingCO2 = (hours) => {
  if (!isValidNumber(hours)) return 0;
  return hours * 0.2;
};

export const calcMeatMealCO2 = (meals) => {
  if (!isValidNumber(meals)) return 0;
  return meals * 3.3;
};

export const calcVegMealCO2 = (meals) => {
  if (!isValidNumber(meals)) return 0;
  return meals * 0.7;
};

export const calcShoppingCO2 = (items, type) => {
  if (!isValidNumber(items)) return 0;
  if (type === 'electronics') return items * 70;
  if (type === 'clothing') return items * 10;
  return items * 5; // groceries/other
};

export const INDIAN_ANNUAL_AVERAGE = 1800; // kg/year
export const GLOBAL_ANNUAL_AVERAGE = 4000; // kg/year

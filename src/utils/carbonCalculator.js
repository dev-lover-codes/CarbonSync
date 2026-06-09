export const calcCarCO2 = (km) => km * 0.21;
export const calcFlightCO2 = (km) => km * 0.255;
export const calcBusCO2 = (km) => km * 0.089;
export const calcBikeCO2 = (km) => 0;
export const calcElectricityCO2 = (kwh) => kwh * 0.82;
export const calcHeatingCO2 = (hours) => hours * 0.2; // Note: prompt says kwh, but page says hours, let's keep name/param as hours or kwh
export const calcMeatMealCO2 = (meals) => meals * 3.3;
export const calcVegMealCO2 = (meals) => meals * 0.7;

export const calcShoppingCO2 = (items, type) => {
  if (type === 'electronics') return items * 70;
  if (type === 'clothing') return items * 10;
  return items * 5; // groceries/other
};

export const INDIAN_ANNUAL_AVERAGE = 1800; // kg/year
export const GLOBAL_ANNUAL_AVERAGE = 4000; // kg/year

import {
  CAR_CO2_FACTOR,
  FLIGHT_CO2_FACTOR,
  BUS_CO2_FACTOR,
  ELECTRICITY_CO2_FACTOR,
  HEATING_CO2_FACTOR,
  MEAT_MEAL_CO2_FACTOR,
  VEG_MEAL_CO2_FACTOR,
  SHOPPING_ELECTRONICS_CO2_FACTOR,
  SHOPPING_CLOTHING_CO2_FACTOR,
  SHOPPING_GROCERIES_OTHER_CO2_FACTOR,
  INDIAN_ANNUAL_AVERAGE as CONST_INDIAN_ANNUAL_AVERAGE,
  GLOBAL_ANNUAL_AVERAGE as CONST_GLOBAL_ANNUAL_AVERAGE
} from '../config/constants';

// Re-export constants to maintain compatibility
/** @type {number} Average annual CO₂ footprint for an Indian citizen in kg/year (1 800 kg). */
export const INDIAN_ANNUAL_AVERAGE = CONST_INDIAN_ANNUAL_AVERAGE;
/** @type {number} Global average annual CO₂ footprint per person in kg/year (4 000 kg). */
export const GLOBAL_ANNUAL_AVERAGE = CONST_GLOBAL_ANNUAL_AVERAGE;

/**
 * Validates that a value is a safe, non-negative finite number.
 * Used as an input guard across all calculator functions.
 * @param {*} val - The value to check.
 * @returns {boolean} True only for non-negative finite numbers.
 */
export function isValidNumber(val) {
  return typeof val === 'number' && Number.isFinite(val) && val >= 0;
}

/**
 * Calculates CO2 emissions for car travel in kg.
 * @param {number} km - Distance traveled in kilometers.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcCarCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return km * CAR_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for flight travel in kg.
 * @param {number} km - Distance traveled in kilometers.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcFlightCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return km * FLIGHT_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for bus travel in kg.
 * @param {number} km - Distance traveled in kilometers.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcBusCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return km * BUS_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for bike travel in kg (always 0).
 * @param {number} km - Distance traveled in kilometers.
 * @returns {number} CO2 emissions in kg (always 0). Returns 0 for invalid input.
 */
export const calcBikeCO2 = (km) => {
  if (!isValidNumber(km)) return 0;
  return 0;
};

/**
 * Calculates CO2 emissions for electricity consumption in kg.
 * @param {number} kwh - Electricity used in kilowatt-hours.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcElectricityCO2 = (kwh) => {
  if (!isValidNumber(kwh)) return 0;
  return kwh * ELECTRICITY_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for home heating in kg.
 * @param {number} hours - Number of heating hours.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcHeatingCO2 = (hours) => {
  if (!isValidNumber(hours)) return 0;
  return hours * HEATING_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for a meat-based meal in kg.
 * @param {number} meals - Number of meat meals.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcMeatMealCO2 = (meals) => {
  if (!isValidNumber(meals)) return 0;
  return meals * MEAT_MEAL_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for a vegetarian meal in kg.
 * @param {number} meals - Number of vegetarian meals.
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input.
 */
export const calcVegMealCO2 = (meals) => {
  if (!isValidNumber(meals)) return 0;
  return meals * VEG_MEAL_CO2_FACTOR;
};

/**
 * Calculates CO2 emissions for shopping items in kg.
 * @param {number} items - Number of items purchased.
 * @param {string} type - Category type of items (electronics, clothing, groceries, other).
 * @returns {number} CO2 emissions in kg. Returns 0 for invalid input or unknown category.
 */
export const calcShoppingCO2 = (items, type) => {
  if (!isValidNumber(items)) return 0;
  if (type === 'electronics') return items * SHOPPING_ELECTRONICS_CO2_FACTOR;
  if (type === 'clothing') return items * SHOPPING_CLOTHING_CO2_FACTOR;
  if (type === 'groceries' || type === 'other') return items * SHOPPING_GROCERIES_OTHER_CO2_FACTOR;
  return 0;
};

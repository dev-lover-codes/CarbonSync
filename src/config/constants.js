// CarbonSync Constants Configuration

// ── Emission Factors (kg CO₂ per unit) ────────────────────────────────────

/** @type {number} CO₂ emitted per km driven in a petrol car (kg). */
export const CAR_CO2_FACTOR = 0.21;

/** @type {number} CO₂ emitted per km of air travel (kg). */
export const FLIGHT_CO2_FACTOR = 0.255;

/** @type {number} CO₂ emitted per km travelled by bus (kg). */
export const BUS_CO2_FACTOR = 0.089;

/** @type {number} CO₂ emitted per kWh of electricity consumed (kg). */
export const ELECTRICITY_CO2_FACTOR = 0.82;

/** @type {number} CO₂ emitted per hour of home heating (kg). */
export const HEATING_CO2_FACTOR = 0.2;

/** @type {number} CO₂ equivalent per meat-based meal (kg). */
export const MEAT_MEAL_CO2_FACTOR = 3.3;

/** @type {number} CO₂ equivalent per vegetarian meal (kg). */
export const VEG_MEAL_CO2_FACTOR = 0.7;

/** @type {number} CO₂ emitted per electronics item purchased (kg). */
export const SHOPPING_ELECTRONICS_CO2_FACTOR = 70;

/** @type {number} CO₂ emitted per clothing item purchased (kg). */
export const SHOPPING_CLOTHING_CO2_FACTOR = 10;

/** @type {number} CO₂ emitted per grocery/other item purchased (kg). */
export const SHOPPING_GROCERIES_OTHER_CO2_FACTOR = 5;

// ── Annual averages (kg CO₂/year) ─────────────────────────────────────────

/** @type {number} Average annual CO₂ footprint for an Indian citizen (kg/year). */
export const INDIAN_ANNUAL_AVERAGE = 1800;

/** @type {number} Global average annual CO₂ footprint per person (kg/year). */
export const GLOBAL_ANNUAL_AVERAGE = 4000;

// ── Conversion ratios ──────────────────────────────────────────────────────

/** @type {number} Number of smartphone charges equivalent to 1 kg of CO₂. */
export const SMARTPHONE_CHARGE_CO2_RATIO = 4.3;

// ── Thresholds ────────────────────────────────────────────────────────────

/** @type {number} Single-activity CO₂ threshold (kg) above which an activity is flagged high-emission. */
export const HIGH_EMISSION_THRESHOLD_KG = 5;

/** @type {number} Recommended daily CO₂ budget per user (kg). */
export const DAILY_BUDGET_CO2_KG = 15;

// ── Gamification Level Thresholds (total kg CO₂ saved) ───────────────────

/** @type {number} Minimum kg CO₂ saved to reach the Forest level. */
export const LEVEL_FOREST_THRESHOLD = 500;

/** @type {number} Minimum kg CO₂ saved to reach the Tree level. */
export const LEVEL_TREE_THRESHOLD = 250;

/** @type {number} Minimum kg CO₂ saved to reach the Sapling level. */
export const LEVEL_SAPLING_THRESHOLD = 100;

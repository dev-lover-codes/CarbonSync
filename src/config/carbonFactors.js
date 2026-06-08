// CO2 emission factors (in kg CO2 per unit)
export const carbonFactors = {
  transport: {
    car_petrol_km: 0.21,
    car_diesel_km: 0.17,
    bus_km: 0.089,
    train_km: 0.041,
    flight_km: 0.255,
    bike_km: 0,
    walk_km: 0
  },
  energy: {
    electricity_kwh: 0.82,
    gas_cubic_m: 2.0,
    ac_hour: 0.5
  },
  food: {
    beef_meal: 6.61,
    chicken_meal: 1.57,
    vegetarian_meal: 0.5,
    vegan_meal: 0.3,
    fish_meal: 1.96
  },
  shopping: {
    clothing_item: 10.0,
    electronics_item: 70.0,
    furniture_item: 50.0
  },
  waste: {
    recycled_kg: -0.5, // Negative as it offsets emissions
    landfill_kg: 0.5,
    compost_kg: -0.3
  }
};

/**
 * Calculates total carbon footprint from an array of activities.
 * @param {Array} activities - Array of objects { type, category, amount }
 * @returns {number} - Total CO2 in kg
 */
export const calculateFootprint = (activities) => {
  return activities.reduce((total, activity) => {
    const { category, type, amount } = activity;
    
    if (carbonFactors[category] && carbonFactors[category][type] !== undefined) {
      const factor = carbonFactors[category][type];
      return total + (factor * amount);
    }
    
    return total;
  }, 0);
};

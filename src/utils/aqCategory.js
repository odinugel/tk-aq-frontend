// Pollutant thresholds from:
// https://luftkvalitet.miljodirektoratet.no/artikkel/artikler/helserad_og_forurensningsklasser/#Forurensningsklasser

export default function aqCategory(pollutant, pollutantValue) {
  const aqConstants = {
    PM10: {
      good: 60,
      moderate: 120,
      poor: 400,
    },
    PM25: {
      good: 30,
      moderate: 50,
      poor: 150,
    },
    NO2: {
      good: 100,
      moderate: 200,
      poor: 400,
    },
    O3: {
      good: 100,
      moderate: 180,
      poor: 240,
    },

  };
  // 1: Good/God
  // 2: Moderate/Moderat
  // 3: Poor/Dårlig
  // 4: Very Poor/Veldig dårlig
  // Numerical values are used in order to sort
  if (pollutantValue < aqConstants[pollutant].good) { return 1; }
  if (pollutantValue < aqConstants[pollutant].moderate) { return 2; }
  if (pollutantValue < aqConstants[pollutant].poor) { return 3; }
  return 4;
}

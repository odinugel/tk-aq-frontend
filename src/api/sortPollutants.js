// Sort pollutants first according to their percentage values, then by their category
// Double sorting is needed as each pollutant has proportionally different thresholds
// Without it, the overall air quality could render as 'good' even when an individual pollutant
// is categorized as 'moderate'
export default function sortPollutants(pollutants) {
  return pollutants
    .sort((pollutant, prevPollutant) => prevPollutant.percentage - pollutant.percentage)
    .sort((pollutant, prevPollutant) => prevPollutant.category - pollutant.category);
}

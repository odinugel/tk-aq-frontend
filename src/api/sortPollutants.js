export default function sortPollutants(pollutants) {
  return pollutants
    .sort((pollutant, prevPollutant) => prevPollutant.percentage - pollutant.percentage)
    .sort((pollutant, prevPollutant) => prevPollutant.category - pollutant.category);
}

export default function sortPollutants(pollutants) {
  // TODO: Sort pollutants by category in addition to percentage,
  // change category from string to number in order to sort by category
  return pollutants
    .sort((pollutant, prevPollutant) => prevPollutant.percentage - pollutant.percentage)
    .sort((pollutant, prevPollutant) => prevPollutant.category - pollutant.category);
}

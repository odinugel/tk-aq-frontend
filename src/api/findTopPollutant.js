// TODO: learn jsDoc
// finds the top pollutant by value, needs a pollutants object with
// pollutantName: value
// strictly speaking this function only requires an object with numerical values
// and returns a new object with the name and value of the property with the highest value.
export default function findTopPollutant(pollutants) {
  const topPollutantKey = Object.keys(pollutants)
    .reduce((a, b) => (pollutants[a] > pollutants[b] ? a : b));

  return {
    pollutant: topPollutantKey,
    value: pollutants[topPollutantKey],
  };
}

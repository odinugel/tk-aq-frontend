// TODO: learn jsDoc
// this function loops through a pollutants object returned by pollutionToPercentage.js
// and returns a new object with the name and value of the pollutant with the highest value
export default function findTopPollutant(pollutants) {
  let highestValue = 0;
  let pollutantName = '';
  let category = '';

  Object.keys(pollutants).forEach((pollutant) => {
    if (pollutants[pollutant].percentage > highestValue) {
      pollutantName = pollutant;
      highestValue = pollutants[pollutant].percentage;
      category = pollutants[pollutant].category;
    }
  });
  return { pollutant: pollutantName, value: highestValue, category };
}

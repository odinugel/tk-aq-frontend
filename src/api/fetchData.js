import pollutionToPercentage from './pollutionToPercentage';
import sortPollutants from './sortPollutants';

const fetchData = async (sensorID, setData, setLoading, setFetchFailed) => {
  try {
    // fetch is run through proxy due to CORS on TK-servers, must be changed before production
    const url = 'https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/';
    const proxy = 'http://localhost:8080/';
    const timeNow = new Date();
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 200);
    const from = `from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`;

    const response = await Promise.all([
      fetch(`${proxy}${url}${sensorID}/dust?${from}`),
      fetch(`${proxy}${url}${sensorID}/gases?${from}`),
    ]);
    // we return false in case of a bad response
    const responseJSON = await Promise.all(response.map((res) => (res.ok ? res.json() : false)));
    // if a response  contains an empty array, we return false
    const data = responseJSON.map((res) => (res.length !== 0 ? res : false));

    // if dust or gas response was empty or a bad response,
    // throw error, set fetchFailed to true
    if (!data[0] || !data[1]) {
      throw Error('Missing dust/gas values');
    }
    // dust, gas and weather data is ordered oldest to newest so we reverse it here.
    const dustReversed = data[0].slice().reverse();
    const gasReversed = data[1].slice().reverse();
    const pollutants = pollutionToPercentage(dustReversed, gasReversed);
    const sortedPollutants = sortPollutants(pollutants);
    setData({
      sensorID,
      pollutants: sortedPollutants,
      topPollutant: sortedPollutants[0],
      // assuming gas and dust are always in sync, probably not the case.
      timestamp: dustReversed[0].timestamp,
    });
    setLoading(false);
  } catch (e) {
    setFetchFailed(true);
    throw Error(`Fetch failed ${e} `);
  }
};

export default fetchData;

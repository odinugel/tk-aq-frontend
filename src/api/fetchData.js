import pollutionToPercentage from './pollutionToPercentage';
import sortPollutants from './sortPollutants';

const fetchData = async (sensorID, sensors, setData, setLoading, setFetchFailed) => {
  try {
    // fetch is run through proxy due to CORS on TK-servers, must be changed before production
    const url = 'https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/';
    const proxy = 'http://localhost:8080/';
    const timeNow = new Date();
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
    const from = `from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`;

    const response = await Promise.all([
      fetch(`${proxy}${url}${sensorID}/dust?${from}`),
      fetch(`${proxy}${url}${sensorID}/gases?${from}`),
      fetch(`${proxy}${url}${sensorID}/weather?${from}`),
    ]);
    // we return false in case of a bad response
    const data = await Promise.all(response.map((res) => (res.ok ? res.json() : false)));

    if (!data[0] || !data[1]) {
      throw Error('Bad response: Missing dust/gas values');
    }
    // dust, gas and weather data is ordered oldest to newest so we reverse it here.
    const dustReversed = data[0].slice().reverse();
    const gasReversed = data[1].slice().reverse();
    const weatherReversed = data[2].data.slice().reverse();

    // as long as dust and gas can be displayed,
    // they should be, weather is optional
    // (if there is no data, the response will be an empty array)
    if (dustReversed.length !== 0 && gasReversed.length !== 0) {
      const pollutants = pollutionToPercentage(dustReversed, gasReversed);
      const sortedPollutants = sortPollutants(pollutants);
      setData({
        sensors,
        sensorID,
        pollutants: sortedPollutants,
        topPollutant: sortedPollutants[0],
        weather: weatherReversed[0] ?? { temperature: ' ', humidity: ' ' },
        // assuming gas and dust are always in sync, probably not the case.
        timestamp: dustReversed[0].timestamp,
      });
      setLoading(false);
    } else {
      setFetchFailed(true);
      throw Error('Missing data: Missing dust/gas values');
    }
  } catch (e) {
    setFetchFailed(true);
    throw Error(`Fetch failed ${e} `);
  }
};

export default fetchData;

import findTopPollutant from './findTopPollutant';
import pollutionToPercentage from './pollutionToPercentage';

const fetchData = async (sensorID, sensors, setData, setLoading, setFetchFailed) => {
  try {
    // fetch is run through proxy due to CORS on TK-servers, must be changed before production
    const url = 'https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/';
    const proxy = 'http://localhost:8080/';
    const timeNow = new Date();
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

    const response = await Promise.all([
      fetch(`${proxy}${url}${sensorID}/dust?from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`),
      fetch(`${proxy}${url}${sensorID}/gases?from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`),
      fetch(`${proxy}${url}${sensorID}/weather?from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`),
    ]);
    // we return false in case of a bad response
    // TODO: returning false here does nothing, we never check if data[0] is false
    const data = await Promise.all(response.map((res) => (res.ok ? res.json() : false)));

    // dust, gas and weather data is ordered oldest to newest so we reverse it here.
    // even though the response was ok, data could still be []
    const dustReversed = data[0].length !== 0 ? data[0].slice().reverse() : false;
    const gasReversed = data[1].length !== 0 ? data[1].slice().reverse() : false;
    const weatherReversed = data[2].length !== 0 ? data[2].data.slice().reverse() : false;

    // as long as dust and gas can be displayed,
    // they should be, weather is optional (ask about this)
    if (dustReversed && gasReversed) {
      const pollutants = pollutionToPercentage(dustReversed, gasReversed);
      const topPollutant = findTopPollutant(pollutants);
      setData({
        topPollutant,
        pollutants,
        sensors,
        sensorID,
        weather: weatherReversed[0] ? weatherReversed[0] : { temperature: ' ', humidity: ' ' },
        // assuming gas and dust are always in sync, probably not the case.
        timestamp: dustReversed[0].timestamp,
      });
      setLoading(false);
    } else {
      setFetchFailed(true);
    }
  } catch (e) {
    throw Error(`Promise failed${ e}`);
  }
};

export default fetchData;

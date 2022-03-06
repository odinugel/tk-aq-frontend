import findTopPollutant from './findTopPollutant';
import pollutionToPercentage from './pollutionToPercentage';

const fetchData = async (setData, setLoading) => {
  try {
    // fetch is run through proxy due to CORS on TK-servers, must be changed before production
    const proxy = 'http://localhost:8080/';
    const sensor = '17dh0cf43jg89l';
    const timeNow = new Date();
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

    const res = await Promise.all([
      fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/${sensor}/dust?from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`),
      fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/${sensor}/gases?from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`),
      fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/${sensor}/weather?from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`),
      fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors`),
    ]);
    const data = await Promise.all(res.map((r) => r.json()));

    const dustReversed = data[0].slice().reverse();
    const gasReversed = data[1].slice().reverse();
    const weatherReversed = data[2].data.slice().reverse();

    const pollutants = pollutionToPercentage(dustReversed, gasReversed);
    const topPollutant = findTopPollutant(pollutants);

    setData({
      topPollutant,
      pollutants,
      weather: weatherReversed[0],
      sensors: data[3],
      // assuming gas and dust are always in sync, probably not the case.
      timestamp: dustReversed[0].timestamp,
      sensorID: sensor,
      rawGas: dustReversed,
      rawDust: gasReversed,
      rawWeather: weatherReversed,
    });
    setLoading(false);
  } catch (e) {
    throw Error(`Promise failed${ e}`);
  }
};

export default fetchData;

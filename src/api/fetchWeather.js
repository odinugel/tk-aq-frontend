const fetchWeather = async (sensorID, setWeather, setLoading, abortController) => {
  // fetch is run through proxy due to CORS on TK-servers, must be changed before production
  const proxy = 'http://localhost:8080/';
  const url = 'https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/';
  const timeNow = new Date();
  const twoHoursAgo = new Date();
  twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
  const from = `from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`;
  const response = await fetch(`${proxy}${url}${sensorID}/weather?${from}`, { signal: abortController.signal });

  if (response.ok) {
    const weather = await response.json();
    // if temperature and humidity are both 0, this indicates a lack of data
    // and so we return to avoid displaying bad data
    if (weather.data[0].temperature === 0 && weather.data[0].humidity === 0) {
      return;
    }
    if (weather.data.length !== 0) {
      setWeather(weather.data.slice().reverse()[0]);
      setLoading(false);
    }
  }
};

export default fetchWeather;

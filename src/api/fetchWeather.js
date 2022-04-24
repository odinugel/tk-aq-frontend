const fetchWeather = async (sensorID, setWeather, setLoading) => {
  const proxy = 'http://localhost:8080/';
  const timeNow = new Date();
  const twoHoursAgo = new Date();
  twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
  const from = `from=${Date.parse(twoHoursAgo)}&to=${Date.parse(timeNow)}&dataPointSize=hour`;
  const response = await fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/${sensorID}/weather?${from}`);
  if (response.ok) {
    const weather = await response.json();
    if (weather.data.length !== 0) {
      setWeather(weather.data.slice().reverse()[0]);
      setLoading(false);
    }
  }
};

export default fetchWeather;

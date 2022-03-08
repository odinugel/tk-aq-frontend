import PropTypes from 'prop-types';

export default function RawData({
  data,
}) {
  const {
    rawWeather,
    sensors,
    pollutants,
    timestamp,
    sensorID,
    rawGas,
    rawDust,
  } = data;

  const {
    PM10,
    PM25,
    O3,
    NO2,
  } = pollutants;

  const {
    temperature,
    humidity,
    precipitation,
  } = rawWeather;

  const date = new Date(timestamp);
  const sortedsensors = sensors.sort((a, b) => a.deviceNo - b.deviceNo);
  return (
    <>
      <h2>
        Sensor ID:
        {' '}
        {sensorID}
        {' '}
        fetched:
        {' '}
        {date.toUTCString()}
      </h2>
      <h3>Dust values</h3>
      <p>
        PM10 value:
        {' '}
        {PM10.realValue}
        <br />
        PM2.5 value:
        {' '}
        {PM25.realValue}
      </p>
      <h3>Gas values</h3>
      <p>
        NO2 value:
        {' '}
        {NO2.realValue}
        <br />
        O3 value:
        {' '}
        {O3.realValue}
      </p>
      <h3>Weather data</h3>
      <p>
        Temperature:
        {' '}
        {temperature}
        <br />
        Humidity:
        {' '}
        {humidity}
        <br />
        Precipitation:
        {' '}
        {precipitation}
        <br />
      </p>
      <h2>Sensor list</h2>
      <ul>
        {sortedsensors.map((sensor) => (
          <li key={sensor.deviceID}>
            #
            {sensor.deviceNo}
            {' '}
            {sensor.deviceName}
            {' '}
            ID:
            {sensor.deviceID}
          </li>
        ))}

      </ul>
      <h2>Raw JSON:</h2>
      <h4>Dust data</h4>
      <p>{JSON.stringify(rawDust)}</p>
      <h4>Gas data</h4>
      <p>{JSON.stringify(rawGas)}</p>
      <h4>Weather data</h4>
      <p>{JSON.stringify(rawWeather)}</p>

    </>
  );
}

RawData.propTypes = {
  data: PropTypes.object.isRequired,
};

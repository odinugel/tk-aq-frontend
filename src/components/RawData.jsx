/* eslint-disable react/prop-types */
export default function RawData({
  dust,
  gas,
  weather,
  sensorList,
}) {
  const date = new Date(dust[0].timestamp);
  const sortedSensorList = sensorList.sort((a, b) => a.deviceNo - b.deviceNo);
  return (
    <>
      <h2>
        Sensor ID:
        {' '}
        {dust[0].deviceID}
        {' '}
        fetched:
        {' '}
        {date.toUTCString()}
      </h2>
      <h3>Dust values</h3>
      <p>
        PM10 value:
        {' '}
        {dust[0].PM10}
        <br />
        PM2.5 value:
        {' '}
        {dust[0]['PM2.5']}
      </p>
      <h3>Gas values</h3>
      <p>
        NO2 value:
        {' '}
        {gas[0].NO2}
        <br />
        O3 value:
        {' '}
        {gas[0].O3}
        <br />
        NO value:
        {' '}
        {gas[0].NO}
      </p>
      <h3>Weather data</h3>
      <p>
        Temperature:
        {' '}
        {weather[0].temperature}
        <br />
        Humidity:
        {' '}
        {weather[0].humidity}
        <br />
        Precipitation:
        {' '}
        {weather[0].precipitation}
        <br />
      </p>
      <h2>Sensor list</h2>
      <ul>
        {sortedSensorList.map((sensor) => (
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
      <p>{JSON.stringify(dust)}</p>
      <h4>Gas data</h4>
      <p>{JSON.stringify(gas)}</p>
      <h4>Weather data</h4>
      <p>{JSON.stringify(weather)}</p>

    </>
  );
}

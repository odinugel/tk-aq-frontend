import {
  exampleDustData, exampleGasData, exampleWeatherData, exampleSensorList,
} from '../exampleData';

export default function RawData() {
  const date = new Date(exampleDustData[0].timestamp);
  const sortedSensorList = exampleSensorList.sort((a, b) => a.deviceNo - b.deviceNo);
  return (
    <>
      <h2>
        Sensor ID:
        {' '}
        {exampleDustData[0].deviceID}
        {' '}
        &quot;fetched&quot;:
        {' '}
        {date.toUTCString()}
      </h2>
      <h3>Dust values</h3>
      <p>
        PM10 value:
        {' '}
        {exampleDustData[0].PM10}
        <br />
        PM2.5 value:
        {' '}
        {exampleDustData[0]['PM2.5']}
      </p>
      <h3>Gas values</h3>
      <p>
        NO2 value:
        {' '}
        {exampleGasData[0].NO2}
        <br />
        O3 value:
        {' '}
        {exampleGasData[0].O3}
        <br />
        NO value:
        {' '}
        {exampleGasData[0].NO}
      </p>
      <h3>Weather data</h3>
      <p>
        Temperature:
        {' '}
        {exampleWeatherData.data[0].temperature}
        <br />
        Humidity:
        {' '}
        {exampleWeatherData.data[0].humidity}
        <br />
        Precipitation:
        {' '}
        {exampleWeatherData.data[0].precipitation}
        <br />
      </p>
      <h2>Sensor list</h2>
      <ul>
        {sortedSensorList.map((sensor) => (
          <li>
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
      <p>{JSON.stringify(exampleDustData)}</p>
      <h4>Gas data</h4>
      <p>{JSON.stringify(exampleGasData)}</p>
      <h4>Weather data</h4>
      <p>{JSON.stringify(exampleWeatherData)}</p>

    </>
  );
}

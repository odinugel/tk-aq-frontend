import { useState, useEffect } from 'react';
import fetchSensors from '../api/fetchSensors';
import Loader from './Loader';
import FetchError from './FetchError';

export default function SensorList() {
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    fetchSensors(setSensors, setLoading, setFetchFailed);
  }, []);

  return (
    <div>
      {loading ? <Loader />
        : (
          <ul>
            {fetchFailed ? <FetchError /> : (
              sensors.map((sensor) => (
                sensor.visible ? (<li key={sensor.deviceID}>{sensor.deviceName}</li>) : null
              ))
            )}
          </ul>
        )}
    </div>
  );
}

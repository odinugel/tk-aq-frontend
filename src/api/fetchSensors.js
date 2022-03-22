import addSensorStatus from './addSensorStatus';

const fetchSensors = async (setSensors, setLoadingSensors, setFetchFailed) => {
  try {
    // fetch is run through proxy due to CORS on TK-servers, must be changed before production
    const url = 'https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/';
    const proxy = 'http://localhost:8080/';
    const response = await fetch(`${proxy}${url}`);

    if (response.ok) {
      const sensors = await response.json();
      setSensors(addSensorStatus(sensors));
      setLoadingSensors(false);
    } else {
      setFetchFailed(true);
      setLoadingSensors(false);
    }
  } catch (e) {
    throw Error(`fetchSensors: Promise failed${ e}`);
  }
};

export default fetchSensors;

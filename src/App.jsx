import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import theme from './theme';
import AccordionAQ from './components/Accordion';
import fetchData from './api/fetchData';
import PrimaryDisplay from './components/PrimaryDisplay';
import FetchError from './components/FetchError';
import fetchSensors from './api/fetchSensors';
import SensorList from './components/SensorList';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingSensors, setLoadingSensors] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [sensors, setSensors] = useState([]);
  const [sensorID, setSensorID] = useState('');
  const params = useParams();
  if (sensorID === '' && params.id) {
    setSensorID(params.id);
    console.log('found params: ', params);
    console.log('set sensorID to:', sensorID);
  }
  console.log('render');
  // if we do not have a url ID
  // -> fetch and display a list of sensors
  // -> clicking on a sensor puts sensorID in URL
  // if we DO have a url ID
  // -> fetch and display sensor data.
  useEffect(() => {
    console.log(sensorID);
    if (sensorID) {
      console.log('fetching data');
      fetchData(sensorID, setData, setLoading, setFetchFailed);
    }
    if (sensors.length === 0) {
      console.log('fetching sensors');
      fetchSensors(setSensors, setLoadingSensors, setFetchFailed);
    }
  }, [sensorID, sensors.length]);

  return (
    <ThemeProvider theme={theme}>
      {fetchFailed && <FetchError />}
      <Stack spacing="1rem" sx={{ maxWidth: '750px', margin: '1rem auto' }}>
        <PrimaryDisplay data={data} loading={loading} />
        <AccordionAQ pollutants={data.pollutants} loading={loading} />
      </Stack>
      {!loadingSensors ? <SensorList sensors={sensors} setSensorID={setSensorID} />
        : null}
    </ThemeProvider>
  );
}

export default App;

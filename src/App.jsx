import { Stack, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import AccordionAQ from './components/Accordion';
import fetchData from './api/fetchData';
import PrimaryDisplay from './components/PrimaryDisplay';
import FetchError from './components/FetchError';
import Header from './components/Header';
import fetchSensors from './api/fetchSensors';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [sensors, setSensors] = useState([]);
  const [loadingSensors, setLoadingSensors] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sensorID, setSensorID] = useState('');
  const params = useParams();
  console.log('render');
  if (sensorID === '' && params.id) {
    setSensorID(params.id);
    console.log(`sensorID is empty, found params: ${params.id} in url, setting sensorID`);
  }
  // if we do not have a url ID
  // -> fetch and display a list of sensors
  // -> clicking on a sensor puts sensorID in URL
  // if we DO have a url ID
  // -> fetch list of sensors but do not display
  // -> fetch and display sensor data.

  // sensors only need to be fetched on component mount
  useEffect(() => {
    console.log('Fetching sensors');
    fetchSensors(setSensors, setLoadingSensors, setFetchFailed);
  }, []);

  // fetch data if sensorID changes
  // dont fetch until sensors have loaded
  useEffect(() => {
    if (sensorID && sensors.length !== 0) {
      console.log(`Fetching data from ${sensorID}`);
      setFetchFailed(false);
      setLoading(true);
      fetchData(sensorID, sensors, setData, setLoading, setFetchFailed);
    }
  }, [sensorID, sensors]);

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline>
        {fetchFailed && <FetchError />}
        <Paper sx={{ minHeight: '100vh' }} square>
          <Header
            sensors={sensors}
            loadingSensors={loadingSensors}
            setSensorID={setSensorID}
            params={params}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Stack spacing="1rem" sx={{ maxWidth: '750px', margin: '1rem auto' }}>
            <PrimaryDisplay data={data} loading={loading} />
            <AccordionAQ pollutants={data.pollutants} loading={loading} />
          </Stack>
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

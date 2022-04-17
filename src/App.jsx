import {
  Stack, Box, Paper, useMediaQuery,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { LanguageProvider } from './context/LanguageContext';
import AccordionAQ from './components/AccordionAQ';
import fetchData from './api/fetchData';
import PrimaryDisplay from './components/PrimaryDisplay';
import FetchError from './components/FetchError';
import Header from './components/Header';
import fetchSensors from './api/fetchSensors';
import SensorSelect from './components/SensorSelect';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [sensors, setSensors] = useState([]);
  const [loadingSensors, setLoadingSensors] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [sensorID, setSensorID] = useState('');
  const minWidth1200px = useMediaQuery('(min-width:1200px)');
  const params = useParams();

  console.log('render');
  if (sensorID === '' && params.id) {
    setSensorID(params.id);
    console.log(`sensorID is empty, found params: ${params.id} in url, set sensorID`);
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
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {fetchFailed && <FetchError />}
          <Paper sx={{ bgcolor: 'background.main', minHeight: '100vh' }} square>
            <Header
              sensors={sensors}
              loadingSensors={loadingSensors}
              sensorID={sensorID}
              setSensorID={setSensorID}
            />
            <Stack
              direction="row"
              sx={{
                justifyContent: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              {minWidth1200px && (
                <Box sx={{
                  maxHeight: '85vh',
                  overflowY: 'scroll',
                  maxWidth: '600px',
                  width: '100%',
                  margin: '1rem',
                }}
                >
                  <SensorSelect
                    loadingSensors={loadingSensors}
                    sensors={sensors}
                    setSensorID={setSensorID}
                  />
                </Box>
              )}
              <Box sx={{
                maxWidth: '600px',
                width: '100%',
                margin: '1rem',
              }}
              >
                <PrimaryDisplay data={data} loading={loading} />
                <AccordionAQ pollutants={data.pollutants} loading={loading} />
              </Box>
            </Stack>
          </Paper>
        </CssBaseline>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

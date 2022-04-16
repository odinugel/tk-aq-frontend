import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Stack,
  Box,
  Paper,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import fetchData from './api/fetchData';
import fetchSensors from './api/fetchSensors';
import {
  AccordionAQ,
  PrimaryDisplay,
  FetchError,
  Header,
  SensorSelect,
} from './components';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [sensors, setSensors] = useState([]);
  const [loadingSensors, setLoadingSensors] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [sensorID, setSensorID] = useState('');
  const [latitude, setLatitude] = useState(63.429799); // Trondheim sentrum
  const [longitude, setLongitude] = useState(10.393418);
  const [userHasLocation, setUserHasLocation] = useState(false);

  useEffect(() => {
    if (!userHasLocation) {
      navigator.geolocation.getCurrentPosition((positionme) => {
        setLatitude(positionme.coords.latitude);
        setLongitude(positionme.coords.longitude);
        setUserHasLocation(true);
      }, (error) => { console.log(error); setUserHasLocation(false); });
    }
  }, [userHasLocation]);

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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {fetchFailed && <FetchError />}
        <Paper sx={{ bgcolor: 'background.main', minHeight: '100vh' }} square>
          <Header
            sensors={sensors}
            loadingSensors={loadingSensors}
            sensorID={sensorID}
            setSensorID={setSensorID}
            latitude={latitude}
            longitude={longitude}
            userHasLocation={userHasLocation}
          />
          <Stack
            direction="row"
            sx={{
              justifyContent: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <Box sx={{
              display: { xs: 'none', lg: 'block' },
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
                latitude={latitude}
                longitude={longitude}
                userHasLocation={userHasLocation}
              />
            </Box>
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
  );
}

export default App;

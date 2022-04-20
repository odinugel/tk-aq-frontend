import {
  Stack, Box, Paper, useMediaQuery,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from './theme';
import { LanguageProvider } from './context/LanguageContext';
import fetchData from './api/fetchData';
import fetchSensors from './api/fetchSensors';
import {
  AccordionAQ,
  PrimaryDisplay,
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
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const minWidth1200px = useMediaQuery('(min-width:1200px)');
  const params = useParams();
  console.log('render');

  useEffect(() => {
    if (!userHasLocation) {
      navigator.geolocation.getCurrentPosition((positionme) => {
        setLatitude(positionme.coords.latitude);
        setLongitude(positionme.coords.longitude);
        setUserHasLocation(true);
      }, (error) => { console.log(error); setUserHasLocation(false); });
    }
  }, [userHasLocation]);

  // When page loads, the media query for
  // prefers-color-scheme: dark initially returns false for some reason.
  // This useEffect listens to see if it changes (which it does if browser prefers dark mode).
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // if sensorID is present in url, but not yet set by user, (e.g. after page refresh)
  // set sensorID to the one in the url
  if (sensorID === '' && params.id) {
    setSensorID(params.id);
    console.log(`sensorID not set, found params: ${params.id} in url, set sensorID`);
  }

  // sensors only need to be fetched once (on page load)
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
      <ThemeProvider theme={getTheme(darkMode)}>
        <CssBaseline enableColorScheme>
          <Paper sx={{ bgcolor: 'background.main', minHeight: '100vh' }} square>
            <Header
              sensors={sensors}
              loadingSensors={loadingSensors}
              sensorID={sensorID}
              setSensorID={setSensorID}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
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
              {minWidth1200px && (
                <Box sx={{
                  maxWidth: '600px',
                  width: '100%',
                  margin: '1rem',
                }}
                >
                  <SensorSelect
                    loadingSensors={loadingSensors}
                    sensors={sensors}
                    sensorID={sensorID}
                    setSensorID={setSensorID}
                    latitude={latitude}
                    longitude={longitude}
                    userHasLocation={userHasLocation}
                  />
                </Box>
              )}
              <Box sx={{
                maxWidth: '600px',
                width: '100%',
                margin: '1rem',
              }}
              >
                <PrimaryDisplay data={data} loading={loading} fetchFailed={fetchFailed} />
                <AccordionAQ
                  pollutants={data.pollutants}
                  loading={loading}
                  fetchFailed={fetchFailed}
                />
              </Box>
            </Stack>
          </Paper>
        </CssBaseline>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

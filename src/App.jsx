import { Stack, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { formatDistanceStrict } from 'date-fns';
import theme from './theme';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
import fetchData from './api/fetchData';
import Weather from './components/Weather';
import findSensorName from './utils/findSensorName';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(setData, setLoading);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Loader />
      ) : (
        <Stack spacing="1rem" m="1rem">
          <Paper>
            <Stack sx={{ alignItems: 'center' }}>
              <Typography variant="h4" m="1rem">
                {findSensorName(data.sensorID, data.sensors)}
              </Typography>
              <Typography variant="h6" mb="1rem">
                Last update:
                {' '}
                {formatDistanceStrict(data.timestamp, new Date(), { addSuffix: true })}
              </Typography>
            </Stack>
            <Donut
              size="30vw"
              text // if omitted, no text will be displayed inside circle
              value={data.topPollutant.value}
              category={data.topPollutant.category}
              thickness={2}
            />
            <Weather temperature={data.weather.temperature} humidity={data.weather.humidity} />
          </Paper>
          <AccordionAQ pollutants={data.pollutants} />
          <Paper sx={{ padding: '1rem' }}>
            <RawData data={data} />
          </Paper>
        </Stack>
      )}
    </ThemeProvider>
  );
}

export default App;

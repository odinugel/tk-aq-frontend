import { Stack, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import theme from './theme';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
// import useFetch from './hooks/useFetch';
import pollutionToPercentage from './utilities/pollutionToPercentage';

function App() {
  // fetch is run through proxy due to CORS on TK-servers, must be changed before production
  const proxy = 'http://localhost:8080/';
  const [topPollutant, setTopPollutant] = useState({});
  const [dust, setDust] = useState({});
  const [gas, setGas] = useState({});
  const [weather, setWeather] = useState({});

  const fetchData = async () => {
    try {
      const res = await Promise.all([
        fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/17dh0cf43jg89l/dust?from=1643300067139&to=1645978467139&dataPointSize=day`),
        fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/17dh0cf43jg89l/gases?from=1645895547777&to=1645981947777&dataPointSize=hour`),
        fetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/17dh0cf43jg89l/weather?from=1645896149161&to=1645982549161&dataPointSize=hour`),
      ]);
      const data = await Promise.all(res.map((r) => r.json()));
      const pollutants = pollutionToPercentage(data[0], data[1]);
      setDust(data[0]);
      setGas(data[1]);
      setWeather(data[2]);
      setTopPollutant({ name: 'NO2', value: pollutants.NO2 });
    } catch {
      throw Error('Promise failed');
    }
  };

  useEffect(() => { fetchData(); }, []);

  console.log(topPollutant);
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing="1rem" m="1rem">
        <Paper elevation={5}>
          <Donut size={500} color="success" value={topPollutant.value} text={topPollutant.name} />
        </Paper>
        <AccordionAQ />
        <Paper elevation={3} sx={{ padding: '1rem' }}>
          {topPollutant.value ? <RawData dust={dust} gas={gas} weather={weather} /> : null}
        </Paper>
      </Stack>
    </ThemeProvider>
  );
}

export default App;

import { Stack, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
import useFetch from './hooks/useFetch';

function App() {
  // fetch is run through proxy due to CORS on TK-servers, must be changed before production
  const proxy = 'http://localhost:8080/';
  const dust = useFetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/17dh0cf43jg89l/dust?from=1643300067139&to=1645978467139&dataPointSize=day`);
  const gas = useFetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/17dh0cf43jg89l/gases?from=1645895547777&to=1645981947777&dataPointSize=hour`);
  const weather = useFetch(`${proxy}https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors/17dh0cf43jg89l/weather?from=1645896149161&to=1645982549161&dataPointSize=hour`);
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing="1rem" m="1rem">
        <Paper elevation={5}>
          <Donut size={500} color="success" value={14} text="God" />
        </Paper>
        <AccordionAQ />
        <Paper elevation={3} sx={{ padding: '1rem' }}>
          {(dust && gas && weather) ? <RawData dust={dust} gas={gas} weather={weather} /> : null}
        </Paper>
      </Stack>
    </ThemeProvider>
  );
}

export default App;

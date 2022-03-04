import { Stack, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import theme from './theme';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
import fetchData from './api/fetchData';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(setData, setLoading);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Stack spacing="1rem" m="1rem">
          <Paper elevation={5}>
            <Typography variant="h2">
              sist oppdatert:
              {/* noe sånt som tidNå - data.timestamp */}
            </Typography>
            <Donut size={500} color="success" value={data.topPollutant.value} text={data.topPollutant.category} thickness={2} />
          </Paper>
          <AccordionAQ pollutants={data.pollutants} />
          <Paper elevation={3} sx={{ padding: '1rem' }}>
            <RawData data={data} />
          </Paper>
        </Stack>
      )}
    </ThemeProvider>
  );
}

export default App;

import { Stack, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import theme from './theme';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
import fetchData from './api/fetchData';
import Loader from './components/Loader';
import PrimaryDisplay from './components/PrimaryDisplay';

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
          <PrimaryDisplay data={data} />
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

import { Stack, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import theme from './theme';
import AccordionAQ from './components/Accordion';
import fetchData from './api/fetchData';
import Loader from './components/Loader';
import PrimaryDisplay from './components/PrimaryDisplay';
import FetchError from './components/FetchError';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchData(setData, setLoading, setFetchFailed);
  }, []);

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      <Paper>
        {loading ? (
          <Loader />
        ) : (
          <Stack spacing="1rem" m="1rem" sx={{ maxWidth: '750px', margin: '1rem auto' }}>
            {fetchFailed ? <FetchError /> : (
              <>
                <PrimaryDisplay data={data} />
                <AccordionAQ pollutants={data.pollutants} />
              </>
            )}
          </Stack>
        )}
      </Paper>
    </ThemeProvider>
  );
}

export default App;

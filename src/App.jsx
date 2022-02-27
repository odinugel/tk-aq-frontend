import './App.css';
import { Stack, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
// Waiting on CORS-fix
// import useFetch from './hooks/useFetch';

function App() {
  // Waiting on CORS-fix
  // const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing="1rem" m="1rem">
        <Paper elevation={5}>
          <Donut size={500} color="success" value={14} text="God" />
        </Paper>
        <AccordionAQ />
        <RawData />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { Stack, Paper } from '@mui/material';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
// Waiting on CORS-fix
// import useFetch from './hooks/useFetch';

function App() {
  // Waiting on CORS-fix
  // const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  return (
    <Stack sx={{ margin: '1rem', backgroundColor: '#f2f2f2' }}>
      <Paper elevation={5}>
        <Donut size={500} color="error" value={50} text="Dårlig" />
      </Paper>
      <AccordionAQ />
      <RawData />
    </Stack>
  );
}

export default App;

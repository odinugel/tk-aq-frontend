import './App.css';
import { Stack, Divider } from '@mui/material';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';
import RawData from './components/RawData';
// import useFetch from './hooks/useFetch';

function App() {
  // const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  return (
    <Stack divider={<Divider />}>
      <Donut size={300} color="success" value={11} text="God" />
      <Donut size={400} color="warning" value={40} text="Moderat" />
      <Donut size={550} color="error" value={85} text="Dårlig" />
      <AccordionAQ />
      <RawData />
    </Stack>
  );
}

export default App;

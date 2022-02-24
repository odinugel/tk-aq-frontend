import './App.css';
import { Stack, Divider } from '@mui/material';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';

function App() {
  return (
    <Stack divider={<Divider />}>
      <Donut size={300} color="success" value={11} text="God" />
      <Donut size={300} color="warning" value={40} text="Moderat" />
      <Donut size={300} color="error" value={85} text="Dårlig" />
      <AccordionAQ />
    </Stack>
  );
}

export default App;

import './App.css';
import Donut from './components/Donut';
import AccordionAQ from './components/Accordion';

function App() {
  return (
    <div>
      <Donut size={300} color="success" value={11} text="God" />
      <Donut size={300} color="warning" value={40} text="Moderat" />
      <Donut size={300} color="error" value={85} text="Dårlig" />
      <AccordionAQ />
    </div>
  );
}

export default App;

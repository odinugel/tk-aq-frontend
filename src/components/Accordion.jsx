/* eslint-disable react/prop-types */
// TODO: figure out prop-types
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Donut from './Donut';

function AccordionAQ({ pollutants }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            O3
          </Typography>
          <Donut size={50} color="success" value={pollutants.O3} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Her er O3 verdien:
            {' '}
            {pollutants.O3}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            PM10
          </Typography>
          <Donut size={50} color="success" value={pollutants.PM10} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Her er PM10 verdien:
            {' '}
            {pollutants.PM10}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            Panel 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repellat!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionAQ;

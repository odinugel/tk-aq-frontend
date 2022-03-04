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
      {Object.entries(pollutants).map(([key, value]) => (
        <Accordion key={key}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>
              {key}
            </Typography>
            <Donut size="3rem" color="success" thickness={2} value={value} />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {key}
              {' '}
              verdi:
              {' '}
              {value}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionAQ;

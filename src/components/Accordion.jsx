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
      {Object.entries(pollutants).map(([pollutant, info]) => (
        <Accordion key={pollutant}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>
              {pollutant}
            </Typography>
            <Donut size="3rem" color="success" thickness={2} value={info.percentage} />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {pollutant}
              {' '}
              verdi:
              {' '}
              {info.realValue}
              {' '}
              <br />
              Kategorisert som:
              &quot;
              {info.category}
              &quot;
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionAQ;

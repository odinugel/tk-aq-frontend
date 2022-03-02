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
            NO2
          </Typography>
          <Donut size={50} color="success" value={pollutants.NO2} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Her er NO2 veriden:
            {' '}
            {pollutants.NO2}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            PM2.5
          </Typography>
          <Donut size={50} color="success" value={pollutants.PM25} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Her er PM25 veriden:
            {' '}
            {pollutants.PM25}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionAQ;

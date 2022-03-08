import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Donut from './Donut';

function AccordionAQ({ pollutants }) {
  // sorting pollutants according to percentage value
  const pollutantsEntries = Object.entries(pollutants)
    .sort((prevPollut, currPolut) => currPolut[1].percentage - prevPollut[1].percentage);
    // pollutantsEntries now looks like this: [[PM10, {...}],[O3, {...}],[NO2, {...}],[PM25, {...}]]
    // so pollutantsEntries[0][0] is "PM10" and
    // pollutansEntries[0][1] is an object containing percentage, category and realValue
    // this is very confusing to read (imo) and will need to be refactored somehow.
  return (
    <div>
      {pollutantsEntries.map(([pollutant, info]) => (
        <Accordion key={pollutant}>
          <AccordionSummary expandIcon={<ExpandMore />} m="1rem" sx={{ '& .MuiAccordionSummary-content': { alignItems: 'baseline' } }}>
            <Donut size="3rem" color="success" thickness={3.6} category={info.category} value={info.percentage} />
            <Typography ml="0.5rem">
              {pollutant}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {pollutant}
              {' '}
              Value:
              {' '}
              {info.realValue}
              {' '}
              <br />
              Category:
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

AccordionAQ.propTypes = {
  pollutants: PropTypes.object.isRequired,
};

export default AccordionAQ;

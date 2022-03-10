import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
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
          <AccordionSummary expandIcon={<ExpandMore />} m="1rem" sx={{ '& .MuiAccordionSummary-content': { justifyContent: 'space-between' } }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
            }}
            >
              <Donut size={50} color="success" thickness={3.6} category={info.category} value={info.percentage} />
              <Typography ml="0.5rem">
                {pollutant}
              </Typography>
            </Box>
            {info.category === 'Poor' ? (
              <WarningAmberIcon
                sx={{
                  alignSelf: 'center',
                  mr: '1rem',
                  fill: '#ff5e00',
                  fontSize: '2rem',
                }}
              />
            ) : null }
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

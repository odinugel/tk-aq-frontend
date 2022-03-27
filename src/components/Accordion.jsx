import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Link,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Donut from './Donut';
import pollutantDescriptions from '../translations/pollutantDescriptions';
import Loader from './Loader';

function AccordionAQ({ pollutants, loading }) {
  if (loading) {
    return <Loader />;
  }
  // sorting pollutants according to percentage value
  const pollutantsEntries = Object.entries(pollutants)
    .sort((prevPollut, currPolut) => currPolut[1].percentage - prevPollut[1].percentage);
    // pollutantsEntries now looks like this: [[PM10, {...}],[O3, {...}],[NO2, {...}],[PM25, {...}]]
    // so pollutantsEntries[0][0] is "PM10" and
    // pollutansEntries[0][1] is an object containing percentage, category and realValue
    // this is very confusing to read (imo) and will need to be refactored somehow.
  // TODO: increase font-size and center text in summary, make warning icon more attention-grabbing
  return (
    <div>
      {pollutantsEntries.map(([pollutant, info]) => (
        <Accordion key={pollutant}>
          <AccordionSummary expandIcon={<ExpandMore />} m="1rem" sx={{ '& .MuiAccordionSummary-content': { justifyContent: 'space-between' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
              <Donut size={50} color="success" thickness={3.6} category={info.category} value={info.percentage} />
              <Typography ml="0.5rem">
                {pollutant}
              </Typography>
            </Box>
            {(info.category === 'Poor' || info.category === 'Very Poor') ? (
              <WarningAmberIcon sx={{
                alignSelf: 'center',
                mr: '1rem',
                fill: '#ff5e00',
                fontSize: '2rem',
              }}
              />
            ) : null }
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ marginBottom: '1rem' }} paragraph>
              {`Last hour: ${info.realValue}μg/m3`}
            </Typography>
            {
            pollutantDescriptions[pollutant].text.map((paragraph, index) => (
              // since the ordering will never change, index as key should be ok
              // eslint-disable-next-line react/no-array-index-key
              <Typography mb="1rem" key={index}>
                {paragraph}
              </Typography>
            ))
            }
            <Link href={pollutantDescriptions[pollutant].link.url} sx={{ fontFamily: 'Source Sans Pro' }}>
              {pollutantDescriptions[pollutant].link.text}
            </Link>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

AccordionAQ.propTypes = {
  pollutants: PropTypes.object,
  loading: PropTypes.bool,
};

export default AccordionAQ;

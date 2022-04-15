import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Link,
} from '@mui/material';
import PropTypes from 'prop-types';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccordionAQLoader from './AccordionLoaderAQ';
import pollutantDescriptions from '../translations/pollutantDescriptions';
import Donut from './Donut';
import WarningIcon from './WarningIcon';

export default function AccordionAQ({ pollutants, loading }) {
  if (loading) {
    return <AccordionAQLoader />;
  }
  return (
    <Box margin="0 auto" sx={{ maxWidth: '600px' }}>
      {pollutants.map((pollutant) => (
        <Accordion key={pollutant.name}>
          <AccordionSummary expandIcon={<ExpandMore />} m="1rem" sx={{ '& .MuiAccordionSummary-content': { justifyContent: 'space-between' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Donut size={50} color="success" thickness={3.6} category={pollutant.category} value={pollutant.percentage} />
              <Typography variant="h6" ml="0.5rem">
                {pollutant.name}
              </Typography>
            </Box>
            {pollutant.category === 'Poor' || pollutant.category === 'Very Poor' ? <WarningIcon /> : null }
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ marginBottom: '1rem' }} paragraph>
              {`Last hour: ${pollutant.realValue}μg/m3`}
            </Typography>
            {pollutantDescriptions[pollutant.name].text.map((paragraph, index) => (
              // since the ordering will never change, index as key should be ok
              // eslint-disable-next-line react/no-array-index-key
              <Typography mb="1rem" key={index}>
                {paragraph}
              </Typography>
            ))}
            <Link href={pollutantDescriptions[pollutant.name].link.url} sx={{ fontFamily: 'Source Sans Pro', color: 'link.main' }}>
              {pollutantDescriptions[pollutant.name].link.text}
            </Link>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

AccordionAQ.propTypes = {
  pollutants: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
};

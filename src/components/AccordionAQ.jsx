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
import { useContext } from 'react';
import AccordionAQLoader from './AccordionLoaderAQ';
import Donut from './Donut';
import WarningIcon from './WarningIcon';
import translations from '../translations/translations';
import { LanguageContext } from '../context/LanguageContext';

export default function AccordionAQ({ pollutants, loading }) {
  const { language } = useContext(LanguageContext);

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
            {pollutant.category === 3 || pollutant.category === 4 ? <WarningIcon /> : null }
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ marginBottom: '1rem' }} paragraph>
              {`${translations.lastHour[language]} ${pollutant.realValue}μg/m3`}
            </Typography>
            {translations[pollutant.name].text[language].map((paragraph, index) => (
              // since the ordering will never change, index as key should be ok
              // eslint-disable-next-line react/no-array-index-key
              <Typography mb="1rem" key={index}>
                {paragraph}
              </Typography>
            ))}
            <Link href={translations[pollutant.name].link.url} sx={{ fontFamily: 'Source Sans Pro' }}>
              {translations[pollutant.name].link.text[language]}
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

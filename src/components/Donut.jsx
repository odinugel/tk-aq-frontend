import { useEffect, useState, useContext } from 'react';
import {
  CircularProgress,
  Typography,
  Stack,
  Box,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import donutColor from '../utils/donutColor';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function Donut({
  value,
  size,
  category,
  thickness,
  text,
}) {
  const [donutValue, setDonuValue] = useState(0);
  const [donutText, setDonutText] = useState('');
  const { language } = useContext(LanguageContext);
  const maxWidth550px = useMediaQuery('(max-width:550px)');

  // Timeout to trigger the animation of the donut
  useEffect(() => {
    const timer = setTimeout(() => {
      setDonuValue(value);
      setDonutText(`${translations.donutCategory[category][language]}`);
    }, 100);
    return () => clearTimeout(timer);
  }, [category, value, language]);

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>
      <Box sx={{ transform: 'rotate(180deg)', zIndex: '99' }} width={size}>
        <CircularProgress
          variant="determinate"
          value={donutValue > 100 ? 99 : donutValue}
          size="100%"
          color={donutColor(category)}
          thickness={thickness}
          aria-hidden
        />
      </Box>
      <Box sx={{ position: 'absolute', zIndex: '99' }}>
        <Typography variant="h3" aria-label={translations.tkHeaderSubtitle[language]} role="status" color="text.secondary" align="center" sx={{ fontSize: (maxWidth550px ? '2.3rem' : '3rem'), marginTop: '6px' }}>
          {/* margin top is to center the text which is off by 6px for some  reason */}
          {text ? donutText : null}
        </Typography>
      </Box>
      <Box sx={{ transform: 'rotate(180deg)', position: 'absolute' }} width={size}>
        <CircularProgress
          variant="determinate"
          value={100}
          size="100%"
          color="background"
          thickness={thickness}
          aria-hidden
        />
      </Box>
    </Stack>
  );
}

Donut.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  category: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  text: PropTypes.bool,
};

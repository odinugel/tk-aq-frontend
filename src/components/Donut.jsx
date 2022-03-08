import { useEffect, useState } from 'react';
import {
  CircularProgress,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import donutColor from '../utils/donutColor';

export default function Donut({
  value, // 20
  size,
  category,
  thickness,
  text,
}) {
  const [donutValue, setDonuValue] = useState(0);
  const [donutText, setDonutText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDonuValue(value);
      setDonutText(category);
    }, 1000);
    return () => clearTimeout(timer);
  }, [category, value]);
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{
        transform: 'rotate(180deg)', zIndex: '99',
      }}
      >
        <CircularProgress
          variant="determinate"
          value={donutValue}
          size={size}
          color={donutColor(category)}
          thickness={thickness}
        />
      </Box>
      <Box sx={{ position: 'absolute' }}>
        <Typography
          variant="h3"
          component="div"
          color="text.secondary"
          align="center"
        >
          {text ? donutText : null}
        </Typography>
      </Box>
      <Box sx={{
        transform: 'rotate(180deg)', position: 'absolute',
      }}
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          color="background"
          thickness={thickness}
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
  category: PropTypes.string.isRequired,
  thickness: PropTypes.number.isRequired,
  text: PropTypes.bool,
};

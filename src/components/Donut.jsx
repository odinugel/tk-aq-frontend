import {
  CircularProgress,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import donutColor from '../utils/donutColor';

export default function Donut({
  value,
  size,
  category,
  thickness,
  text,
}) {
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
          value={value}
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
          {text ? category : null}
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

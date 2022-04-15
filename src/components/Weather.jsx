import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function Weather({ temperature, humidity }) {
  return (
    <Stack direction="row" m="1rem" sx={{ justifyContent: 'space-evenly' }}>
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <ThermostatIcon fontSize="large" />
        <Typography variant="h5">
          {temperature}
          &deg;
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <OpacityIcon fontSize="large" />
        <Typography variant="h5">
          {humidity}
          %
        </Typography>
      </Stack>
    </Stack>
  );
}

Weather.propTypes = {
  temperature: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  humidity: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

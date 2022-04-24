import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Stack, Typography, Fade } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import fetchWeather from '../api/fetchWeather';

export default function Weather({ sensorID }) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchWeather(sensorID, setWeather, setLoading);
  }, [sensorID]);

  return (

    <Stack direction="row" m="1rem" sx={{ justifyContent: 'space-evenly' }}>
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <ThermostatIcon fontSize="large" />
        {!loading && (
          <Fade in>
            <Typography variant="h5">
              {`${weather.temperature.toFixed()}°`}
            </Typography>
          </Fade>
        )}
      </Stack>
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <OpacityIcon fontSize="large" />
        {!loading && (
          <Fade in>
            <Typography variant="h5">
              {`${weather.humidity}%`}
            </Typography>
          </Fade>
        )}
      </Stack>
    </Stack>
  );
}

Weather.propTypes = {
  sensorID: PropTypes.string.isRequired,
};

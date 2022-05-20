import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { Stack, Typography, Fade } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import fetchWeather from '../api/fetchWeather';
import translations from '../translations/translations';
import { LanguageContext } from '../context/LanguageContext';

export default function Weather({ sensorID }) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    fetchWeather(sensorID, setWeather, setLoading, abortController);
    return () => abortController.abort();
  }, [sensorID]);

  return (
    <Stack direction="row" m="1rem" mb="0rem" sx={{ justifyContent: 'space-evenly' }}>
      <Stack direction="column" sx={{ alignItems: 'center' }}>
        <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
          <ThermostatIcon fontSize="large" />
          {!loading && (
            <Fade in>
              <Typography fontSize="1.5rem">
                {`${weather.temperature.toFixed()}°`}
              </Typography>
            </Fade>
          )}
        </Stack>
        <Typography>{translations.temperature[language]}</Typography>
      </Stack>
      <Stack direction="column" sx={{ alignItems: 'center' }}>
        <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
          <OpacityIcon fontSize="large" />
          {!loading && (
            <Fade in>
              <Typography fontSize="1.5rem">
                {`${weather.humidity}%`}
              </Typography>
            </Fade>
          )}
        </Stack>
        <Typography>{translations.humidity[language]}</Typography>
      </Stack>
    </Stack>
  );
}

Weather.propTypes = {
  sensorID: PropTypes.string.isRequired,
};

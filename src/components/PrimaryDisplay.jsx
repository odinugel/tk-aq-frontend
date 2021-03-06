import {
  Paper,
  Typography,
  Stack,
  Fade,
  Box,
} from '@mui/material';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { nb, enGB } from 'date-fns/locale';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Donut from './Donut';
import Weather from './Weather';
import PrimaryDisplayLoader from './PrimaryDisplayLoader';
import ShortInfo from './ShortInfo';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';
import FetchError from './FetchError';

export default function PrimaryDisplay({
  data,
  sensors,
  loading,
  fetchFailed,
}) {
  const { language } = useContext(LanguageContext);

  if (fetchFailed) { return (<FetchError />); }
  if (loading) { return <PrimaryDisplayLoader />; }

  return (
    <Paper sx={{
      padding: '1rem',
      margin: '0 auto',
      marginBottom: '1rem',
      maxWidth: '600px',
    }}
    >
      <Fade in>
        <Box>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="h2" textAlign="center" fontSize="2.125rem">
              {sensors.find((sensor) => sensor.deviceID === data.sensorID).deviceName}
            </Typography>
            <Typography fontSize="1.25rem" mb="1rem">
              {`${translations.lastUpdate[language]} ${formatDistanceStrict(data.timestamp, new Date(), { addSuffix: true, locale: language === 'no' ? nb : enGB })}`}
            </Typography>
          </Stack>
          <Donut
            size="75%"
            text // if omitted, no text will be displayed inside circle
            value={data.topPollutant.percentage}
            category={data.topPollutant.category}
            thickness={2}
          />
          <Weather sensorID={data.sensorID} />
          <Stack direction="row" sx={{ margin: '2rem 0.5rem 0 0.5rem' }}>
            <InfoOutlinedIcon />
            <Stack sx={{ marginLeft: '1rem' }}>
              <ShortInfo category={data.topPollutant.category} />
            </Stack>
          </Stack>
        </Box>
      </Fade>
    </Paper>
  );
}

PrimaryDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchFailed: PropTypes.bool.isRequired,
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

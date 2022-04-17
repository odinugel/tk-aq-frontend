import { Paper, Typography, Stack } from '@mui/material';
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

export default function PrimaryDisplay({ data, loading }) {
  const { language } = useContext(LanguageContext);
  if (loading) {
    return <PrimaryDisplayLoader />;
  }
  return (
    <Paper sx={{
      padding: '1rem',
      margin: '0 auto',
      marginBottom: '1rem',
      maxWidth: '600px',
    }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h4" textAlign="center">
          {data.sensors.find((index) => index.deviceID === data.sensorID).deviceName}
        </Typography>
        <Typography variant="h6" mb="1rem">
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
      <Weather temperature={data.weather.temperature} humidity={data.weather.humidity} />
      <Stack direction="row" sx={{ marginTop: '2rem' }}>
        <InfoOutlinedIcon />
        <Stack sx={{ margin: '0 2rem' }}>
          <ShortInfo category={data.topPollutant.category} />
        </Stack>
      </Stack>
    </Paper>
  );
}

PrimaryDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

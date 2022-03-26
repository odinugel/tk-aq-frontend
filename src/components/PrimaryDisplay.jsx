import { Paper, Typography, Stack } from '@mui/material';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import PropTypes from 'prop-types';
import Donut from './Donut';
import Weather from './Weather';

export default function PrimaryDisplay({ data, loading }) {
  if (loading) {
    return <h6>Loading PrimaryDisplay</h6>;
  }
  return (
    <Paper sx={{ padding: '1rem', margin: '0 auto', maxWidth: '600px' }}>
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h4">
          {data.sensors.find((index) => index.deviceID === data.sensorID).deviceName}
        </Typography>
        <Typography variant="h6" mb="1rem">
          {`Last update: ${formatDistanceStrict(data.timestamp, new Date(), { addSuffix: true })}`}
        </Typography>
      </Stack>
      <Donut
        size="60%"
        text // if omitted, no text will be displayed inside circle
        value={data.topPollutant.value}
        category={data.topPollutant.category}
        thickness={2}
      />
      <Weather temperature={data.weather.temperature} humidity={data.weather.humidity} />
    </Paper>
  );
}

PrimaryDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

// import { Paper, Typography, Stack } from '@mui/material';
// import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import PropTypes from 'prop-types';
// import Donut from './Donut';
// import Weather from './Weather';
import Loader from './Loader';

export default function PrimaryDisplay({ loading }) {
  if (!loading) {
    return <Loader />;
  } return <Loader />;
  // return (
  //   <Paper>
  //     <Stack sx={{ alignItems: 'center' }}>
  //       <Typography variant="h4" m="1rem">
  //         {data.sensors.find((index) => index.deviceID === data.sensorID).deviceName}
  //       </Typography>
  //       <Typography variant="h6" mb="1rem">
  // eslint-disable-next-line max-len
  //         {`Last update: ${formatDistanceStrict(data.timestamp, new Date(), { addSuffix: true })}`}
  //       </Typography>
  //     </Stack>
  //     <Donut
  //       size="60%"
  //       text // if omitted, no text will be displayed inside circle
  //       value={data.topPollutant.value}
  //       category={data.topPollutant.category}
  //       thickness={2}
  //     />
  //     <Weather temperature={data.weather.temperature} humidity={data.weather.humidity} />
  //   </Paper>
  // );
}

PrimaryDisplay.propTypes = {
  // data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

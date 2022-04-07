import {
  Typography,
  Stack,
  Toolbar,
  AppBar,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import LangButton from './LangButton';
import SensorDrawer from './SensorDrawer';

export default function Header({
  sensors,
  loadingSensors,
  sensorID,
  setSensorID,
}) {
  const minWidth600px = useMediaQuery('(min-width:600px)');

  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        placeItems: 'center',
        borderBottom: '7px solid #005aa7',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'space-around',
          margin: '1rem',
          width: '100%',
          maxWidth: '1200px',
        }}
        disableGutters
      >
        <SensorDrawer
          sensors={sensors}
          loadingSensors={loadingSensors}
          setSensorID={setSensorID}
          sensorID={sensorID}
        />
        <Stack direction="row" sx={{ placeItems: 'center' }} spacing={2}>
          <img src="./TrondheimKommuneSkjold.svg" alt="logo" width="60px" />
          {minWidth600px && (
          <Stack>
            <Typography align="center" variant="h5">
              TRONDHEIM KOMMUNE
            </Typography>
            <Typography>
              LUFTKVALITETSDATA
            </Typography>
          </Stack>
          )}
        </Stack>
        <LangButton />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  setSensorID: PropTypes.func.isRequired,
  sensorID: PropTypes.string.isRequired,
};

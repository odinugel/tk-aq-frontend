import {
  Typography,
  Stack,
  Toolbar,
  AppBar,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import LangButton from './LangButton';
import DarkModeSwitch from './DarkModeSwitch';
import SensorDrawer from './SensorDrawer';

export default function Header({
  sensors,
  loadingSensors,
  sensorID,
  setSensorID,
  darkMode,
  setDarkMode,

}) {
  const maxWidth1200px = useMediaQuery('(max-width:1200px)');

  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        placeItems: 'center',
        borderBottom: '7px solid',
        borderColor: 'primary.main',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '1rem',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 1rem',
        }}
        disableGutters
      >
        {maxWidth1200px && (
        <SensorDrawer
          sensors={sensors}
          loadingSensors={loadingSensors}
          setSensorID={setSensorID}
          sensorID={sensorID}
        />
        )}
        <Stack direction="row" sx={{ placeItems: 'center' }} spacing={2}>
          <img src="./TrondheimKommuneSkjold.svg" alt="logo" width="60px" />
          <Stack>
            <Typography align="center" variant="h5">
              TRONDHEIM KOMMUNE
            </Typography>
            <Typography>
              LUFTKVALITETSDATA
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row">
          <LangButton />
          <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  setSensorID: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  sensorID: PropTypes.string.isRequired,
};

import {
  Typography,
  Stack,
  Toolbar,
  AppBar,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useRef } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import SensorDrawer from './SensorDrawer';
import translations from '../translations/translations';
import Logo from '../assets/images/TrondheimKommuneSkjold.svg';
import SettingsDrawer from './SettingsDrawer';

export default function Header({
  sensors,
  loadingSensors,
  fetchSensorsFailed,
  sensorID,
  setSensorID,
  darkMode,
  setDarkMode,
  userPosition,
}) {
  const maxWidth1200px = useMediaQuery('(max-width:1200px)');
  const minWidth600px = useMediaQuery('(min-width:600px)');
  const minWidth450px = useMediaQuery('(min-width:450px)');
  const { language } = useContext(LanguageContext);
  // get the AppBar element to calculate height/padding of sensordrawer
  const header = useRef(null);

  return (
    <AppBar
      position="sticky"
      color="secondary"
      ref={header}
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
        <Stack direction="row" sx={{ placeItems: 'center' }} spacing={1}>
          {maxWidth1200px && (
          <SensorDrawer
            sensors={sensors}
            loadingSensors={loadingSensors}
            setSensorID={setSensorID}
            sensorID={sensorID}
            header={header}
            fetchSensorsFailed={fetchSensorsFailed}
            userPosition={userPosition}
          />
          )}
          <Stack direction="row" sx={{ placeItems: 'center' }} spacing={1}>
            <img src={Logo} alt="logo" width={(minWidth600px ? '50px' : '40px')} height={(minWidth600px ? '61px' : '48.5px')} />
            {minWidth450px
          && (
          <Stack>
            <Typography variant="h1" sx={{ fontSize: (minWidth600px ? '1.5rem' : '1rem') }}>
              {translations.tkHeader[language]}
            </Typography>
            <Typography>
              {translations.tkHeaderSubtitle[language]}
            </Typography>
          </Stack>
          )}
          </Stack>
        </Stack>
        <Stack direction="row">
          <SettingsDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  setSensorID: PropTypes.func.isRequired,
  fetchSensorsFailed: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  sensorID: PropTypes.string.isRequired,
  userPosition: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

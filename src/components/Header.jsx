import {
  Typography,
  Stack,
  Toolbar,
  AppBar,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import LangButton from './LangButton';
import DarkModeSwitch from './DarkModeSwitch';
import SensorDrawer from './SensorDrawer';
import translations from '../translations/translations';
import Logo from '../assets/images/TrondheimKommuneSkjold.svg';

export default function Header({
  sensors,
  loadingSensors,
  sensorID,
  setSensorID,
  latitude,
  longitude,
  userHasLocation,
  darkMode,
  setDarkMode,
}) {
  const maxWidth1200px = useMediaQuery('(max-width:1200px)');
  const minWidth450px = useMediaQuery('(min-width:450px)');
  const minWidth600px = useMediaQuery('(min-width:600px)');
  const { language } = useContext(LanguageContext);

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
        <Stack direction="row" sx={{ placeItems: 'center' }} spacing={1}>
          {maxWidth1200px && (
          <SensorDrawer
            sensors={sensors}
            loadingSensors={loadingSensors}
            setSensorID={setSensorID}
            sensorID={sensorID}
            latitude={latitude}
            longitude={longitude}
            userHasLocation={userHasLocation}
          />
          )}
          <Stack direction="row" sx={{ placeItems: 'center' }} spacing={1}>
            <img src={Logo} alt="logo" width={(minWidth600px ? '50px' : '40px')} />
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
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  userHasLocation: PropTypes.bool.isRequired,
};

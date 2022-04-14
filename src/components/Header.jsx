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
import SensorDrawer from './SensorDrawer';
import translations from '../translations/translations';

export default function Header({
  sensors,
  loadingSensors,
  sensorID,
  setSensorID,
}) {
  const maxWidth1200px = useMediaQuery('(max-width:1200px)');
  const minWidth450px = useMediaQuery('(min-width:450px)');
  const { language } = useContext(LanguageContext);

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
          {minWidth450px
          && (
          <Stack>
            <Typography align="center" variant="h5">
              {translations.tkHeader[language]}
            </Typography>
            <Typography>
              {translations.tkHeaderSubtitle[language]}
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

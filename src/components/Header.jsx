import {
  Typography,
  Stack,
  Toolbar,
} from '@mui/material';
import PropTypes from 'prop-types';
import LangButton from './LangButton';
import SensorList from './SensorList';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header({
  sensors,
  loadingSensors,
  setSensorID,
  params,
  darkMode,
  setDarkMode,
}) {
  return (
    <Stack sx={{ display: 'flex', placeItems: 'center', borderBottom: '7px solid #005aa7' }}>
      <Toolbar
        sx={{
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Stack direction="row" sx={{ placeItems: 'center' }} spacing={2}>
          <SensorList
            sensors={sensors}
            loading={loadingSensors}
            setSensorID={setSensorID}
            open={!params.id}
          />
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
    </Stack>
  );
}

Header.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  setSensorID: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

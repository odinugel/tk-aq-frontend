import {
  Typography,
  Stack,
  Toolbar,
} from '@mui/material';
import PropTypes from 'prop-types';
import LangButton from './LangButton';
import SensorList from './SensorList';

export default function Header({
  sensors,
  loadingSensors,
  setSensorID,
  params,
}) {
  return (
    <Stack sx={{ display: 'flex', placeItems: 'center', borderBottom: '7px solid #005aa7' }}>
      <Toolbar
        sx={{
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'space-around',
          padding: '1rem',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <SensorList
          sensors={sensors}
          loading={loadingSensors}
          setSensorID={setSensorID}
          open={!params.id}
        />
        <Stack direction="row" sx={{ placeItems: 'center' }} spacing={2}>
          <img src="./TrondheimKommuneSkjold.svg" alt="logo" />
          <Stack>
            <Typography align="center" variant="h5">
              TRONDHEIM KOMMUNE
            </Typography>
            <Typography>
              LUFTKVALITETSDATA
            </Typography>
          </Stack>
        </Stack>
        <LangButton />
      </Toolbar>
    </Stack>
  );
}

Header.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  setSensorID: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};

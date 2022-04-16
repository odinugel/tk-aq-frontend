import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Paper, Box, Tab, Tabs,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SensorList from './SensorList';
import Map from './Map';

export default function SensorSelect({
  loadingSensors,
  sensors,
  setSensorID,
  setOpen,
  latitude,
  longitude,
  userHasLocation,
}) {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Tabs value={tab} onChange={handleChange} aria-label="Velg kart eller liste" sx={{ width: '100%', '& .MuiTabs-flexContainer': { justifyContent: 'center' } }}>
        <Tab label="Liste" sx={{ maxWidth: '100%', width: '50%' }} icon={<FormatListBulletedIcon />} />
        <Tab label="Kart" sx={{ maxWidth: '100%', width: '50%' }} icon={<LocationOnIcon />} />
      </Tabs>
      <Paper>
        {tab === 0
          // eslint-disable-next-line max-len
          ? <SensorList userHasLocation={userHasLocation} latitude={latitude} longitude={longitude} setOpen={setOpen} loadingSensors={loadingSensors} sensors={sensors} setSensorID={setSensorID} />
          : <Map userHasLocation={userHasLocation} latitude={latitude} longitude={longitude} sensors={sensors} setSensorID={setSensorID} width="50%" height="50%" />}
      </Paper>
    </Box>
  );
}

SensorSelect.propTypes = {
  loadingSensors: PropTypes.bool.isRequired,
  sensors: PropTypes.array.isRequired,
  setSensorID: PropTypes.func.isRequired,
  setOpen: PropTypes.func,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool,
};

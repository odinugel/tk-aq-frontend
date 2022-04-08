import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Paper, Box, Tab, Tabs,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SensorList from './SensorList';

export default function SensorSelect({
  loadingSensors,
  sensors,
  setSensorID,
  setOpen,
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
          ? <SensorList setOpen={setOpen} loadingSensors={loadingSensors} sensors={sensors} setSensorID={setSensorID} />
          : <img src="https://www.google.com/maps/d/thumbnail?mid=1L3vyNB_8aM6mS_UA4V3L1L594d4&hl=en" alt="kart" width="100%" />}
      </Paper>
    </Box>
  );
}

SensorSelect.propTypes = {
  loadingSensors: PropTypes.bool.isRequired,
  sensors: PropTypes.array.isRequired,
  setSensorID: PropTypes.func.isRequired,
  setOpen: PropTypes.func,
};

import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Paper, Box, Tab, Tabs,
} from '@mui/material';
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
      <Tabs value={tab} onChange={handleChange} aria-label="Velg kart eller liste">
        <Tab label="Liste" sx={{ width: '50%' }} />
        <Tab label="Kart" sx={{ width: '50%' }} />
      </Tabs>
      <Paper>
        {tab === 0
          // eslint-disable-next-line max-len
          ? <SensorList setOpen={setOpen} loadingSensors={loadingSensors} sensors={sensors} setSensorID={setSensorID} />
          : <h1>Kart</h1>}
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

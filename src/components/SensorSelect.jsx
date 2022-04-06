import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import SensorList from './SensorList';

export default function SensorSelect({
  loadingSensors,
  sensors,
  setSensorID,
}) {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Tabs value={tab} onChange={handleChange} aria-label="Velg kart eller liste">
        <Tab label="Liste" />
        <Tab label="Kart" />
      </Tabs>
      {tab === 0
        ? <SensorList loading={loadingSensors} sensors={sensors} setSensorID={setSensorID} />
        : <h1>Kart</h1>}

    </Box>
  );
}

SensorSelect.propTypes = {
  loadingSensors: PropTypes.bool.isRequired,
  sensors: PropTypes.array.isRequired,
  setSensorID: PropTypes.func.isRequired,
};

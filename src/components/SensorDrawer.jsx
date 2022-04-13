import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Drawer,
} from '@mui/material';
import PropTypes from 'prop-types';
import SensorSelect from './SensorSelect';

export default function SensorDrawer({
  sensors,
  sensorID,
  setSensorID,
  loadingSensors,
}) {
  const [open, setOpen] = useState(!sensorID);

  return (
    <>
      <IconButton onClick={() => setOpen((currentOpen) => !currentOpen)} variant="outlined" color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} PaperProps={{ sx: { width: '100%', paddingTop: '111px' } }} anchor="left">
        <SensorSelect
          sensors={sensors}
          setOpen={setOpen}
          setSensorID={setSensorID}
          loadingSensors={loadingSensors}
        />
      </Drawer>
    </>
  );
}

SensorDrawer.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  sensorID: PropTypes.string.isRequired,
  loadingSensors: PropTypes.bool.isRequired,
};

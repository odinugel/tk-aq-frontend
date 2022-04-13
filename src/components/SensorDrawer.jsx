import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
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
      <Button onClick={() => setOpen((currentOpen) => !currentOpen)} variant="outlined" startIcon={<MenuIcon />} />
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

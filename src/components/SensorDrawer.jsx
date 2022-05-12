import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SensorSelect from './SensorSelect';

export default function SensorDrawer({
  sensors,
  setSensorID,
  loadingSensors,
  fetchSensorsFailed,
  sensorID,
  header,
  userPosition,
}) {
  const params = useParams();
  const [open, setOpen] = useState(!params.id);
  const [drawerPadding, setDrawerPadding] = useState(0);

  useEffect(() => {
    setDrawerPadding(header.current.getBoundingClientRect().height);
  }, [header, open]);

  return (
    <>
      <IconButton onClick={() => setOpen((currentOpen) => !currentOpen)} variant="outlined" color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen((currentOpen) => !currentOpen)} PaperProps={{ sx: { width: '100%', paddingTop: `${drawerPadding}px` } }} anchor="left">
        <SensorSelect
          sensors={sensors}
          setOpen={setOpen}
          setSensorID={setSensorID}
          loadingSensors={loadingSensors}
          header={header}
          sensorID={sensorID}
          fetchSensorsFailed={fetchSensorsFailed}
          userPosition={userPosition}
        />
      </Drawer>
    </>
  );
}

SensorDrawer.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  fetchSensorsFailed: PropTypes.bool.isRequired,
  sensorID: PropTypes.string.isRequired,
  header: PropTypes.shape({
    current: PropTypes.shape({
      getBoundingClientRect: PropTypes.func.isRequired,
    }),
  }).isRequired,
  userPosition: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

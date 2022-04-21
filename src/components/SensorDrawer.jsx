/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Drawer,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SensorSelect from './SensorSelect';

export default function SensorDrawer({
  sensors,
  setSensorID,
  loadingSensors,
  latitude,
  longitude,
  userHasLocation,
  header,
}) {
  const params = useParams();
  const [open, setOpen] = useState(!params.id);
  const [drawerPadding, setDrawerPadding] = useState(0);

  useEffect(() => {
    console.log('SensorDrawer useEffect, setting drawerPadding to', header.current.getBoundingClientRect().height);
    setDrawerPadding(header.current.getBoundingClientRect().height);
  }, [header, open]);

  return (
    <>
      <IconButton onClick={() => setOpen((currentOpen) => !currentOpen)} variant="outlined" color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} PaperProps={{ sx: { width: '100%', paddingTop: `${drawerPadding}px` } }} anchor="left">
        <SensorSelect
          sensors={sensors}
          setOpen={setOpen}
          setSensorID={setSensorID}
          loadingSensors={loadingSensors}
          latitude={latitude}
          longitude={longitude}
          userHasLocation={userHasLocation}
          header={header}
        />
      </Drawer>
    </>
  );
}

SensorDrawer.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool,
  // eslint-disable-next-line max-len
  header: PropTypes.shape({ current: PropTypes.shape({ getBoundingClientRect: PropTypes.func.isRequired }) }).isRequired,
};

/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Button,
  Drawer,
} from '@mui/material';
import PropTypes from 'prop-types';
import SensorList from './SensorList';

export default function SensorDrawer({
  sensors,
  setSensorID,
  open,
  loading,
}) {
  const [show, toggleShow] = useState(open);

  return (
    <>
      <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="outlined" startIcon={<ArrowBackIcon />}>
        Sensors
      </Button>
      <Drawer open={show} PaperProps={{ sx: { width: '100%', paddingTop: '111px' } }} anchor="left">
        <SensorList
          sensors={sensors}
          setSensorID={setSensorID}
          show={show}
          toggleShow={toggleShow}
          loading={loading}
        />
      </Drawer>
    </>
  );
}

SensorDrawer.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

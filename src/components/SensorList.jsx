import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Button,
  List,
  ListItemButton,
  Drawer,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function SensorList({ sensors, setSensorID }) {
  const [show, toggleShow] = useState(false);
  console.log('hello from sensorlist');
  return (
    <>
      <Button onClick={() => toggleShow(!show)}>Sensors</Button>
      <Drawer open={show}>
        <List>
          {sensors.map((sensor) => (
            sensor.visible ? (
              <ListItemButton key={sensor.deviceID} onClick={() => setSensorID(sensor.deviceID)}>
                <Link to={`/${sensor.deviceID}`}>{sensor.deviceName}</Link>
              </ListItemButton>
            ) : null))}
        </List>
      </Drawer>
    </>
  );
}

SensorList.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
};

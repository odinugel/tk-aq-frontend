/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Button,
  Box,
  List,
  ListItemButton,
  Drawer,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function SensorList({
  sensors,
  setSensorID,
  open,
  loading,
}) {
  const [show, toggleShow] = useState(open);
  const location = useLocation();
  const linkStyle = {
    width: '100%',
    height: '100%',
    padding: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'black',
  };

  return (
    <>
      <Box width="100%" display="flex" justifyContent="flex-end">
        <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="contained">
          Sensors
        </Button>
      </Box>
      <Drawer open={show} PaperProps={{ sx: { width: '100%' } }} anchor="right">
        <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="contained" sx={{ alignSelf: 'flex-end' }}>
          X
        </Button>
        {loading ? [...Array(20)].map((val, index) => (
          <ListItemButton key={index} divider>
            <Skeleton width="100%" height={50} />
          </ListItemButton>
        ))
          : (
            <List>
              {sensors
                .sort((a, b) => a.deviceName.localeCompare(b.deviceName, 'NO'))
                .map((sensor) => (
                  sensor.visible ? (
                    <ListItemButton divider key={sensor.deviceID} sx={{ padding: 0 }} selected={location.pathname === `/${sensor.deviceID}`} disabled={!sensor.isOnline}>
                      <Link
                        style={linkStyle}
                        to={`/${sensor.deviceID}`}
                        onClick={() => {
                          setSensorID(sensor.deviceID);
                          toggleShow(!show);
                        }}
                      >
                        {sensor.deviceName}
                      </Link>
                    </ListItemButton>
                  ) : null))}
            </List>
          )}
      </Drawer>
    </>
  );
}

SensorList.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

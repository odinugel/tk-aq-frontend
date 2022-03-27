/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  List,
  ListItemButton,
  Drawer,
  Skeleton,
  ListItemText,
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

  return (
    <>
      <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="outlined" startIcon={<ArrowBackIcon />}>
        Sensors
      </Button>
      <Drawer open={show} PaperProps={{ sx: { width: '100%' } }} anchor="left">
        <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="outlined" sx={{ alignSelf: 'flex-start', margin: '1rem' }} startIcon={<CloseIcon />}>
          Close
        </Button>
        {loading ? [...Array(20)].map((val, index) => (
          <ListItemButton key={index} divider>
            <Skeleton width={`${Math.floor((Math.random() * 10) + 10)}%`} height={50} />
          </ListItemButton>
        ))
          : (
            <List sx={{ padding: 0 }}>
              {sensors
                .sort((a, b) => a.deviceName.localeCompare(b.deviceName, 'NO'))
                .map((sensor) => (
                  sensor.visible ? (
                    <ListItemButton
                      divider
                      key={sensor.deviceID}
                      sx={{ padding: 0 }}
                      selected={location.pathname === `/${sensor.deviceID}`}
                      disabled={!sensor.isOnline}
                      href={`/${sensor.deviceID}`}
                      onClick={() => {
                        setSensorID(sensor.deviceID);
                        toggleShow(!show);
                      }}
                    >
                      <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem' } }} primary={sensor.deviceName} />
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

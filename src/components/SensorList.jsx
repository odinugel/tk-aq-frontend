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
  Paper,
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

  /* slenge inn ein liten paper isted for fragments? er lyst på toppen */

  return (
    <>
      <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="outlined" startIcon={<ArrowBackIcon />}>
        Sensors
      </Button>
      <Drawer open={show} PaperProps={{ sx: { width: '100%', bgcolor: 'secondary.main' } }} sx={{ bgcolor: 'secondary.main' }} anchor="left">
        <Paper sx={{ bgcolor: 'secondary.main', width: '100%' }} square>
          <Button onClick={() => toggleShow((currentShow) => !currentShow)} variant="outlined" sx={{ alignSelf: 'flex-start', margin: '1rem', bgcolor: 'secondary.main' }} startIcon={<CloseIcon />}>
            Close
          </Button>
        </Paper>
        {loading ? [...Array(20)].map((val, index) => (
          <ListItemButton key={index} divider>
            <Skeleton width="100%" height={50} />
          </ListItemButton>
        ))
          : (
            <List sx={{ bgcolor: 'secondary.main', padding: 0 }}>
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

/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useLocation, useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

export default function SensorList({
  sensors,
  setSensorID,
  setOpen,
  loadingSensors,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    loadingSensors ? [...Array(20)].map((val, index) => (
      <ListItemButton key={index} divider>
        <Skeleton width={`${Math.floor((Math.random() * 10) + 10)}vw`} height={50} />
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
                    if (typeof setOpen === 'function') { setOpen(false); }
                    navigate(`/${sensor.deviceID}`);
                  }}
                >
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.5rem', margin: '1rem' } }} primary={sensor.deviceName} />
                  {!sensor.isOnline && (
                  <>
                    <OfflineBoltIcon sx={{ marginRight: '0.5rem' }} />
                    <Typography sx={{ marginRight: '1rem' }}>Offline</Typography>
                  </>
                  )}
                </ListItemButton>
              ) : null))}
        </List>
      )
  );
}

SensorList.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  loadingSensors: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
};

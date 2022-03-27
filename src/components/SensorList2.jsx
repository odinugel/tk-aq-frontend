/* eslint-disable no-unused-vars */
import { List, ListItemButton, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SensorList2({ sensors, setSensorID, loading }) {
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
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
                navigate(`/${sensor.deviceID}`);
                setSensorID(sensor.deviceID);
              }}
            >
              <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem' } }} primary={sensor.deviceName} />
            </ListItemButton>
          ) : null))}
    </List>
  );
}

SensorList2.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object),
  setSensorID: PropTypes.func,
  loading: PropTypes.bool,
};

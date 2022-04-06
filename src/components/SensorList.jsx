import { useLocation, useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function SensorList({
  sensors,
  setSensorID,
  show,
  toggleShow,
}) {
  const location = useLocation();
  const navigate = useNavigate();

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
                setSensorID(sensor.deviceID);
                if (show !== undefined) { toggleShow(!show); }
                navigate(`/${sensor.deviceID}`);
              }}
            >
              <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem' } }} primary={sensor.deviceName} />
            </ListItemButton>
          ) : null))}
    </List>
  );
}

SensorList.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  show: PropTypes.bool,
  toggleShow: PropTypes.func,
};

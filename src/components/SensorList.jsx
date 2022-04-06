/* eslint-disable react/no-array-index-key */
import { useLocation, useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function SensorList({
  sensors,
  setSensorID,
  show,
  toggleShow,
  loading,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    loading ? [...Array(20)].map((val, index) => (
      <ListItemButton key={index} divider>
        <Skeleton width={`${Math.floor((Math.random() * 10) + 10)}%`} height={50} />
      </ListItemButton>
    ))
      : (
        <List sx={{ maxHeight: '75vh', overflow: 'scroll', overflowX: 'hidden' }}>
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
      )
  );
}

SensorList.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  show: PropTypes.bool,
  toggleShow: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

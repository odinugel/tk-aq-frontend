/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';
import getSensorDistanceFromUser from '../utils/getSensorDistanceFromUser';
import sortSensorsByDistance from '../utils/sortSensorsByDistance';
import sortSensorsAlphabetically from '../utils/sortSensorsAlphabetically';

export default function SensorList({
  sensors,
  setSensorID,
  setOpen,
  loadingSensors,
  latitude,
  longitude,
  userHasLocation,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sortedSensors, setSortedSensors] = useState([]);
  useEffect(() => {
    if (!loadingSensors) {
      if (userHasLocation) {
        const byDistance = sortSensorsByDistance(sensors, latitude, longitude);
        setSortedSensors(byDistance);
      } else {
        const alphabetically = sortSensorsAlphabetically(sensors);
        setSortedSensors(alphabetically);
      }
    }
  }, [loadingSensors, latitude, longitude, sensors, userHasLocation, sortedSensors]);

  return (
    loadingSensors ? [...Array(20)].map((val, index) => (
      <ListItemButton key={index} divider>
        <Skeleton width={`${Math.floor((Math.random() * 10) + 10)}vw`} height={50} />
      </ListItemButton>
    ))
      : (
        <List sx={{ padding: 0 }}>
          {sortedSensors
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
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.5rem', margin: '1rem' } }} primary={`${sensor.deviceName}`} />
                  {userHasLocation && (
                  <ListItemText
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '1rem', margin: '1rem', textAlign: 'right',
                      },
                    }}
                    primary={getSensorDistanceFromUser(sensor.lat, sensor.lon, latitude, longitude)}
                  />
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
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool.isRequired,
};

/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import getSensorDistanceFromUser from '../utils/getSensorDistanceFromUser';
import sortSensorsByDistance from '../utils/sortSensorsByDistance';
import sortSensorsAlphabetically from '../utils/sortSensorsAlphabetically';

export default function SensorList({
  sensors,
  sensorID,
  setSensorID,
  setOpen,
  loadingSensors,
  latitude,
  longitude,
  userHasLocation,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [sortedSensors, setSortedSensors] = useState([]);

  // sort sensors by distance from user if user has provided
  // geoLocation (userHasLocation), otherwise sort alphabetically
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
  }, [latitude, loadingSensors, longitude, sensors, userHasLocation]);

  // if user has not selected sensor, set selected sensor to first sensor
  // either alphabetically or closest to user
  useEffect(() => {
    if (sortedSensors.length !== 0) {
      if (!params.id && sensorID === '') { setSensorID(sortedSensors[0].deviceID); }
    }
  }, [params.id, sensorID, setSensorID, sortedSensors]);

  return (
    loadingSensors ? [...Array(20)].map((val, index) => (
      <ListItemButton key={index} divider>
        <Skeleton width={`${Math.floor((Math.random() * 10) + 35)}%`} height={50} />
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
                  selected={(location.pathname === `/${sensor.deviceID}`) || (sensor.deviceID === sensorID)}
                  disabled={!sensor.isOnline}
                  href={`/${sensor.deviceID}`}
                  onClick={() => {
                    setSensorID(sensor.deviceID);
                    if (typeof setOpen === 'function') { setOpen(false); }
                    navigate(`/${sensor.deviceID}`);
                  }}
                >
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.25rem', margin: '1rem' } }} primary={sensor.deviceName} />

                  {(userHasLocation && sensor.isOnline) && (
                  <ListItemText
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '1rem', margin: '1rem', textAlign: 'right',
                      },
                    }}
                    primary={getSensorDistanceFromUser(sensor.lat, sensor.lon, latitude, longitude)}
                  />
                  )}

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
  sensorID: PropTypes.string, // undefined/empty string on page load
  loadingSensors: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool.isRequired,
};

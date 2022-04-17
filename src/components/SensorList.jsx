/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';
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
  const { language } = useContext(LanguageContext);
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

  /* slenge inn ein liten paper isted for fragments? er lyst på toppen */

  return (
    loadingSensors ? [...Array(20)].map((val, index) => (
      <ListItemButton key={index} divider>
        <Skeleton width={`${Math.floor((Math.random() * 10) + 35)}%`} height={50} />
      </ListItemButton>
    ))
      : (
        <List sx={{ padding: 0 }}>
          <ListItemText sx={{ padding: '1rem', borderBottom: '5px solid', borderColor: 'background.main' }}>
            <Typography sx={{ fontSize: '1.5rem' }}>
              {translations.sensors[language]}
            </Typography>
          </ListItemText>
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
  loadingSensors: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool.isRequired,
};

/* eslint-disable react/no-array-index-key */
// Above is for keys for skeleton loaders
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function SensorList({
  sensors,
  setSensorID,
  setOpen,
  loadingSensors,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    loadingSensors ? [...Array(20)].map((val, index) => (
      <ListItemButton key={index} divider>
        <Skeleton width={`${Math.floor((Math.random() * 10) + 10)}vw`} height={50} />
      </ListItemButton>
    ))
      : (
        <List>
          <ListItemText sx={{ padding: '1rem', borderBottom: '5px solid #f2f2f2' }}>
            <Typography sx={{ fontSize: '1.5rem' }}>
              {translations.sensors[language]}
            </Typography>
          </ListItemText>
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
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.25rem', margin: '1rem' } }} primary={sensor.deviceName} />
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

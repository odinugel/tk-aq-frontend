import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import {
  Paper, Tab, Tabs,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SensorList from './SensorList';
import Map from './Map';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function SensorSelect({
  loadingSensors,
  sensors,
  sensorID,
  setSensorID,
  setOpen,
  header,
}) {
  const [latitude, setLatitude] = useState(63.429799); // Trondheim sentrum
  const [longitude, setLongitude] = useState(10.393418);
  const [userHasLocation, setUserHasLocation] = useState(false);
  const [tab, setTab] = useState(0);
  const [maximumHeight, setMaximumHeight] = useState('75vh');
  const { language } = useContext(LanguageContext);

  // This useEffect is called every time sensorDrawer is opened,
  // (which is bad)
  // but setting userHasLocation to false does not trigger a rerender
  // and the browser automatically blocks the request anyway
  useEffect(() => {
    if (!userHasLocation) {
      navigator.geolocation.getCurrentPosition((positionme) => {
        setLatitude(positionme.coords.latitude);
        setLongitude(positionme.coords.longitude);
        setUserHasLocation(true);
      }, (error) => { console.log(error); setUserHasLocation(false); });
    }
  }, [userHasLocation]);

  useEffect(() => {
    if (header) {
      console.log('hello from useEffect');
      setMaximumHeight(`${document.clientHeight - header.current.getBoundingClientRect().height}px`);
    }
  }, [header]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper sx={{ border: '1px solid', borderColor: 'background.paper' }}>
      <Tabs
        value={tab}
        onChange={handleChange}
        aria-label="Velg kart eller liste"
        sx={{
          width: '100%', '& .MuiTabs-flexContainer': { justifyContent: 'center' }, marginBottom: '0rem', backgroundColor: 'background.paper',
        }}
      >
        <Tab label={translations.sensorSelect.list[language]} sx={{ maxWidth: '100%', width: '50%' }} icon={<FormatListBulletedIcon />} />
        <Tab label={translations.sensorSelect.map[language]} sx={{ maxWidth: '100%', width: '50%' }} icon={<LocationOnIcon />} />
      </Tabs>
      <Paper sx={{ overflowY: 'auto', maxHeight: maximumHeight }}>
        {tab === 0
          ? (
            <SensorList
              userHasLocation={userHasLocation}
              latitude={latitude}
              longitude={longitude}
              setOpen={setOpen}
              loadingSensors={loadingSensors}
              sensors={sensors}
              sensorID={sensorID}
              setSensorID={setSensorID}
            />
          )
          : (
            <Map
              userHasLocation={userHasLocation}
              latitude={latitude}
              longitude={longitude}
              setOpen={setOpen}
              sensors={sensors}
              setSensorID={setSensorID}
            />
          )}
      </Paper>
    </Paper>
  );
}

SensorSelect.propTypes = {
  loadingSensors: PropTypes.bool.isRequired,
  sensors: PropTypes.array.isRequired,
  sensorID: PropTypes.string.isRequired,
  setSensorID: PropTypes.func.isRequired,
  setOpen: PropTypes.func,
  header: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

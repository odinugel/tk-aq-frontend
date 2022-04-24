import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
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
  latitude,
  longitude,
  userHasLocation,
  header,
}) {
  const [tab, setTab] = useState(0);
  const [maximumHeight, setMaximumHeight] = useState('75vh');
  const { language } = useContext(LanguageContext);
  const tabHeight = 72; // to set maxheight for sensorlist and map
  useState(() => {
    if (header) {
      console.log(`${header.current.getBoundingClientRect().height}px`);
      setMaximumHeight(`${window.innerHeight - header.current.getBoundingClientRect().height - tabHeight}px`);
    }
  }, [header]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper sx={{
      border: '1px solid',
      borderColor: 'background.paper',
      overflow: 'hidden',
    }}
    >
      <Tabs
        value={tab}
        onChange={handleChange}
        aria-label="Velg kart eller liste"
        sx={{
          width: '100%', '& .MuiTabs-flexContainer': { justifyContent: 'center' }, marginBottom: '0rem', backgroundColor: 'background.paper', maxHeight: `${tabHeight}px`,
        }}
      >
        <Tab label={translations.sensorSelect.list[language]} sx={{ maxWidth: '100%', width: '50%' }} icon={<FormatListBulletedIcon />} />
        <Tab label={translations.sensorSelect.map[language]} sx={{ maxWidth: '100%', width: '50%' }} icon={<LocationOnIcon />} />
      </Tabs>
      <Paper sx={{ overflowY: 'auto', height: maximumHeight }}>
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
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool,
  header: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

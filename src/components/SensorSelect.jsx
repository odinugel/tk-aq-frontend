/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { Paper, Tab, Tabs } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SensorList from './SensorList';
import Map from './Map';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';
import debounce from '../utils/debounce';
import FetchSensorsError from './FetchSensorsError';

export default function SensorSelect({
  loadingSensors,
  sensors,
  sensorID,
  fetchSensorsFailed,
  setSensorID,
  setOpen,
  header,
  userPosition,
}) {
  const [tab, setTab] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [maximumHeight, setMaximumHeight] = useState('75vh');
  const { language } = useContext(LanguageContext);
  const tabHeight = 72; // to set maxheight for sensorlist and map

  useEffect(() => {
    let cancel = false;
    const handleResize = debounce(() => {
      if (!cancel) {
        setWindowHeight(window.innerHeight);
      }
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      cancel = true;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (header) {
      setMaximumHeight(`${windowHeight - header.current.getBoundingClientRect().height - tabHeight}px`);
    }
  }, [header, windowHeight]);

  if (fetchSensorsFailed) { return (<FetchSensorsError />); }
  return (
    <Paper sx={{
      border: '1px solid',
      borderColor: 'background.paper',
      overflow: 'hidden',
    }}
    >
      <Tabs
        value={tab}
        onChange={(event, newValue) => setTab(newValue)}
        aria-label="Velg kart eller liste"
        sx={{
          width: '100%',
          '& .MuiTabs-flexContainer': {
            justifyContent: 'center',
          },
          marginBottom: '0rem',
          backgroundColor: 'background.paper',
          maxHeight: `${tabHeight}px`,
        }}
      >
        <Tab label={translations.sensorSelect.list[language]} sx={{ maxWidth: '100%', width: '50%' }} icon={<FormatListBulletedIcon />} />
        <Tab label={translations.sensorSelect.map[language]} sx={{ maxWidth: '100%', width: '50%' }} icon={<LocationOnIcon />} />
      </Tabs>
      <Paper sx={{ overflowY: 'auto', height: maximumHeight }}>
        {tab === 0
          ? (
            <SensorList
              userPosition={userPosition}
              setOpen={setOpen}
              loadingSensors={loadingSensors}
              sensors={sensors}
              sensorID={sensorID}
              setSensorID={setSensorID}
            />
          )
          : (
            <Map
              userPosition={userPosition}
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
  sensorID: PropTypes.string, // undefined on page load
  fetchSensorsFailed: PropTypes.bool.isRequired,
  setSensorID: PropTypes.func.isRequired,
  setOpen: PropTypes.func,
  header: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  userPosition: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

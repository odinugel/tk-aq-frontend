import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';
import disabledMarkerIcon from '../assets/images/disabled_marker_icon.png';
import yourPositionMarkerIcon from '../assets/images/your_location.svg';

export default function Map({
  sensors,
  setSensorID,
  latitude,
  longitude,
  userHasLocation,
  setOpen,
}) {
  // timeout for hover on mapicons
  let timeout;

  const disabledIcon = L.icon({
    iconUrl: disabledMarkerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });
  const yourPositionIcon = L.icon({
    iconUrl: yourPositionMarkerIcon,
    iconSize: [15, 15],
  });

  const defaultIcon = new L.Icon.Default();

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom
      style={{ minHeight: '70vh' }}
    >
      {sensors.map((sensor) => (
        sensor.visible && (
        <Marker
          key={sensor.deviceName}
          icon={!sensor.isOnline ? disabledIcon : defaultIcon}
          position={[
            (sensor.lat * 180) / Math.PI,
            (sensor.lon * 180) / Math.PI,
          ]} // ganger med 180/pi. Er for å få MERIDIAN riktig
          eventHandlers={{
            mouseover: (e) => {
              timeout = setTimeout(() => { e.target.openPopup(); }, 500);
            },
            mouseout: (e) => {
              clearTimeout(timeout);
              e.target.closePopup();
            },
            click: (e) => {
              if (sensor.isOnline) {
                setSensorID(sensor.deviceID);
                if (typeof setOpen === 'function') { setOpen(false); }
              } else {
                e.target.openPopup();
              }
            },
          }}
        >
          <Popup>{`${!sensor.isOnline ? 'Offline:' : ''}${sensor.deviceName}`}</Popup>

        </Marker>
        )
      ))}
      {userHasLocation && (<Marker icon={yourPositionIcon} position={[latitude, longitude]} />)}

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

Map.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  userHasLocation: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
};

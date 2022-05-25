import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import disabledMarkerIcon from '../assets/images/disabled_marker_icon.png';
import yourPositionMarkerIcon from '../assets/images/your_location.svg';

export default function Map({
  sensors,
  setSensorID,
  setOpen,
  userPosition,
}) {
  const navigate = useNavigate();
  // timeout for hover on mapicons
  let timeout;

  // default position for map, trondheim sentrum
  const defaultLat = (1.1070697 * 180) / Math.PI;
  const defaultLong = (0.18140209 * 180) / Math.PI;

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
      center={
        userPosition
          ? [userPosition.latitude, userPosition.longitude]
          : [defaultLat, defaultLong]
      }
      zoom={13}
      scrollWheelZoom
      style={{ height: '100%' }}
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
                // If setOpen was passed as prop
                // (is function and not null), set it to true to close the drawer
                if (typeof setOpen === 'function') { setOpen(false); }
                navigate(`/${sensor.deviceID}`);
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
      {userPosition && (
      <Marker
        icon={yourPositionIcon}
        position={[userPosition.latitude, userPosition.longitude]}
      />
      )}
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
  setOpen: PropTypes.func,
  userPosition: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

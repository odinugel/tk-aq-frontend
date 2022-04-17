import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';

export default function Map({
  sensors,
  setSensorID,
  latitude,
  longitude,
  userHasLocation,
  setOpen,
}) {
  const LeafletIcon = L.Icon.extend({
    options: {
      iconSize: [15, 15],
    },
  });

  const yourPositionIcon = new LeafletIcon({
    iconUrl: './images/your_location.svg',
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom
      style={{ height: '70vh' }}
    >
      {sensors.map((sensor) => (
        <Marker
          key={sensor.deviceName}
          position={[
            (sensor.lat * 180) / Math.PI,
            (sensor.lon * 180) / Math.PI,
          ]} // ganger med 180/pi. Er for å få MERIDIAN riktig
          eventHandlers={{
            click: () => {
              setSensorID(sensor.deviceID);
              if (typeof setOpen === 'function') { setOpen(false); }
            },
          }}
        />
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

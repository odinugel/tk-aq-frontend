import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';
import PropTypes from 'prop-types';

export default function Map({ sensors, setSensorID }) {
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((positionme) => {
      setLatitude(positionme.coords.latitude);
      setLongitude(positionme.coords.longitude);
    });
  });

  return (
    <MapContainer
      center={[63.429799, 10.393418]}
      zoom={13}
      scrollWheelZoom
      style={{ height: '100vh' }}
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
            },
          }}
        />
      ))}
      <Marker position={[latitude, longitude]} />
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
};

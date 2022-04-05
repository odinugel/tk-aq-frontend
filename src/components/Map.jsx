import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';
import './App.css';
import PropTypes from 'prop-types';

export default function Map({ sensors, setSensorID }) {
  return (
    <MapContainer center={[63.429799, 10.393418]} zoom={13} scrollWheelZoom>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

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
    </MapContainer>
  );
}

Map.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSensorID: PropTypes.func.isRequired,
};

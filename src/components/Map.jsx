import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';
import useSwr from 'swr';
import './App.css';

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function App()

{

  const url = 'https://tipqa.trondheim.kommune.no/luftkvalitet-api/v1/sensors';
  const { data, error } = useSwr(url, { fetcher });
  const geo = data && !error ? data.slice(1, 100) : [];
  // Starter Slice på 1. Denne fjerner test-sensoren
  return (
    <MapContainer center={[63.429799, 10.393418]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {geo.map(geo => (
        <Marker
          key={geo.deviceName}
          position={[
            (geo.lat * 180) / Math.PI,
            (geo.lon * 180) / Math.PI,

          ]} // ganger med 180/pi. Er for å få MERIDIAN riktig

        />
      ))}
    </MapContainer>
  );
}

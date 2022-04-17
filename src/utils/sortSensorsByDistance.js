import { getDistance } from 'geolib';

export default function sortSensorsByDistance(sensors, latitude, longitude) {
  const distance = sensors.sort((sensorA, sensorB) => {
    const distanceFromUserA = getDistance(
      { latitude, longitude },
      { latitude: (sensorA.lat * 180) / Math.PI, longitude: (sensorA.lon * 180) / Math.PI },
    );

    const distanceFromUserB = getDistance(
      { latitude, longitude },
      { latitude: (sensorB.lat * 180) / Math.PI, longitude: (sensorB.lon * 180) / Math.PI },
    );

    return distanceFromUserA - distanceFromUserB;
  });
  return distance;
}

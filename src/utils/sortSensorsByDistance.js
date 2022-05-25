import { getDistance } from 'geolib';

export default function sortSensorsByDistance(sensors, latitude, longitude) {
  const distance = sensors.sort((sensorA, sensorB) => {
    const distanceFromUserSensorA = getDistance(
      { latitude, longitude },
      { latitude: (sensorA.lat * 180) / Math.PI, longitude: (sensorA.lon * 180) / Math.PI },
    );

    const distanceFromUserSensorB = getDistance(
      { latitude, longitude },
      { latitude: (sensorB.lat * 180) / Math.PI, longitude: (sensorB.lon * 180) / Math.PI },
    );

    return distanceFromUserSensorA - distanceFromUserSensorB;
  });
  return distance;
}

/* eslint-disable max-len */
import getDistance from 'geolib/es/getDistance';

export default function getSensorDistanceFromUser(sensorLat, sensorLong, latitude, longitude) {
  const distanceFromUser = getDistance(
    { latitude, longitude },
    { latitude: (sensorLat * 180) / Math.PI, longitude: (sensorLong * 180) / Math.PI },
  );
  if (distanceFromUser > 1000) {
    return `${(distanceFromUser / 1000).toFixed(1)} km`;
  }
  return `${distanceFromUser}m`;
}

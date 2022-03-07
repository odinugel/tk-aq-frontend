export default function findSensorName(sensorID, sensors) {
  // find sensor.name where sensor.sensorID === sensorID
  const matchingSensor = sensors.filter((sensor) => sensor.deviceID === sensorID);
  return matchingSensor[0].deviceName;
}

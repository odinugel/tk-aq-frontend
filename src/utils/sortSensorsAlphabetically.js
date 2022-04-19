export default function sortSensorsAlphabetically(sensors) {
  const alphabet = sensors.sort((a, b) => a.deviceName.localeCompare(b.deviceName, 'NO'));
  return alphabet;
}

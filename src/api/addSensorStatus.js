import differenceInHours from 'date-fns/differenceInHours';

export default function addSensorStatus(sensors) {
  const sensorsWithStatus = sensors.map((sensor) => {
    const result = differenceInHours(
      new Date(),
      new Date(sensor.lastReceivedMsg),
    );
    // if the last message recieved from the sensor is older than 2 hours,
    // the sensor is considered offline
    const isOnline = (result < 2) || true;
    return { ...sensor, isOnline };
  });
  return sensorsWithStatus;
}

import differenceInHours from 'date-fns/differenceInHours';

export default function addSensorStatus(sensors) {
  const sensorsWithStatus = sensors.map((sensor) => {
    const result = differenceInHours(
      new Date(),
      new Date(sensor.lastReceivedMsg),
    );
    const isOnline = (result < 200);
    return { ...sensor, isOnline };
  });
  return sensorsWithStatus;
}

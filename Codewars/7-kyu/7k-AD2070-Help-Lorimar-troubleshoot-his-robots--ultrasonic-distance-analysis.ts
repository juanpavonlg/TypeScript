export type SensorLog = ["Distance:", number, "Meters", string];
export type SensorLogs = SensorLog[];

export function sensorAnalysis(sensorData: SensorLogs): [number, number] {
  const f = (e: number) => +e.toFixed(4);
  const x = sensorData.reduce((a, e) => a + e[1], 0) / sensorData.length;
  const s = Math.sqrt(sensorData.reduce((a, e) => a + (e[1] - x) ** 2, 0) / (sensorData.length - 1));
  return [f(x), f(s)];
} // sensorAnalysis()

console.log(sensorAnalysis([['Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar']]));
console.log(sensorAnalysis([['Distance:', 295.68, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.78, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 298.21, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 296.54, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 133.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.41, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.82, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 134.61, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.86, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.87, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.47, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 135.5, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.9, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 171.36, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.92, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar']]));

export function weatherInfo(temp: number): string {
  const celsius = convertToCelsius(temp);
  return celsius + (celsius < 0 ? " is freezing temperature" : " is above freezing temperature");
} // weatherInfo()

export function convertToCelsius(temperature: number): number {
  return Math.round(5 * (temperature - 32) / 9 * 1e5) / 1e5;;
} // convertToCelsius()

console.log(weatherInfo(50));
console.log(weatherInfo(23));

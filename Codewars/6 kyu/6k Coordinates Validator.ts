export function isValidCoordinates(coordinates: string): boolean {
  if (!/^-?\d+(\.\d+)?, ?-?\d+(\.\d+)?$/.test(coordinates)) {
    return false;
  }
  const [lat, lon] = coordinates.split(",").map((e) => Math.abs(+e));
  if (lat > 90 || lon > 180) {
    return false;
  } 
  return true;
  return /^-?(90|[0-8]\d|\d)(\.\d+)?, ?-?(180|1[0-7]\d|\d{1,2})(\.\d+)?$/.test(coordinates);
} // isValidCoordinates()

console.log(isValidCoordinates("-23, 25"));
console.log(isValidCoordinates("24.53525235, 23.45235"));
console.log(isValidCoordinates("04, -23.234235"));
console.log(isValidCoordinates("43.91343345, 143"));
console.log(isValidCoordinates("4, -3"));

console.log(isValidCoordinates("23.234, - 23.4234"));
console.log(isValidCoordinates("2342.43536, 34.324236"));
console.log(isValidCoordinates("N23.43345, E32.6457"));
console.log(isValidCoordinates("99.234, 12.324"));
console.log(isValidCoordinates("6.325624, 43.34345.345"));
console.log(isValidCoordinates("0, 1,2"));
console.log(isValidCoordinates("0.342q0832, 1.2324"));

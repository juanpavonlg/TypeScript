export function lastSurvivor(letters: string, coords: number[]): string {
  return coords.reduce((a, e) => a = a.slice(0, e) + a.slice(e + 1), letters);
} // lastSurvivor()

console.log(lastSurvivor("zbk", [0, 1]));

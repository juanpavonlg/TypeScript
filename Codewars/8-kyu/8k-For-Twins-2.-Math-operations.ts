export const iceBrickVolume = (radius: number, bottleLength: number, rimLength: number): number => {
  return 2 * radius ** 2 * (bottleLength - rimLength);
}; // iceBrickVolume()

console.log(iceBrickVolume(1, 10, 2));
console.log(iceBrickVolume(5, 30, 7));

export function shuffledArray(shuffled: number[]): number[] {
  const sum = shuffled.reduce((a, e) => a + e) / 2;
  shuffled.splice(shuffled.indexOf(sum), 1);
  return shuffled.sort((a, b) => a - b);
} // shuffledArray()

console.log(shuffledArray([1, 12, 3, 6, 2]));
console.log(shuffledArray([1, -3, -5, 7, 2]));

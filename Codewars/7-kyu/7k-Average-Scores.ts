export function average(scores: number[]): number {
  return Math.round(scores.reduce((a, b) => a + b) / scores.length); 
} // average()

console.log(average([49, 3, 5, 300, 7]));

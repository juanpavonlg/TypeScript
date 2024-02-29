export function rotations(dieArray: number[]): number {
  const moves: number[] = [0];
  for (let i = 0; i < dieArray.length; i++) {
    moves[i] = 0;
    for (let j = 0; j < dieArray.length; j++) {
      moves[i] += dieArray[i] !== dieArray[j] ? dieArray[j] !== 7 - dieArray[i] ? 1 : 2 : 0;
    }
  }
  return Math.min(...moves);
  return Math.min(...dieArray.map(x => dieArray.reduce((a, e) => a + +(x !== e) + +(x === 7 - e), 0))) ^ 0;
} // rotations()

console.log(rotations([1, 1, 1, 1, 1, 6]));
console.log(rotations([1, 2, 3]));
console.log(rotations([3, 3, 3]));
console.log(rotations([1, 6, 2, 3]));
console.log(rotations([]));

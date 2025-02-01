export function cantBeatSoJoin(numbers: number[][]): number[] {
  return numbers.sort((a, b) => sum(b) - sum(a)).flat();
} // cantBeatSoJoin()

const sum = (arr: number[]) => arr.reduce((a, e) => a + e, 0);

console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));
console.log(cantBeatSoJoin([[5, 1], [9, 14], [17, 23], [4, 1], [0, 1]]));
console.log(cantBeatSoJoin([[13, 37], [43, 17], [2, 3], [45, 64], [1, 9]]));
console.log(cantBeatSoJoin([[], [], [], []]));
console.log(cantBeatSoJoin([[], [], [0], []]));
console.log(cantBeatSoJoin([[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]));

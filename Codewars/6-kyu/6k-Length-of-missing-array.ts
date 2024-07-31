export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  const lengths = arrayOfArrays.map((e) => e.length).sort((a, b) => a - b);
  if (lengths.length === 0 || lengths[0] === 0) {
    return 0;
  }
  return (lengths[0] + lengths[lengths.length - 1]) * ((lengths.length + 1) / 2) - lengths.reduce((a, e) => a + e);
} // getLengthOfMissingArray()

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([[3, 4, 3, 4, 4], [0, 4, 0, 3, 1, 1, 4, 2], [2, 0, 3, 2, 0, 0], [0, 1, 4, 0, 3, 3, 1, 0, 3], [4, 4], [0, 4, 1, 4], [3, 4, 2, 3, 0, 0, 1]]));
console.log(getLengthOfMissingArray([[], [0, 1], [2, 1, 4]]));
console.log(getLengthOfMissingArray([]));

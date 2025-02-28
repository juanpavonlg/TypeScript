export function addingShifted(arrayOfArrays: number[][], shift: number): number[] {
  const ans: number[] = new Array(arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1)).fill(0);
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      ans[shift * i + j] += arrayOfArrays[i][j];
    }
  }
  return ans;
} // addingShifted()

console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]], 0));
console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, 7]], 3));
console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7], [1, 1, 1, 1, 1, 1]], 3));

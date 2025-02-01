export function isValid(square: number[][], gap: number) {
  const x = square[0].reduce((a, b) => a + b);
  const nums: number[] = [];
  for (const row of square) {
    if (row.reduce((a, b) => a + b) !== x) {
      return false;
    }
    nums.push(...row);
  }
  for (let col = 0; col < square.length; col++) {
    let sum = 0;
    for (let row = 0; row < square.length; row++) {
      sum += square[row][col];
    }
    if (sum !== x) {
      return false;
    }
  }
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < square.length; i++) {
    sum += square[i][i];
    sum2 += square[square.length - 1 - i][i];
  }
  if (sum !== x || sum2 !== x) {
    return false;
  }
  nums.sort((a, b) => a - b);
  if (nums[0] + gap * (nums.length - 1) !== nums[nums.length - 1]) {
    return false;
  }
  return true;
} // isValid()

let square = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
];
console.log(isValid(square, 1));
square = [
  [22, 1, 16],
  [7, 13, 19],
  [10, 25, 4],
];
console.log(isValid(square, 3));

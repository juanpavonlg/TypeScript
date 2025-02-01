export function houseNumbersSum(inputArray: number[]): number {
  let sum = 0;
  for (let i = 0; inputArray[i]; i++) {
    sum += inputArray[i];
  }
  return sum;
} // houseNumbersSum()

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
  
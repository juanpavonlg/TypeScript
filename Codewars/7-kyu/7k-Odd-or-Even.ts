export function oddOrEven(array: number[]) {
  return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
} // oddOrEven()

console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([]));

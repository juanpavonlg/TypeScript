export function maxProduct(numbers: number[], size: number): number {
  let prod = 1;
  for (; size; size--) {
    prod *= numbers.splice(numbers.indexOf(Math.max(...numbers)), 1)[0];
  }
  return prod;
} // maxProduct()

console.log(maxProduct([10, 8, 7, 9], 3));

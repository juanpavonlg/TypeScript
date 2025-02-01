export function adjacentElementsProduct(arr: number[]): number {
  return Math.max(...arr.map((e, i) => arr[i + 1] ? e * arr[i + 1] : Number.NEGATIVE_INFINITY));
} // adjacentElementsProduct()

console.log(adjacentElementsProduct([1, 2, 3]));

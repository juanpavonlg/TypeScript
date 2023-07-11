export function index(array: number[], n: number): number {
  return n < array.length ? array[n] ** n : -1;
} // index()

console.log(index([1, 3, 10, 100], 3));

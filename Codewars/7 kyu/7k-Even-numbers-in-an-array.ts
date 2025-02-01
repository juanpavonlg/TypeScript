export function evenNumbers(array: number[], n: number): number[] {
  return array.filter((e) => e % 2 === 0).slice(-n);
} // evenNumbers()

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));

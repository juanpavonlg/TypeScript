export const distinct = (a: number[]): number[] => {
  return Array.from(new Set(a));
} // distinct()

console.log(distinct([1, 1, 2]));

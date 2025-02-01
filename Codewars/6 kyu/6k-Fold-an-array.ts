export function foldArray(array: number[], runs: number): number[] {
  const copy = [...array];
  while (copy.length > 1 && runs--) {
    const lim = Math.floor(copy.length / 2);
    for (let i = 0; i < lim; i++) {
      copy[i] += copy.pop() ?? 0;
    }
  }
  return copy;
} // foldArray()

console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5], 2));

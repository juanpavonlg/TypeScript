export function sortByValueAndIndex(array: number[]): number[] {
  return array
    .map((e, i) => [e, e * (i + 1)])
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0]);
} // sortByValueAndIndex()

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));

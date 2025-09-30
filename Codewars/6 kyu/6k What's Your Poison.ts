export function find(rats: number[]): number {
  const bits = new Array(10).fill(0);
  for (const rat of rats) {
    bits[rat] = 1;
  }
  return parseInt(bits.reverse().join(""), 2);
  return rats.reduce((a, e) => a + 2 ** e, 0);
} // find()

console.log(find([1]));
console.log(find([0, 1, 2]));
console.log(find([3, 5, 6, 7, 8, 9]));
console.log(find([0, 3, 5, 4, 9, 8]));
console.log(find([0, 1, 9, 3, 5]));
console.log(find([0, 1, 2, 3, 4, 6]));
console.log(find([0, 1, 3, 4]));

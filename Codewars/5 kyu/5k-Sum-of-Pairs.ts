export function sumPairs(ints: number[], s: number): [number, number] | void {
  const set = new Set();
  for (const n of ints) {
    const r = s - n;
    if (set.has(r)) {
      return [r, n];
    }
    set.add(n);
  }
  // const set = new Set(ints);
  // let ans: [number, number] = [Infinity, Infinity];
  // let si = ints.length;
  // for (const n of set) {
  //   const i = ints.indexOf(s - n, ints.indexOf(n) + 1);
  //   if (i > -1 && i < si) {
  //     ans = [n, ints[i]];
  //     si = i;
  //   }
  // }
  // return ans[0] < Infinity ? ans : undefined;
} // sumPairs()

console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([4, 3, 2, 3, 4], 1));
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));

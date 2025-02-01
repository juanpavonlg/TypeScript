function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let curr = intervals[0];
  for (let i = 1; i < intervals.length; ) {
    if (curr[1] >= intervals[i][0]) {
      curr[1] = Math.max(curr[1], intervals[i][1]);
      intervals.splice(i, 1);
    } else {
      curr = intervals[i];
      i++;
    }
  }
  return intervals;
} // merge()

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));
console.log(merge([[1, 4], [2, 3]]));

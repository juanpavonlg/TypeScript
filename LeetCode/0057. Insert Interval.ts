function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  while (i < intervals.length && intervals[i][0] < newInterval[0]) {
    i++;
  }
  intervals.splice(i, 0, newInterval);
  let curr = intervals[0];
  i = 1;
  while (i < intervals.length) {
    if (curr[1] >= intervals[i][0]) {
      curr[1] = Math.max(intervals[i][1], curr[1]);
      intervals.splice(i, 1);
    } else {
      curr = intervals[i];
      i++;
    }
  }
  return intervals;
}; // insert()

console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));

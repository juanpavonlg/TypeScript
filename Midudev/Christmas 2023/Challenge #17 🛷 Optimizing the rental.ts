function optimizeIntervals(intervals: [number, number][]) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [intervals[0]];
  for (const curr of intervals) {
    const last = ans[ans.length - 1];
    if (curr[0] <= last[1]) {
      last[1] = Math.max(curr[1], last[1]);
    } else {
      ans.push(curr);
    }
  }
  return ans;
} // optimizeIntervals()

console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ]),
);
console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ]),
);
console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ]),
);

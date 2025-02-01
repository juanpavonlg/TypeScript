export function sumOfIntervals(intervals: [number, number][]) {
  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][1] >= intervals[j][0] && intervals[i][1] <= intervals[j][1] || intervals[j][1] >= intervals[i][0] && intervals[j][1] <= intervals[i][1]) {
        intervals[i] = [Math.min(intervals[i][0], intervals[j][0]), Math.max(intervals[i][1], intervals[j][1])];
        intervals.splice(j, 1);
        i--;
        break;
      }
    }
  }
  return intervals.reduce((a, e) => a + e[1] - e[0], 0);
} // sumOfIntervals()

console.log(sumOfIntervals([[1, 2], [6, 10], [11, 15]]));
console.log(sumOfIntervals([[1, 4], [7, 10], [3, 5]]));
console.log(sumOfIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]));
console.log(sumOfIntervals([[0, 20], [-100000000, 10], [30, 40]]));

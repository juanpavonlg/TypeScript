function networkDelayTime(times: number[][], n: number, k: number): number {
  const minTime: number[] = new Array(n + 1).fill(Infinity);
  minTime[0] = -1;
  minTime[k] = 0;
  let flag = true;
  while (flag) {
    flag = false;
    times.forEach(([u, v, w]) => {
      if (minTime[u] !== Infinity && minTime[u] + w < minTime[v]) {
        minTime[v] = minTime[u] + w;
        flag = true;
      }
    });
  }
  const max = Math.max(...minTime);
  return max === Infinity ? -1 : max;
} // networkDelayTime()

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  ),
);
console.log(networkDelayTime([[1, 2, 1]], 2, 1));
console.log(networkDelayTime([[1, 2, 1]], 2, 2));

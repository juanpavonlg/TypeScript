function minCostConnectPoints(points: number[][]): number {
  const visited = new Set<number>();
  const minDist: number[] = new Array(points.length).fill(Infinity);
  let cost = 0;
  minDist[0] = 0;
  while (visited.size < points.length) {
    let i = -1;
    for (let k = 0; k < minDist.length; k++) {
      if (!visited.has(k) && (i === -1 || minDist[k] < minDist[i])) {
        i = k;
      }
    }
    visited.add(i);
    cost += minDist[i];
    const [xi, yi] = points[i];
    for (let j = 0; j < minDist.length; j++) {
      if (!visited.has(j)) {
        const [xj, yj] = points[j];
        const dist = Math.abs(xi - xj) + Math.abs(yi - yj);
        minDist[j] = Math.min(dist, minDist[j]);
      }
    }
  }
  return cost;
} // minCostConnectPoints()

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ]),
);
console.log(
  minCostConnectPoints([
    [3, 12],
    [-2, 5],
    [-4, 1],
  ]),
);

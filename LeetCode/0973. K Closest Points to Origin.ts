function kClosest(points: number[][], k: number): number[][] {
  const dist = new Map<[number, number], number>();
  for (const [x, y] of points) {
    dist.set([x, y], x * x + y * y);
  }
  const keys = Array.from(dist.keys());
  keys.sort((a, b) => dist.get(a)! - dist.get(b)!);
  return keys.slice(0, k);
} // kClosest()

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);

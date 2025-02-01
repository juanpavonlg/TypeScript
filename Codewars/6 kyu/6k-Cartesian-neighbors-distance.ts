export function cartesianNeighborsDistance(x: number, y: number, range: number): number[] {
  const ans = new Set<number>();
  for (let i = 1; i <= range; i ++) {
    for (let j = 0; j <= i; j++) {
      ans.add(+Math.hypot(i, j).toFixed(10));
    }
  }  
  return [...ans];
} // cartesianNeighborsDistance()

console.log(cartesianNeighborsDistance(3, 2, 1));
console.log(cartesianNeighborsDistance(0, 0, 2));
console.log(cartesianNeighborsDistance(0, 0, 11));

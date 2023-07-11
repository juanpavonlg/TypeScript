export function cartesianNeighbor(x: number, y: number): number[][] {
  const coords = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
  return coords.map(coord => [x + coord[0], y + coord[1]]);
} // cartesianNeighbor()

console.log(cartesianNeighbor(2, 2));

export function move(pos: number, roll: number): number {
  return pos + 2 * roll;
} // move()

console.log(move(3, 6));

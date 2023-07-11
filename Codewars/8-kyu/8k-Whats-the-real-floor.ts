export function getRealFloor(n: number): number {
  return n <= 0 ? n : n <= 13 ? n - 1 : n - 2; 
} // getRealFloor()

console.log(getRealFloor(15));

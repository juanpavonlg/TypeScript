export function growingPlant(up: number, down: number, h: number): number {
  let days = 1;
  let height = up;
  while (height < h) {
    height += (up - down);
    days++;
  }
  return days;
} // growingPlant()

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10, 9, 4));

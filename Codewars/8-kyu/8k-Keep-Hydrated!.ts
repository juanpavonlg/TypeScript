export function litres(time: number): number {
  return ~~(0.5 * time);
} // litres()

console.log(litres(1.4));

export function enough(cap: number, on: number, wait: number): number {
  const space = cap - on;
  return space >= wait ? 0 : wait - space;
} // enough()

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));

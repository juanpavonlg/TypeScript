export function smallEnough(a: number[], limit: number): boolean {
  return a.every(n => n <= limit);
} // smallEnough()

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

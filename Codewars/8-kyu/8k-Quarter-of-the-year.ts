export function quarterOf(month: number): number {
  return Math.ceil(month / 3);
} // quarterOf()

console.log(quarterOf(12));

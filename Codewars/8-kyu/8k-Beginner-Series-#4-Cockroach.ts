export function cockroachSpeed(s: number): number{
  return Math.floor(s * 250 / 9);
} // cockroachSpeed()

console.log(cockroachSpeed(1.08));

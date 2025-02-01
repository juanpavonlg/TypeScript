export function extraPerfect(n: number): number[] {
  const extraPerfects: number[] = [];
  for (let i = 0; i < n / 2; i++) {
    extraPerfects.push(2 * i + 1);
  }
  return extraPerfects;
} // extraPerfect

console.log(extraPerfect(10));

export function past(h: number, m: number, s: number): number {
  return 1000 * (3600 * h + 60 * m + s);
} // past()

console.log(past(1, 1, 1));

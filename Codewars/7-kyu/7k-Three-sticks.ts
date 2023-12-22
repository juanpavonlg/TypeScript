export function maxlen(l1: number, l2: number): number {
  const max = Math.max(l1, l2);
  const min = Math.min(l1, l2);
  return max / min < 3 ? Math.min(min, max / 2) : max / 3;
} // maxlen()

console.log(maxlen(5, 12));

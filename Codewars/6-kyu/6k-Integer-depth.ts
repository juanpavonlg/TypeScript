export function computeDepth(n: number): number {
  let depth = 0;
  const digits: Set<String> = new Set();
  do {
    depth++
    Array.from((n * depth).toString()).forEach((e) => digits.add(e));
  } while (digits.size < 10);
  return depth;
} // computeDepth()

console.log(computeDepth(42));

export function deadAntCount(ants: string | null): number {
  if (!ants) {
    return 0;
  }
  ants = ants.replace(/ant/g, "");
  const bits: { [key: string]: number } = { a: 0, n: 0, t: 0 };
  for (const bit of ants) {
    if (bit in bits) {
      bits[bit]++;
    }
  }
  return Math.max(...Object.values(bits));
} // deadAntCount()

console.log(deadAntCount("ant ant ant ant"));
console.log(deadAntCount(null));
console.log(deadAntCount("ant anantt aantnt"));
console.log(deadAntCount("ant ant .... a nt"));

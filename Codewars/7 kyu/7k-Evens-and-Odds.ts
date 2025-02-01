export function evensAndOdds(n: number): string {
  return n % 2 ? n.toString(16) : n.toString(2);
} // evensAndOdds()

console.log(evensAndOdds(127));
console.log(evensAndOdds(128));

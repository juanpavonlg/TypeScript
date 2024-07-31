export function monkeyCount(n: number) {
  return Array.from({ length: n }, (_, i) => i + 1);
} // monkeyCount()

console.log(monkeyCount(10));
console.log(monkeyCount(1));

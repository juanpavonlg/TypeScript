export function polydivisible(x: number): boolean {
  const s = x.toString();
  for (let d = 1; d <= s.length; d++) {
    if (+s.slice(0, d) % d) {
      return false;
    }
  }
  return true;
} // polydivisible()

console.log(polydivisible(1232));
console.log(polydivisible(123220));

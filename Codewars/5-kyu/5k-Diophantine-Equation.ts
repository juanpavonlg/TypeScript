export function solequa(n: number): [number, number][] {
  const sol: [number, number][] = [];
  for (let b = 1; b <= Math.sqrt(n); b ++) {
    const a = n / b;
    if (a % 2 === b % 2) {
      const x = (a + b) / 2;
      const y = (a - b) / 4;
      if (Number.isInteger(y)) {
        sol.push([x, y]);
      }
    }
  }
  return sol;
} // solequa()

console.log(solequa(5));
console.log(solequa(12));
console.log(solequa(13));
console.log(solequa(16));
console.log(solequa(20));
console.log(solequa(90005));

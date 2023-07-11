export function splitTheBill(x: {[k: string]: number}): {[k: string]: number} {
  let tot = Object.keys(x).reduce((sum, key) => sum + x[key], 0);
  const avg = tot / Object.keys(x).length;
  for (const key in x) {
    x[key] = +(x[key] - avg).toFixed(2);
  }
  return x;
} // splitTheBill()

console.log(splitTheBill({A: 20, B: 15, C: 10}));
console.log(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 }));

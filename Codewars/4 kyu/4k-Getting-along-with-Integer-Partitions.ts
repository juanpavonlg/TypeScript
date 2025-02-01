export const part = (n: number): string => {
  const digits = Array.from({length: n}, (_, i) => n - i);
  const parts: number[][] = [];
  const sol: number[] = [];

  function getParts(i: number) {
    const sum = sol.reduce((a, b) => a + b, 0);
    if (sum === n) {
      parts.push([...sol]);
      return;
    }
    if (sum > n || i === digits.length) {
      return;
    }
    getParts(i + 1);
    sol.push(digits[i]);
    getParts(i);
    sol.pop();
  }

  getParts(0);
  const prods = [...new Set(parts.map((x) => x.reduce((a, e) => a * e)))].sort((a, b) => a - b);
  const ran = prods[prods.length - 1] - prods[0];
  const avg = prods.reduce((a, e) => a + e) / prods.length;
  const mid = Math.floor(prods.length / 2);
  const med = prods.length % 2 ? prods[mid] : (prods[mid - 1] + prods[mid]) / 2;
  return `Range: ${ran} Average: ${avg.toFixed(2)} Median: ${med.toFixed(2)}`;
}; // part()

console.log(part(4));
console.log(part(5));
console.log(part(8));

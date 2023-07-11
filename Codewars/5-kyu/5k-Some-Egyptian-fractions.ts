export function decompose(n: string): string[] {
  const nums = n.split("/").map(Number);
  const series: string[] = [];
  let frac: [number, number] = [1, 1];
  for (let i = 0; i < nums.length; i++) {
    frac[i] = nums[i];
  }
  frac = simplify(frac);
  if (frac[0] % frac[1] === 0 && frac[0] / frac[1]) {
    series.push(`${frac[0] / frac[1]}`);
  }
  while(frac[0] !== 1 && frac[0] % frac[1]) {
    const d = ~~(frac[1] / frac[0]) + 1;    
    if (d < 0) {
      break;
    }
    series.push(1 % d ? `1/${d}` : "1");
    frac[0] = -frac[1] % frac[0] + frac[0];
    frac[1] = frac[1] * d;
    frac = simplify(frac);
  }
  if (frac[0] === 1 && frac[1] < Number.MAX_SAFE_INTEGER) {
    series.push(`${frac[0]}/${frac[1]}`);
  }
  return series;
} // decompose()

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
} // gcd()

function simplify(frac: [number, number]): [number, number] {
  const div = gcd(frac[0], frac[1]);
  return [frac[0] / div, frac[1] / div];
} // simplify()

console.log(decompose("2/8"));
console.log(decompose("2/3"));
console.log(decompose("0.66"));
console.log(decompose("12/4"));
console.log(decompose("0"));
console.log(decompose("1.25"));
console.log(decompose("0.9"));

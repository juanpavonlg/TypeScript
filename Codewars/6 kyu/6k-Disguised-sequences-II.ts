export function v1(n: number, p: number): number {
  let sum = 0;
  for (let k = 0; k <= n; k++) {
    sum += (-1) ** k * 4 ** (n - k) * comb(2 * n - k, k);
  }
  return p * sum;
} // v1()

export function u1(n: number, p: number): number {
  let sum = 0;
  for (let k = 0; k <= n; k++) {
    sum += (-1) ** k * 4 ** (n - k) * comb(2 * n - k + 1, k);
  }
  return p * sum;
} // u1()

function comb(n: number, k: number): number {
  let num = 1;
  let den = 1;
  for (let i = 0; i < k; i ++) {
    num *= n - i;
    den *= k - i; // i + 1;
  }
  return num / den;
} // comb()

function vEff(n: number, p: number): number {
  return (2 * n + 1) * p;
} // vEff()

function uEff(n: number, p: number): number {
  return (n + 1) * p;
} // vEff()

console.log(vEff(5, 18));
console.log(vEff(4, 18));
console.log(uEff(4, 18));

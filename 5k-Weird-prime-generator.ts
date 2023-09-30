export function countOnes(n: number): number {
  return gn(n).filter((e) => e === 1).length;
} // countOnes()

export function maxPn(n: number): number {
  return Math.max(...pn(n));
} // maxPn()

export function anOverAverage(n: number): number {
  const aOver = anOver(n);
  return aOver.reduce((a, e) => a + e) / aOver.length;
} // anOverAverage()

function gcd(a: number, b: number): number {  
  return b === 0 ? a : gcd(b, a % b);
} // gcd()

const an = (function() {
  const a: number[] = [7];
  return function(n: number): number[] {
    if (a[n - 1]) {
      return a.slice(0, n);
    }  
    for (let i = a.length; i < n; i++) {
      a[i] = a[i - 1] + gcd(i + 1, a[i - 1]);
    }
    return a;
  }
})();

const gn = (function() {
  const g = [1];
  return function(n: number): number[] {
    if (g[n - 1]) {
      return g.slice(0, n);
    }
    const a = an(n);
    for (let i = g.length; i < n; i++) {
      g[i] = a[i] - a[i - 1];
    }
    return g;
  }
})();

function pn(n: number): number[] {
  let p: number[] = [];
  let i = 1;
  while (p.length < n) {
    p = [...new Set(gn(i).filter((e) => e !== 1))];
    i *= 2;
  }
  return p.slice(0, n);
} // p()

function anOver(n: number): number[] {
  let aOver: number[] = [];
  let i = 1;
  while (aOver.length < n) {
    aOver = [];
    const a = an(i);
    const g = gn(i).filter((e, j) => {
      if (e !== 1) {
        return aOver.push(a[j] / (j + 1));
      }
    });
    i *= 2;
  }  
  return aOver.slice(0, n);
} // anOver()

console.log(an(25));
console.log(gn(25));
console.log(countOnes(25));
console.log(pn(25));
console.log(maxPn(5));
console.log(maxPn(1));
console.log(anOver(50));
console.log(anOverAverage(50));

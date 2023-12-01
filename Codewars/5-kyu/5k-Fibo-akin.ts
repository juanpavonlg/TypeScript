function u(n: number): number[] {
  const fibo = [1, 1];
  for (let i = 2; i < n; i++) {    
    fibo[i] = fibo[i - fibo[i - 1]] + fibo[i - fibo[i - 2]]; 
  }
  return fibo;
} // u()

export function lengthSupUK(n: number, k: number): number {
  return u(n).filter((e) => e >= k).length;
} // lengthSupUK()

export function comp(n: number): number {
  const ans = u(n);
  return ans.reduce((a, e, i) => a += +(e < ans[i - 1]), 0);
} // comp()

console.log(u(90000)[89999]);
console.log(lengthSupUK(23, 12));
console.log(comp(23));

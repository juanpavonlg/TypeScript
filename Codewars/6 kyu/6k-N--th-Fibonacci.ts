export function nthFibo(n: number): number {
  let [curr, next] = [0, 1];
  for (let i = 1; i < n; i++) {
    [curr, next] = [next, curr + next];
  }
  return curr;
} // nthFibo()

console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(4));

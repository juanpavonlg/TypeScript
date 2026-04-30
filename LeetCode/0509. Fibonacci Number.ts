function fib(n: number): number {
  let [prev, curr] = [0, 1];
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return n ? curr : prev;
} // fib()

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

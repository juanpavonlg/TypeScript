export function fcn(n: number): number {
  // let curr = 1;
  // let next = 2;
  // for (let i = 1; i <= n; i++) {
  //   [curr, next] = [next, 6 * curr * next / (5 * curr - next)];
  // }
  // return curr;
  return 2 ** n;
} // fcn()

console.log(fcn(17));
console.log(fcn(21));

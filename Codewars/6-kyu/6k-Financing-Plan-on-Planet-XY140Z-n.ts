export function finance(n: number): number {
  return n * factor(n);
  return n * (n + 1) * (n + 2) / 2;
} // finance()

function factor(n: number): number {
  return n > 1 ? n + 1 + factor(n - 1) : 3;
} // factor()

console.log(finance(5));
console.log(finance(6));
console.log(finance(7));
console.log(finance(5000));

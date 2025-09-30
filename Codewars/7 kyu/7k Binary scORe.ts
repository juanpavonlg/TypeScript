export function score(n: number): number {
  return 2 ** Math.ceil(Math.log2(n + 1)) - 1;
} // score()

console.log(score(0));
console.log(score(1));
console.log(score(49));
console.log(score(1000000));
console.log(score(2));

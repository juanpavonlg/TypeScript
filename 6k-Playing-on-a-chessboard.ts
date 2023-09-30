export function game(n: number): number[] {
  const num = n * n;
  return num % 2 === 0 ? [num / 2] : [num, 2];
} // game()

console.log(game(0));
console.log(game(1));
console.log(game(2));
console.log(game(3));

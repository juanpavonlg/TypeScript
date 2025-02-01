export function intRac(n: number, guess: number): number {
  const e = 1;
  let x = guess;
  let aprox = 0;
  do {
    guess = x;
    x = Math.floor((x + n / x) / 2);
    aprox++;
  } while (Math.abs(guess - x) >= e);
  return aprox++;
} // intRac()

console.log(intRac(25, 1));
console.log(intRac(125348, 300));
console.log(intRac(125348981764, 356243));

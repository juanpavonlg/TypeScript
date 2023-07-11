export function divisors(n: number) {
  let div = 1;
  for (let i = 1; i <= ~~(n / 2); i++) {
    div += n % i ? 0 : 1;
  }
  return div;
} // divisors()

console.log(divisors(0));


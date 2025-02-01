export function step(g: number, m: number, n: number): [number, number] | null {
  for (let i = m; i <= n - g; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
  return null;
} // step()

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

console.log(step(2, 100, 110));
console.log(step(6, 100, 110));

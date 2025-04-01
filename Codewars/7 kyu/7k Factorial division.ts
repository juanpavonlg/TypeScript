export function factorialDivision(n: bigint, d: bigint) {
  let ans = 1n;
  for (let f = n; f > d; f--) {
    ans *= f;
  }
  return ans;
} // factorialDivision()

console.log(factorialDivision(5n, 3n));
console.log(factorialDivision(8n, 5n));
console.log(factorialDivision(10000n, 9999n));
console.log(factorialDivision(98n, 90n));
console.log(factorialDivision(262n, 256n));
console.log(factorialDivision(9741n, 9737n));

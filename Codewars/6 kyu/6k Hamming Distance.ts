export function hammingDistance(a: string, b: string): number {
  return [...a].reduce((a, e, i) => a + (e === b[i] ? 0 : 1), 0);
} // hammingDistance()

console.log(hammingDistance("I like turtles", "I like turkeys"));
console.log(hammingDistance("Hello World", "Hello World"));
console.log(hammingDistance("espresso", "Expresso"));

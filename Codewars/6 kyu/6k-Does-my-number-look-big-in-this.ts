export function narcissistic(value: number): boolean {
  return [...value.toString()].reduce((a, e, _, o) => a + (+e) ** o.length, 0) === value;
} // narcissistic()

console.log(narcissistic(153));
console.log(narcissistic(1652));

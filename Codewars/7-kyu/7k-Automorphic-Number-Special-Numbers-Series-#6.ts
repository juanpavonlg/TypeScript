export function automorphic(n: number): string {
  return (n ** 2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
} // automorphic()

console.log(automorphic(5));
console.log(automorphic(25));

export const evenOrOdd = new Proxy((n: number) => (n % 2 ? "Odd" : "Even"), {
  get: (f, n: string) => f(+n),
}); // evenOrOdd()

console.log(evenOrOdd(2));
console.log(evenOrOdd[2]);
console.log(evenOrOdd(7));
console.log(evenOrOdd[7]);

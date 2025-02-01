export const productFib = (prod: number): [number, number, boolean] => {
  let fib1 = 0;
  let fib2 = 1;
  while (fib1 * fib2 < prod) {
    fib2 += fib1;
    fib1 = fib2 - fib1;
  }
  return [fib1, fib2, fib1 * fib2 === prod];
} // productFib()

console.log(productFib(714));
console.log(productFib(800));

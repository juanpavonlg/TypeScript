export const factorial = (n: number): number => {
  return n > 1 ? n * factorial(n - 1) : 1;
}; // factorial()

console.log(factorial(5));

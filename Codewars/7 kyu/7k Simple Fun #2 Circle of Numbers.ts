export function circleOfNumbers(n: number, firstNumber: number) {
  return (firstNumber + n / 2) % n;
} // circleOfNumbers()

console.log(circleOfNumbers(10, 2));

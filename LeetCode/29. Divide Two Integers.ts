function divide(dividend: number, divisor: number): number {
  const sign = Math.sign(dividend) * Math.sign(divisor);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  if (dividend < divisor) {
    return 0;
  }
  if (dividend === divisor) {
    return sign;
  }
  let quotient: number;
  if (divisor === 1) {
    quotient = dividend;
  } else {
    quotient = Math.floor(Math.exp(Math.log(dividend) - Math.log(divisor)));
  }
  if (quotient > 2_147_483_647 && sign > 0) {
    return 2_147_483_647;
  } else if (-quotient < -2_147_483_648) {
    return -2_147_483_648;
  } 
  return sign * quotient;
} // divide()

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-2147483648, -1));

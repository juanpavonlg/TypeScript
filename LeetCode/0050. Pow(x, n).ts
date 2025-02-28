function myPow(x: number, n: number): number {
  function pow(x: number, n: number): number {
    if (n === 0) {
      return 1;
    } else if (n % 2 === 0) {
      return myPow(x * x, n / 2)
    }
    return x * pow(x * x, (n - 1) / 2);
  } // pow()

  return n > 0 ? pow(x, n) : 1 / pow(x, -n);
} // myPow()

console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
console.log(myPow(2.0, -200000000));

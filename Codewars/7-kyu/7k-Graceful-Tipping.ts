export function gracefulTipping(bill: number): number {
  bill += 0.15 * bill;
  if (bill < 10) {
    return Math.ceil(bill);
  }
  const factor = 10 ** Math.floor(Math.log10(bill)) / 2;
  return Math.ceil(bill / factor) * factor;
} // gracefulTipping()

console.log(gracefulTipping(1));
console.log(gracefulTipping(7));
console.log(gracefulTipping(12));
console.log(gracefulTipping(86));

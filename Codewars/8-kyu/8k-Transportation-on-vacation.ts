export function rentalCarCost(d: number): number {
  return d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : 40 * d;
} // rentalCarCost()

console.log(rentalCarCost(1));


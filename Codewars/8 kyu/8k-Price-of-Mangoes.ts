export function mango(quantity: number, price: number): number {
  return (quantity - ~~(quantity / 3)) * price;
} // mango()

console.log(mango(5, 3));
console.log(mango(7, 3));
console.log(mango(9, 5));
console.log(mango(52, 28));

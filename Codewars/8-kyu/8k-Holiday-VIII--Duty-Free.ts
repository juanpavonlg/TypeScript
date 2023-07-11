export function dutyFree(normPrice: number, discount: number, hol: number): number{
  return ~~(hol / (normPrice * discount / 100))
} // dutyFree()

console.log(dutyFree(12, 50, 1000));

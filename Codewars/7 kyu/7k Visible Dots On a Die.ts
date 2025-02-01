export function totalAmountVisible(topNum: number, numOfSides: number): number {
  return (numOfSides + 1) * (numOfSides / 2 - 1) + topNum;
} // totalAmountVisible()

console.log(totalAmountVisible(3, 6));
console.log(totalAmountVisible(3, 8));
console.log(totalAmountVisible(1, 12));

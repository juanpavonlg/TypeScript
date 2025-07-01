export function startSmoking(bars:number, boxes:number): number {
  let cigarettes = 10 * 18 * bars + 18 * boxes;
  let fifth = cigarettes;
  while (fifth >= 5) {
    const res = fifth % 5;
    fifth = fifth / 5 | 0;
    cigarettes += fifth;
    fifth += res;
  }
  return cigarettes;
} // startSmoking()

console.log(startSmoking(0, 1));
console.log(startSmoking(1, 0));
console.log(startSmoking(1, 1));
console.log(startSmoking(10, 2));
console.log(startSmoking(0, 0));

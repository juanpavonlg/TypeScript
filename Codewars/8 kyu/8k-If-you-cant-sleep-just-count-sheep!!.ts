export function countSheep(num: number): string {
  let sheeps = "";
  for (let i = 1; i <= num; i++) {
    sheeps += `${i} sheep...`
  }
  return sheeps;
} // countSheep()

console.log(countSheep(3));

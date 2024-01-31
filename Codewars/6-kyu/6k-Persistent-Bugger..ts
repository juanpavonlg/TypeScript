export function persistence(num: number): number {
  let pers = 0;
  while (num > 9) {
    num = [...num.toString()].reduce((a, e) => a * +e, 1);
    pers++;
  }
  return pers;
} // persistence()

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));

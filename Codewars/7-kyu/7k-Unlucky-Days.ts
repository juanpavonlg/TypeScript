export function unluckyDays(year: number): number {
  let unlucky = 0;
  for (let m = 0; m < 12; m++) {
    if (new Date(year, m, 13).getDay() === 5) {
      unlucky++;
    }
  }
  return unlucky;
} // unluckyDays()

console.log(unluckyDays(2015));
console.log(unluckyDays(1986));

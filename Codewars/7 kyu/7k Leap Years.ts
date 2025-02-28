export function isLeap(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
} // isLeap()

console.log(isLeap(2020));
console.log(isLeap(2000));
console.log(isLeap(2015));
console.log(isLeap(2100));

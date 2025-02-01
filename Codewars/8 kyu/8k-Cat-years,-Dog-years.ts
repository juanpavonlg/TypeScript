export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  return humanYears > 1 ? [humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2)] : [1, 15, 15];
} // humanYearsCatYearsDogYears()

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));

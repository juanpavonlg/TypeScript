export const centuryFromYear = (year: number): number => {
  return Math.ceil(year / 100);
}; // centuryFromYear()

console.log(centuryFromYear(1789));

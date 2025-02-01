export function nextHappyYear(year: number): number {
  do {
    year++;
  } while(new Set(year.toString()).size != 4)
  return year;
} // nextHappyYear()

console.log(nextHappyYear(1001));
console.log(nextHappyYear(2018));

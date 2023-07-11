export function amIAfraid(day: string, num: number): boolean {
  const days: {[i: string]: boolean} = {
    Monday: num === 12,
    Tuesday: num > 95,
    Wednesday: num === 34,
    Thursday: num === 0,
    Friday: !(num % 2),
    Saturday: num === 56,
    Sunday: Math.abs(num) === 666,
  };
  return days[day];
} // amIAfraid()

console.log(amIAfraid("Monday", 13));
console.log(amIAfraid("Sunday", -666));

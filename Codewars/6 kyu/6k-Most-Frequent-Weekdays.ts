export function mostFrequentDays(year: number): string[] {
  const dayOfWeek = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const ans: string[] = [];
  let start = new Date(year, 0, 1).getDay();
  ans.push(start !== 0 ? dayOfWeek[start] : dayOfWeek[7]);
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    start !== 0 ? ans.push(dayOfWeek[++start]) : ans.unshift(dayOfWeek[1]);
  }
  return ans;
} // mostFrequentDays()

console.log(mostFrequentDays(1900));
console.log(mostFrequentDays(2000));
console.log(mostFrequentDays(2023));
console.log(mostFrequentDays(1984));

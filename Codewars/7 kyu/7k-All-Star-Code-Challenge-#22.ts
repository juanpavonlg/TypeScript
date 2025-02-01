export function toTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
} // toTime()

console.log(toTime(3600));
console.log(toTime(3601));
console.log(toTime(3500));
console.log(toTime(323500));

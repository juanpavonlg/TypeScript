export function to24hourtime(hour: number, minute: number, period: string): string {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  const format = (n: number) => n.toString().padStart(2, "0");
  hour = hour % 12 + (period === "pm" ? 12 : 0);
  return `${format(hour)}${format(minute)}`;
} // to24hourtime()

console.log(to24hourtime(1, 0, "am"));
console.log(to24hourtime(1, 0, "pm"));
console.log(to24hourtime(12, 0, "am"));
console.log(to24hourtime(12, 0, "pm"));
console.log(to24hourtime(6, 30, "am"));
console.log(to24hourtime(9, 45, "pm"));

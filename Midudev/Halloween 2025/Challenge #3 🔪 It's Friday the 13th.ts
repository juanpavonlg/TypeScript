function myersCalendar(year: number): string[] {
  const nights: string[] = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      nights.push(date.toLocaleDateString("en-CA"));
    }
    if (month === 9) {
      nights.push(`${year}-10-31`);
    }
  }
  return year > 0 ? nights : [];
} // myersCalendar()

console.log(myersCalendar(2025));
console.log(myersCalendar(2026));
console.log(myersCalendar(2024));

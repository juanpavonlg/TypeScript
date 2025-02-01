export function getGrade(a: number, b: number, c: number): string {
  const avg = (a + b + c) / 3;
  return avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : avg >= 60 ? 'D' : 'F';
} // getGrade()

console.log(getGrade(95, 90, 93));

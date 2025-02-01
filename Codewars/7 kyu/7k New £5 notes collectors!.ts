export function getNewNotes(salary: number, bills: number[]): number {
  salary -= bills.reduce((a, e) => a + e, 0);
  return salary > 0 ? Math.floor(salary / 5) : 0;
} // getNewNotes()

console.log(getNewNotes(2000, [500, 160, 400]));
console.log(getNewNotes(1260, [500, 50, 100]));
console.log(getNewNotes(3600, [1800, 350, 460, 500, 15]));
console.log(getNewNotes(1995, [1500, 19, 44]));

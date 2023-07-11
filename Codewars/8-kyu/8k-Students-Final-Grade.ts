export function finalGrade(exam: number, projects: number): number {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
} // finalGrade()

console.log(finalGrade(85, 5));

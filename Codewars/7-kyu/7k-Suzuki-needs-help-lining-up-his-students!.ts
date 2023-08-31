export function lineupStudents(students: string): string[] {
  return students.split(" ").sort((a, b) => {
    if (a.length === b.length) {
      return a < b ? 1 : -1;
    }
    return b.length - a.length;
  });
} // lineupStudents()

const s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
console.log(lineupStudents(s1));

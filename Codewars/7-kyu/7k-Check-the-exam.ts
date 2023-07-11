export function checkExam(array1: string[], array2: string[]): number {
  let score = 0;
  array1.forEach((correct, i) => {
    score += correct === array2[i] ? 4 : array2[i] !== "" ? -1 : 0;
  });
  return score > 0 ? score : 0;
} // checkExam()

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));

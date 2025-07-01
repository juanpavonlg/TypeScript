export function choreAssignment(chores: number[]): number[] {
  const ans: number[] = [];
  chores.sort((a, b) => a - b);
  for (let i = 0; i < chores.length / 2; i++) {
    ans.push(chores[i] + chores.at(-i - 1)!);
  }
  return ans.sort((a, b) => a - b);
} // choreAssignment()

console.log(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]));

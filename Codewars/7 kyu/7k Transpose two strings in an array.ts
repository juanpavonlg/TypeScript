export function transposeTwoStrings(arr: string[]): string {
  const len = Math.max(arr[0].length, arr[1].length);
  const ans: string[] = [];
  for (let i = 0; i < len; i++) {
    ans.push(`${arr[0][i] ?? " "} ${arr[1][i] ?? " "}`);
  }
  return ans.join("\n");
} // transposeTwoStrings()

console.log(transposeTwoStrings(["Hello", "World"]));

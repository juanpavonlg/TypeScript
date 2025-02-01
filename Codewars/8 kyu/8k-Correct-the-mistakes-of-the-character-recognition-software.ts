export function correct(s: string): string {
  const replace: {[index: string]: any} = {'0': 'O', '1': 'I', '5': 'S'};
  let fixed = "";
  for (const char of s) {
    fixed += char in replace ? replace[char] : char;
  }
  return fixed;
} // correct()

console.log(correct("L0ND0N"));

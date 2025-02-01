export function cleanString(s: string): string {
	const ans: string[] = [];
  for (const ch of s) {
    if (ch !== "#") {
      ans.push(ch);
    } else {
      ans.pop();
    }
  }
  return ans.join("");
} // cleanString()

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc##d######"));
console.log(cleanString("#######"));
console.log(cleanString(""));

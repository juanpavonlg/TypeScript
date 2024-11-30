function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let common = true;
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j]) {
        common = false;
        break;
      }
    }
    if (common) {
      prefix += strs[0][j];
    } else {
      break;
    }
  }
  return prefix;
} // longestCommonPrefix()

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

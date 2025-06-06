function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) {
    return true;
  }
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
      if (i === s.length) {
        return true;
      }
    } 
  }
  return false;
} // isSubsequence()

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));

function checkInclusion(s1: string, s2: string): boolean {
  const count1: number[] = new Array(26).fill(0);
  const count2: number[] = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i) - 97]++;
  }
  if (areEqual(count1, count2)) {
    return true;
  }
  for (let i = s1.length; i < s2.length; i++) {
    count2[s2.charCodeAt(i - s1.length) - 97]--;
    count2[s2.charCodeAt(i) - 97]++;
    if (areEqual(count1, count2)) {
      return true;
    }
  }
  return false;
} // checkInclusion()

function areEqual(a: number[], b: number[]) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
} // areEqual()

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));

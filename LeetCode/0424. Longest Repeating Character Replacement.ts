function characterReplacement(s: string, k: number): number {
  const counts: number[] = new Array(26).fill(0);
  let max = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    counts[s.charCodeAt(r) - 65]++;
    if (r - l + 1 - Math.max(...counts) > k) {
      counts[s.charCodeAt(l) - 65]--;
      l++;
    }
    max = Math.max(r - l + 1, max);
  }
  return max;
} // characterReplacement()

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));

function lengthOfLongestSubstring(s: string): number {
  const substr: { [key: string]: number } = {};
  let max = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (s[r] in substr) {
      l = Math.max(substr[s[r]] + 1, l);
    }
    substr[s[r]] = r;
    max = Math.max(r - l + 1, max);
  }
  return max;
} // lengthOfLongestSubstring()

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcabcbbbcaxyz"));

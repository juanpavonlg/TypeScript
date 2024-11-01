function longestPalindrome(s: string): string {
  let ans = "";
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (s[j + 1] === s[i]) {
      j++;
    }
    let k = 1;
    while (s[i - k] === s[j + k] && k < s.length - j) {
      k++;
    }
    const [first, last] = [i - k + 1, j + k];
    ans = last - first > ans.length ? s.slice(first, last) : ans;
    if (ans.length === s.length) {
      break;
    }
    i++;
  }
  return ans;
} // longestPalindrome()

console.log(longestPalindrome("babadb"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("cbabcdcbabc"));
console.log(longestPalindrome("cbbc"));
console.log(longestPalindrome("bananas"));
console.log(longestPalindrome("ababababa"));

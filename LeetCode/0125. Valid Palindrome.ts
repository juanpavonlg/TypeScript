function isPalindrome(s: string): boolean {
  let [l, r] = [0, s.length - 1];
  while (l < r) {
    if (!isAlphanumeric(s[l])) {
      l++;
      continue;
    }
    if (!isAlphanumeric(s[r])) {
      r--;
      continue;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
} // isPalindrome()

function isAlphanumeric(ch: string) {
  return /[0-9A-Za-z]/.test(ch);
} // isAlphaNumeric()

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("ab_a"));

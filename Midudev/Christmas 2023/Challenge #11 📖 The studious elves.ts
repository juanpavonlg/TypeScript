function getIndexsForPalindrome(word: string) {
  const copy = [...word];
  const ans: number[] = [];
  const [mid, mid2] = [copy.length / 2, Math.ceil((copy.length - 1) / 2)];
  let isPalindrome = true;
  let [l, r] = [0, copy.length - 1];
  while (l < r) {
    if (copy[l] !== copy[r]) {
      isPalindrome = false;
      for (let i = l + 1; i < mid && !isPalindrome; i++) {
        if (copy[i] === copy[r] && ans.length === 0) {
          ans.push(l, i);
          [copy[l], copy[i]] = [copy[i], copy[l]];
          isPalindrome = true;
        }
      }
      for (let j = r - 1; j >= mid2 && !isPalindrome; j--) {
        if (copy[j] === copy[l] && ans.length === 0) {
          ans.push(j, r);
          [copy[j], copy[r]] = [copy[r], copy[j]];
          isPalindrome = true;
        }
      }
    }
    [l++, r--];
  }
  return isPalindrome ? ans : null;
} // getIndexsForPalindrome()

console.log(getIndexsForPalindrome("anna"));
console.log(getIndexsForPalindrome("abab"));
console.log(getIndexsForPalindrome("abac"));
console.log(getIndexsForPalindrome("aaaaaaaa"));
console.log(getIndexsForPalindrome("aaababa"));
console.log(getIndexsForPalindrome("caababa"));
console.log(getIndexsForPalindrome("rotaratov"));

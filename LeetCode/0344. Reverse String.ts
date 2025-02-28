function reverseString(s: string[]): void {
  let [l, r] = [0, s.length - 1];
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
} // reverseString()

let s = ["h", "e", "l", "l", "o"];
reverseString(s)
console.log(s);
s = ["H", "a", "n", "n", "a", "h"];
reverseString(s)
console.log(s);

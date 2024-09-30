function strStr(haystack: string, needle: string): number {
  const lim = haystack.length - needle.length;
  for (let i = 0; i <= lim; i++) {
    let j = 0;
    while (needle[j] && needle[j] === haystack[i + j]) {
      j++;
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
} // strStr()

console.log(strStr("sarbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));

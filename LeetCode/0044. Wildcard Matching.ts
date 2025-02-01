function isMatch(s: string, p: string): boolean {
  const cache: { [key: string]: boolean } = {};

  function dfs(i: number, j: number): boolean {
    const key = `${i}${j}`;
    if (key in cache) {
      return cache[key];
    } else if (i >= s.length && j >= p.length) {
      return true;
    } else if (j >= p.length) {
      return false;
    }
    const match = i < s.length && (s[i] === p[j] || p[j] === "?" || p[j] === "*");
    if (p[j] === "*") {
      return (cache[key] = dfs(i, j + 1) || (match && dfs(i + 1, j))); // don't use * || use *
    } else if (match) {
      return (cache[key] = dfs(i + 1, j + 1));
    }
    return (cache[key] = false);
  }

  return dfs(0, 0);
} // isMatch()

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "*"));
console.log(isMatch("cb", "?a"));
console.log(isMatch("aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba", "a*******b"));

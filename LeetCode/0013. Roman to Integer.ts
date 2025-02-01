function romanToInt(s: string): number {
  const weights: {[key: string]: number} = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    const weight = weights[s[i]];
    int += weight < weights[s[i + 1]] ? -weight : weight;
  }
  return int;
} // romanToInt()

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

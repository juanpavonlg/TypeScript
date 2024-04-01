export function order(words: string): string {
  const ans: string[] = [];
  for (const word of words.split(" ")) {
    ans[+word.match(/\d/)! - 1] = word;
  }
  return ans.join(" ");
  return words.split(" ").sort((a, b) => +a.match(/\d/)! - +b.match(/\d/)!).join(" ");
} // order()

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

export function sortTheInnerContent(words: string): string {
  const splitted = words.split(" ").map((e) => e.split(""));
  splitted.forEach((word) => {
    word.splice(1, word.length - 2, ...word.slice(1, -1).sort().reverse());
  });
  return splitted.map((e) => e.join("")).join(" ");
  return words.split(" ").map((word) => word[0] + word.slice(1, -1).split("").sort().reverse().join("") + word.slice(-1)).join(" ");
} // sortTheInnerContent()

console.log(sortTheInnerContent("sort the inner content in descending order"));
console.log(sortTheInnerContent("wait for me"));
console.log(sortTheInnerContent("this kata is easy"));

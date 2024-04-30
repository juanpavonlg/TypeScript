export function bestFriend(txt: string, a: string, b: string): boolean {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) {
      return false;
    }
  }
  return true;
  return !RegExp(`${a}[^${b}]|${a}$`, "g").test(txt);
} // bestFriend()

console.log(bestFriend("he headed to the store", "h", "e"));
console.log(bestFriend("abcdee", "e", "e"));
console.log(bestFriend("i found an ounce with my hound", "o", "u"));
console.log(bestFriend("we found your dynamite", "d", "y"));

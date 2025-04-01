export function sendMessage(message: string): string {
  const keys: {[key: string]: string[]} = {
    "1": ["1", ".", ",", "?", "!"],
    "2": ["2", "a", "b", "c"],
    "3": ["3", "d", "e", "f"],
    "4": ["4", "g", "h", "i"],
    "5": ["5", "j", "k", "l"],
    "6": ["6", "m", "n", "o"],
    "7": ["7", "p", "q", "r", "s"],
    "8": ["8", "t", "u", "v"],
    "9": ["9", "w", "x", "y", "z"],
    "*": ["*", "'", "-", "+", "="],
    "0": ["0", " "],
    "#": ["#"],
  };
  let ans = "";
  let prev = "";
  let iPrev = -1;
  let _case = false;
  for (const ch of message) {
    let curr = "";
    let i = -1;
    for (const key in keys) {
      if (keys[key].includes(ch.toLowerCase())) {
        curr = key;
        i = keys[key].indexOf(ch.toLowerCase());
      }
    }
    if (/[a-z]/.test(ch.toLowerCase())) {
      if (ch !== keys[curr][i] && !_case) {
        _case = true;
        ans += "#";
      } else if (ch === keys[curr][i] && _case) {
        _case = false;
        ans += "#";
      }
    }
    if (curr === prev && iPrev !== 0 && ans.at(-1) !== "#") {
      ans += " ";
    }
    ans += i === 0 ? `${curr}-` : curr.repeat(i);
    prev = curr;
    iPrev = i;
  }
  return ans;
} // sendMessage()

console.log(sendMessage("Def Con 1!"));
console.log(sendMessage("     "));

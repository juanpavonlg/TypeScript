export function mutations(alice: string[], bob: string[], word: string, first: number): number {
  const a = [...alice];
  const b = [...bob];
  let aInPlay = true;
  let bInPlay = true;
  let firstRound = true;
  while (aInPlay && bInPlay) {
    let res = getWord(word, first ? b : a, first ? a : b);
    if (res) {
      word = res;
    } else {
      first ? bInPlay = false : aInPlay = false;
    }
    first ^= 1;
    if (firstRound) {
      res = getWord(word, first ? b : a, first ? a : b);
      if (res) {
        word = res;
      } else {
        first ? bInPlay = false : aInPlay = false;
      }
      first ^= 1;
      firstRound = false;
    }
  }
  if (aInPlay) {
    return 0;
  } else if (bInPlay) {
    return 1;
  }
  return -1;
} // mutations()

function getWord(goal: string, words: string[], other: string[]): string {
  for (let word of words) {
    let same = 0;
    for (let i = 0; i < goal.length; i++) {
      if (word[i] === goal[i]) {
        same++;
      }
    }
    if (same === 3 && new Set(word).size === 4) {
      let index = words.indexOf(goal);
      if (index >= 0) {
        words.splice(index, 1);
      }
      index = other.indexOf(goal);
      if (index >= 0) {
        other.splice(index, 1);
      }
      return words.splice(words.indexOf(word), 1)[0];
    }
  }
  return "";
} // getWord()

const alice = ["plat", "rend", "bear", "soar", "mare", "pare", "flap", "neat", "clan", "pore"];
const bob = ["boar", "clap", "farm", "lend", "near", "peat", "pure", "more", "plan", "soap"];
console.log(mutations(alice, bob, "send", 0));
console.log(mutations(alice, bob, "flip", 1));
console.log(mutations(alice, bob, "calm", 1));
console.log(mutations(alice, bob, "more", 1));
console.log(mutations(alice, bob, "maze", 0));
console.log(mutations(alice, bob, "flap", 1));

function letterCombinations(digits: string): string[] {
  const keyboard: { [key: string]: string } = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };
  let len = digits ? 1 : 0;
  for (const digit of digits) {
    len *= keyboard[digit].length;
  }
  const combs = Array(len).fill("");
  let span = len;
  for (const digit of digits) {
    const letters = keyboard[digit];
    span /= letters.length;
    let j = -1;
    for (let i = 0; i < len; i++) {
      if (i % span === 0) {
        j = ++j % letters.length;
      }
      combs[i] += letters[j];
    }
  }
  return combs;
  // if (digits === "") {
  //   return [];
  // }
  // const keyboard: { [key: string]: string } = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };
  // const combs: string[] = [];
  
  // function backtrack(curr: string, index: number) {
  //   if (index === digits.length) {
  //     combs.push(curr);
  //     return;
  //   }
  //   for (const ch of keyboard[digits[index]]) {
  //     backtrack(curr + ch, index + 1);
  //   }
  // }

  // backtrack("", 0);
  // return combs;
} // letterCombinations()

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("278"));
console.log(letterCombinations("5678"));

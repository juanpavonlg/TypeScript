export function numberToEnglish(x: number): string {
  if (x < 0 || x > 999999 || !Number.isInteger(x)) {
    return "";
  }
  const weights: { [key: number]: string } = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
  };
  if (x === 0) {
    return "zero";
  }
  const digits: number[] = [];
  while (x > 0) {
    digits.push(x % 10);
    x = x / 10 | 0;
  }
  const ans: string[] = [];
  let factor = 1;
  let local = 1;
  for (let i = 0; i < digits.length; i++) {
    if (i % 3 === 0) {
      local = 1;
    }
    if (factor === 1000) {
      ans.push(weights[factor]);
    }
    if (digits[i]) {
      if (local === 100) {
        ans.push(weights[local]);
        ans.push(weights[digits[i]]);
      } else {
        const teens = 10 * digits[i + 1] + digits[i];
        if (teens >= 10 && teens <= 20 && local === 1) {
          ans.push(weights[teens]);
          i++;
          local *= 10;
          factor *= 10;
        } else {
          ans.push(weights[digits[i] * local]);
        }
      }
    }
    local *= 10;
    factor *= 10;
  }
  return ans.reverse().join(" ");
} // numberToEnglish()

console.log(numberToEnglish(0));
console.log(numberToEnglish(27));
console.log(numberToEnglish(100));
console.log(numberToEnglish(7012));
console.log(numberToEnglish(99205));
console.log(numberToEnglish(999999));
console.log(numberToEnglish(102012));

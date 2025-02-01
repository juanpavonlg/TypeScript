function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const ans: string[][] = Array.from({ length: num2.length + 1 }, () => Array(num1.length + num2.length).fill(""));
  let delta = 0;
  for (let i = 0; i < num2.length; i++) {
    let carry = 0;
    let j = 0;
    for (; j < num1.length; j++) {
      const prod = +num2[num2.length - 1 - i] * +num1[num1.length - 1 - j] + carry;
      ans[i][delta + j] = (prod % 10).toString();
      carry = Math.floor(prod / 10);
    }
    if (carry) {
      ans[i][delta + j] = carry.toString();
    }
    delta++;
  }
  let carry = 0;
  for (let c = 0; c < ans[0].length; c++) {
    let sum = carry;
    let r = 0;
    for (; r < ans.length - 1; r++) {
      sum += +ans[r][c];
    }
    ans[r][c] = (sum % 10).toString();
    carry = Math.floor(sum / 10);
  }
  return ans[ans.length - 1].reverse().join("").replace(/^0*/, "");
} // multiply()

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
console.log(multiply("408", "5"));

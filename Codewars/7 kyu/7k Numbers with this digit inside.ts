export function numbersWithDigitInside(x: number, d: number): number[] {
  let ans: [number, number, number] = [0, 0, 0];
  const nums: number[] = [];
  for (let i = 1; i <= x; i++) {
    if (i.toString().includes(d.toString())) {
      nums.push(i);
    }
  }
  if (nums.length) {
    ans = [nums.length, nums.reduce((a, e) => a + e), nums.reduce((a, e) => a * e)];
  }
  return ans;
} // numbersWithDigitInside()

console.log(numbersWithDigitInside(11, 1));
console.log(numbersWithDigitInside(5, 6));

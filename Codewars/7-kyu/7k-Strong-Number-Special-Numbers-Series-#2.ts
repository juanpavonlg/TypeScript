export const strongNumber = (num: number): string => {
  const digits = num.toString().split("").map(Number);
  return digits.reduce((sum, d) => sum += fact(d), 0) === num ? "STRONG!!!!" : "Not Strong !!";
}; // strongNumber()

const fact = (n: number): number => {
  return n < 2 ? 1 : fact(n - 1) * n;
}; // fact()

console.log(strongNumber(145));
console.log(strongNumber(23));

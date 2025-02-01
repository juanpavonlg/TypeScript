export const calc = (str: string): number => {
  const total1 = str.split("").map(char => char.charCodeAt(0)).join("");
  const total2 = total1.replace(/7/g, "1");
  return sumDigits(total1) - sumDigits(total2);
} // calc()

const sumDigits = (str: string): number => {
  return str.split("").map(Number).reduce((a, b) => a + b, 0);
}

console.log(calc("ABC"));

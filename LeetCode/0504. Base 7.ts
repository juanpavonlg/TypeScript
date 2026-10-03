function convertToBase7(num: number): string {
  let base7 = 0;
  let w = 1;
  while (num) {
    base7 += (num % 7) * w;
    w *= 10;
    num = (num / 7) | 0;
  }
  return `${base7}`;
} // convertToBase7()

console.log(convertToBase7(100));
console.log(convertToBase7(-7));

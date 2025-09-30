export function add(num1: number, num2: number): number {
  let sum = "";
  while (num1 > 0 || num2 > 0) {
    const [d1, d2] = [num1 % 10, num2 % 10];
    sum = `${d1 + d2}` + sum;
    [num1, num2] = [num1 / 10 | 0, num2 / 10 | 0];
  }
  return +sum;
} // add()

console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));
console.log(add(72, 9));

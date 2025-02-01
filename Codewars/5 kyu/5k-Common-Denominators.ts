export const convertFrac = (lst: [number, number][]): string => {
  for (let i = 0; i < lst.length; i++) {
    const div = gcd(lst[i][0], lst[i][1]);
    lst[i][0] /= div;
    lst[i][1] /= div;
  }
  const cd = lst.reduce((a, [_, d]) => lcm(a, d), 1); 
  return lst.map(([n, d]) => `(${n * cd / d},${cd})`).join("");
} // convertFrac()

const gcd = (a: number, b: number): number => {
  return b ? gcd(b, a % b) : a;
} // gcd()

const lcm = (a: number, b: number): number => {
  return a * b / gcd(a, b);
} // lcm()

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));
console.log(convertFrac([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]]));

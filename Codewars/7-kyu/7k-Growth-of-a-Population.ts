export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  return p0 >= p ? 0 : nbYear(p0 + Math.floor(percent * p0 / 100 + aug), percent, aug, p) + 1;
}; // nbYear()

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));

type BinOp = (a: number, b: number) => number;

export const gcdi = (a: number, b: number): number => {
  return gcd(Math.abs(a), Math.abs(b));
}; // gcdi()

export const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
}; // gcdi()

export const lcmu = (a: number, b: number): number => {
  return Math.abs(a * b) / gcdi(a, b);
}; // lcmu()

export const som = (a: number, b: number): number => {
  return a + b;
}; // som()

export const maxi = (a: number, b: number): number => {
  return a > b ? a : b;
}; // maxi()

export const mini = (a: number, b: number): number => {
  return a < b ? a : b;
}; // mini()

export const operArray = (fct: BinOp, arr: number[], init: number): number[] => {
  const res: number[] = [];
  let r = init;
  for (const n of arr) {
    r = fct(n, r);
    res.push(r);
  }
  return res;
};

console.log(operArray(gcdi, [18, 69, -90, -78, 65, 40], 18));
console.log(operArray(lcmu, [18, 69, -90, -78, 65, 40], 18));
console.log(operArray(som, [18, 69, -90, -78, 65, 40], 0));
console.log(operArray(mini, [18, 69, -90, -78, 65, 40], 18));
console.log(operArray(maxi, [18, 69, -90, -78, 65, 40], 18));

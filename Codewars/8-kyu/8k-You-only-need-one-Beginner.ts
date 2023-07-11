export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);
} // check()

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));

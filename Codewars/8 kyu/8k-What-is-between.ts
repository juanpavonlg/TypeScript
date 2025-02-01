export function between(a: number, b: number): number[] {
  let arr: number[] = [];
  for (let i = a; i <= b; i ++) {
    arr.push(i);
  }
  return arr;
} // between()

console.log(between(1, 10));

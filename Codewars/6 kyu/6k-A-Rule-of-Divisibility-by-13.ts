export function thirt(n: number): number {
  const rem = [1, 10, 9, 12, 3, 4];
  let num = 0;
  let newn = n;
  while (num != n) {
    let i = 0;
    n = newn;
    num = 0;
    while (newn) {
      num += newn % 10 * rem[i++ % 6];
      newn = ~~(newn / 10);
    }
    newn = num;
  }
  return num;
} // thirt()

console.log(thirt(8529));
console.log(thirt(1234567));
console.log(thirt(85299258));

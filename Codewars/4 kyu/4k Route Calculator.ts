export const calculate = (sum: string): string | number => {
  if (/[^$*+-.0-9]/.test(sum)) {
    return "400: Bad request";
  }
  const arr = sum.match(/\d+\.?\d*|[$*+-]/g);
  reduce(arr, "$");
  reduce(arr, "*");
  reduce(arr, "-");
  reduce(arr, "+");
  return +arr![0];
}; // calculate()

const reduce = (arr: RegExpMatchArray | null, op: string) => {
  const opr: { [key: string]: (a: string, b: string) => string } = {
    "$": (a: string, b: string) => (+a / +b).toString(),
    "*": (a: string, b: string) => (+a * +b).toString(),
    "-": (a: string, b: string) => (+a - +b).toString(),
    "+": (a: string, b: string) => (+a + +b).toString(),
  };
  let i = arr?.indexOf(op) ?? -1;
  while (i > 0) {
    arr?.splice(i - 1, 3, opr[op](arr[i - 1], arr[i + 1]));
    i = arr?.indexOf(op) ?? -1;
  }
}; // reduce()

console.log(calculate("1+1"));
console.log(calculate("10$2"));
console.log(calculate("1.5*3"));
console.log(calculate("5+5+5+5"));
console.log(calculate("1000$2.5$5+5-5+6$6"));
console.log(calculate("10-9p"));

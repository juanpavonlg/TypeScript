export const head = (lst: number[]): number => {
  return lst[0];
} // head()

export const tail = (lst: number[]): number[] => {
  return lst.slice(1);
} // tail()

export const init = (lst: number[]): number[] => {
  return lst.slice(0, - 1);
} // init()

export const last = (lst: number[]): number => {
  return lst.at(-1)!;
} // last()

console.log(head([1,5,7,9]));
console.log(tail([1,5,7,9]));
console.log(init([1,5,7,9]));
console.log(last([1,5,7,9]));

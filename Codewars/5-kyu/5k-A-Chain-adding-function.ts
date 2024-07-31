export default function add(x: number): any {
  // let total = x;
  // return function add2(...args: number[]): any {
  //   if (args.length) {
  //     total = args.reduce((a, e) => a + e, total);
  //     return add2;
  //   }
  //   return total;
  // };
  const next = (y: number) => add(x + y);
  next.valueOf = () => x;
  return next;
} // add()

console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
console.log(add(1)(2)(3)(4) == 10);
console.log(add(1)(2)(3)(4)(5) == 15);
console.log(add(1) == 1);
const addTwo = add(2);
console.log(addTwo == 2);
console.log(addTwo + 5 == 7);
console.log(addTwo(3) == 5);
console.log(addTwo(3)(5) == 10);

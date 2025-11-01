export const start = (next: Function) => {
  const stack: number[] = [];
  return next(stack);
}; // start()

export const end = (stack: number[]) => {
  return stack.pop();
}; // end()

export const push = (stack: number[]) => (n: number) => {
  stack.push(n);
  return (next: Function) => next(stack);
}; // push()

export const add = (stack: number[]) => (next: Function) => {
  stack.push(stack.pop()! + stack.pop()!);
  return next(stack);
}; // add()

export const sub = (stack: number[]) => (next: Function) => {
  stack.push(stack.pop()! - stack.pop()!);
  return next(stack);
}; // sub()

export const mul = (stack: number[]) => (next: Function) => {
  stack.push(stack.pop()! * stack.pop()!);
  return next(stack);
}; // mul()

export const div = (stack: number[]) => (next: Function) => {
  stack.push((stack.pop()! / stack.pop()!) | 0);
  return next(stack);
}; // div()

console.log(start(push)(4)(push)(9)(div)(end));
console.log(start(push)(5)(push)(8)(push)(1)(add)(add)(end));

export function counter(): Function {
  let i = 0;
  return () => {
    return ++i;
  }
} // counter()

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

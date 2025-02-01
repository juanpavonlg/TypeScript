export function* generator(a: number): Generator<string> {
  let b = 0;
  while (true) {
    yield `${a} x ${++b} = ${a * b}`;
  }
} // generator()

const gen = generator(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

export function* paperFold(): Generator<number, any, undefined> {
  let i = 1;
  while (true) {
    let n = i;
    while (n % 2 === 0) {
      n /= 2;
    }
    yield n % 4 === 1 ? 1 : 0;
    i++;
  }
} // paperFold()

const gen = paperFold();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

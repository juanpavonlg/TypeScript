export function* baumSweet(): Generator<number, any, undefined> {
  let n = 0;
  while (true) {
    yield (n ? n.toString(2).match(/0+/g) ?? [] : []).some((e) => e.length % 2)
      ? 0
      : 1;
    n++;
  }
} // baumSweet()

const gen = baumSweet();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

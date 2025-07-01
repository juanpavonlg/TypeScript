export function correctTail(body: string, tail: string): boolean {
  return body.slice(-tail?.length) === tail;
  return body.endsWith(tail);
} // correctTail()

console.log(correctTail("Fox", "x"));
console.log(correctTail("Rhino", "o"));
console.log(correctTail("Meerkat", "t"));
console.log(correctTail("Emu", "t"));
console.log(correctTail("Badger", "s"));
console.log(correctTail("Giraffe", "d"));

export function makeLooper(str: string): () => string {
  let i = 0;
  return () => str[i++ % str.length];
} // makeLooper()

const abc = makeLooper("abc");
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());

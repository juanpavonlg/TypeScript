export function findShort(s: string): number {
  return s.split(" ").reduce((s1, s2) => s1.length < s2.length ? s1 : s2).length;
} // findShort()

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

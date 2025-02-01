export function shorterReverseLonger(a: string, b: string): string {
  const [short, long] = a.length < b.length ? [a, b] : [b, a];
  return `${short}${[...long].reverse().join("")}${short}`;
} // shorterReverseLonger()

console.log(shorterReverseLonger("first", "abcde"));

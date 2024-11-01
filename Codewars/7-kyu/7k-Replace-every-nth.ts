export function replaceNth(text: string, n: number, oldValue: string, newValue: string): string {
  let count = 0;
  return n < 1 ? text : text.replaceAll(oldValue, (e) => ++count % n ? e : newValue);
} // replaceNth()

console.log(replaceNth("Vader said: No, I am your father!", 2, "a", "o"));
console.log(replaceNth("Vader said: No, I am your father!", -2, "a", "o"));

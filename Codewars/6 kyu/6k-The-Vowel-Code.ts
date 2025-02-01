// turn vowels into numbers
export function encode(string: string): string {
  const vowelToNum: {[key: string]: string} = { a: "1", e: "2", i: "3", o: "4", u: "5" };
  return string.replace(/[aeiou]/g, (x) => vowelToNum[x]);
} // encode()

// turn numbers back into vowels
export function decode(string: string): string {
  const numToVowel: {[key: string]: string} = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return string.replace(/[1-5]/g, (x) => numToVowel[x]);
} // decode()

console.log(encode("hello"));
console.log(decode("h3 th2r2"));

export function tripleTrouble(one: string, two: string, three: string): string {
  return [...one].map((e, i) => e + two[i] + three[i]).join("");
} // tripleTrouble()

console.log(tripleTrouble("aa", "bb", "cc"));

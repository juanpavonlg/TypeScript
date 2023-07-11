export function nerdify(txt: string): string {
  const rep: {[i: string]: string} = {"A": "4", "a": "4", "E": "3", "e": "3", "l": "1"};
  return txt.split("").map(ch => rep[ch] || ch).join("");
} // nerdify()

console.log(nerdify("Funf\aamentals"));

export function encode(str: string): string {
  const code: { [key: string]: string } = { 
    A: ". . .", B: ".. . .", C: "... . .", D: ". .. .", E: ".. .. .", F: "... .. .", G: ". ... .", H: ".. ... .", I: "... ... .",
    J: ". . ..", K: ".. . ..", L: "... . ..", M: ". .. ..", N: ".. .. ..", O: "... .. ..", P: ". ... ..", Q: ".. ... ..", R: "... ... ..",
    S: ". . ...", T: ".. . ...", U: "... . ...", V: ". .. ...", W: ".. .. ...", X: "... .. ...", Y: ". ... ...", Z: ".. ... ...", " ": "... ... ..."
  };
  const ans: string[] = [];
  for (const ch of str) {
    ans.push(code[ch]);
  }
  return ans.join(" ");
} // encode()

export function decode(str: string): string {
  const code: { [key: string]: string } = { 
    ". . .": "A", ".. . .": "B", "... . .": "C", ". .. .": "D", ".. .. .": "E", "... .. .": "F", ". ... .": "G", ".. ... .": "H", "... ... .": "I",
    ". . ..": "J", ".. . ..": "K", "... . ..": "L", ". .. ..": "M", ".. .. ..": "N", "... .. ..": "O", ". ... ..": "P", ".. ... ..": "Q", "... ... ..": "R",
    ". . ...": "S", ".. . ...": "T", "... . ...": "U", ". .. ...": "V", ".. .. ...": "W", "... .. ...": "X", ". ... ...": "Y", ".. ... ...": "Z", "... ... ...": " "
  };
  const s = str.match(/\.+ \.+ \.+/g) ?? [];
  let ans = "";
  for (const ch of s) {
    ans += code[ch];
  }
  return ans;
} // decode()

console.log(encode("N"));
console.log(encode("TEST"));
console.log(encode("HELLO WORLD"));
console.log(decode(".. .. .."));
console.log(decode(".. . ... .. .. . . . ... .. . ..."));
console.log(decode(".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. ."));

export function toAscii85(str: string): string {
  let ascii85 = "";
  for (let i = 0; i < str.length; i += 4) {
    const group = str.slice(i, i + 4);
    let value = parseInt([...group].map((e) => e.charCodeAt(0).toString(2).padStart(8, "0")).join("").padEnd(32, "0"), 2);
    let temp = "";
    while (temp.length < 5) {
      temp = String.fromCharCode((value % 85) + 33) + temp;
      value = Math.floor(value / 85);
    }
    temp = temp.slice(0, group.length + 1);
    temp = temp === "!!!!!" ? "z" : temp;
    ascii85 += temp;
  }
  return `<~${ascii85}~>`;
} // toAscii85()

export function fromAscii85(str: string): string {
  str = str.replace(/[ \n\t]/g, "").replace(/z/g, "!!!!!").slice(2, -2);
  let ascii = "";
  for (let i = 0; i < str.length; i += 5) {
    let group = str.slice(i, i + 5);
    const len = group.length;
    group = group.padEnd(5, "u");
    let value = 0;
    let factor = 1;
    for (let j = 4; j >= 0; j--) {
      value += (group.charCodeAt(j) - 33) * factor;
      factor *= 85;
    }
    const binary = value.toString(2).padStart(32, "0");
    let temp = "";
    for (let k = 0; k < binary.length; k += 8) {
      temp += String.fromCharCode(parseInt(binary.slice(k, k + 8), 2));
    }
    ascii += temp.slice(0, len - 1);
  }
  return ascii;
} // fromAscii85()

console.log(
  toAscii85(
    "Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure."
  )
);
console.log(toAscii85("easy"));
console.log(toAscii85("moderate"));
console.log(toAscii85("somewhat difficult"));
console.log(toAscii85("\u0000"));
console.log(
  fromAscii85(
    toAscii85(
      "Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure."
    )
  )
);
console.log(fromAscii85("<~ARTY*~>"));
console.log(fromAscii85("<~D/WrrEaa'$~>"));
console.log(fromAscii85("<~F)Po,GA(E,+Co1uAnbatCif~>"));
console.log(fromAscii85("<~GA(]4ATMg!@\tq?d)ATMr91B~>"));

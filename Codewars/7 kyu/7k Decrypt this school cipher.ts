export const decrypt = (str: string): string => {
  let msg = "";
  for (const ch of str.match(/( |\d+|'\d+')/g) ?? []) {
    if (/'/.test(ch)) {
      msg += String.fromCharCode(+ch.match(/\d+/)![0]);
    } else {
      msg += ch;
    }
  }
  return msg.split("").reverse().join("");
  return [...str.replace(/'(\d+)'/g, (_, c) => String.fromCharCode(+c))].reverse().join("");
} // decrypt()

console.log(decrypt("4'101''99''105''108''65' '105''72'9"));

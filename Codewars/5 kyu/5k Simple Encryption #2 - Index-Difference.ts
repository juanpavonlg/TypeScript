export function encrypt(text: string): string {
  if (!text) {
    return text;
  } else if (/[^\w.,:;\-?! '()$%&"]/.test(text)) {
    throw Error("Character not in the region");
  }
  const region = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&\"";
  const len = region.length;
  text = [...text].map((e, i) => i % 2 ? e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase() : e).join("");
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    encrypted += region[(region.indexOf(text[i - 1]) - region.indexOf(text[i]) + len) % len];
  }
  return encrypted;
} // encrypt()

export function decrypt(encryptedText: string): string {
  if (!encryptedText) {
    return encryptedText;
  } else if (/[^\w.,:;\-?! '()$%&"]/.test(encryptedText)) {
    throw Error("Character not in the region");
  }
  const region = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&\"";
  const len = region.length;
  let text = "";
  for (let i = 0; i < encryptedText.length; i++) {
    text += region[(region.indexOf(text[i - 1]) - (region.indexOf(encryptedText[i]) - len)) % len];
  }
  return [...text].map((e, i) => i % 2 ? e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase() : e).join("");
} // decrypt()

console.log(encrypt("Business"));
console.log(decrypt("&61kujla"));
console.log(encrypt("Do the kata \"Kobayashi-Maru-Test!\" Endless fun and excitement when finding a solution!"));
console.log(decrypt("$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"));

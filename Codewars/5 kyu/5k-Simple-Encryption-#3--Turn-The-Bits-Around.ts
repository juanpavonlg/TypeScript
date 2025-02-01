export function encrypt(text: string): string {
  if (/[^\w .]/g.test(text)) {
    throw new Error("Parameter has invalid characters!");
  }
  if (!text) {
    return text;
  }
  const bins = [...text].map((e) => encode(e).toString(2).padStart(6, "0").split(""));
  for (let i = 0; i < bins.length; i++) {
    if (bins[i + 1]) {
      [bins[i][4], bins[i + 1][0]] = [bins[i + 1][0], bins[i][4]];
    }
    [bins[i][1], bins[i][3]] = [`${+bins[i][1] ^ 1}`, `${+bins[i][3] ^ 1}`];
    [bins[i][0], bins[i][1], bins[i][2], bins[i][3], bins[i][4], bins[i][5]] = [bins[i][3], bins[i][4], bins[i][5], bins[i][0], bins[i][1], bins[i][2]];
    [bins[i][0], bins[i][1], bins[i][2], bins[i][3], bins[i][4], bins[i][5]] = [bins[i][1], bins[i][0], bins[i][3], bins[i][2], bins[i][5], bins[i][4]];
    bins[i].reverse();
    [bins[i][0], bins[i][2]] = [bins[i][2], bins[i][0]];
  }
  return bins.map((e) => decode(parseInt(e.join(""), 2))).join("");
} // encrypt()

export function decrypt(encryptedText: string): string {
  if (/[^\w .]/g.test(encryptedText)) {
    throw new Error("Parameter has invalid characters!");
  }
  if (!encryptedText) {
    return encryptedText;
  }
  const bins = [...encryptedText].map((e) => encode(e).toString(2).padStart(6, "0").split(""));
  for (let i = bins.length - 1; i >= 0; i--) {
    [bins[i][0], bins[i][2]] = [bins[i][2], bins[i][0]];
    bins[i].reverse();
    [bins[i][0], bins[i][1], bins[i][2], bins[i][3], bins[i][4], bins[i][5]] = [bins[i][1], bins[i][0], bins[i][3], bins[i][2], bins[i][5], bins[i][4]];
    [bins[i][0], bins[i][1], bins[i][2], bins[i][3], bins[i][4], bins[i][5]] = [bins[i][3], bins[i][4], bins[i][5], bins[i][0], bins[i][1], bins[i][2]];
    [bins[i][1], bins[i][3]] = [`${+bins[i][1] ^ 1}`, `${+bins[i][3] ^ 1}`];
    if (bins[i + 1]) {
      [bins[i][4], bins[i + 1][0]] = [bins[i + 1][0], bins[i][4]];
    }
  }
  return bins.map((e) => decode(parseInt(e.join(""), 2))).join("");
} // decrypt()

function encode(char: string): number {
  if (/[A-Z]/.test(char)) {
    return char.charCodeAt(0) - 65;
  } else if (/[a-z]/.test(char)) {
    return char.charCodeAt(0) - 97 + 26;
  } else if (/[\d]/.test(char)) {
    return char.charCodeAt(0) - 48 + 52;
  } else if (/[ ]/.test(char)) {
    return 62;
  }
  return 63;
} // encode()

function decode(code: number): string {
  if (code < 26) {
    return String.fromCharCode(code + 65);
  } else if (code < 52) {
    return String.fromCharCode(code - 26 + 97);
  } else if (code < 62) {
    return String.fromCharCode(code - 52 + 48);
  } else if (code === 62) {
    return " ";
  }
  return ".";
} // decode()

console.log(encrypt("A"));
console.log(encrypt("Abc"));
console.log(encrypt("B9"));
console.log(encrypt("This is a test."));
console.log(encrypt("Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution."));
console.log(decrypt("K"));
console.log(decrypt("KyU"));
console.log(decrypt("rw"));
console.log(decrypt("jvLdRPdQXV8Rd5x"));
console.log(decrypt("rfR9qRVMT8TUfeyXGXdrLUcT.dUmVd5xUNo1oRdZQ1dtUXs1QVmRL8RMVt9RHqRtU1Ps1LtPQXVdbpZ9Lfp1"));

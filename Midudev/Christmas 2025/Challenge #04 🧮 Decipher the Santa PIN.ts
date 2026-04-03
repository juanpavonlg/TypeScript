function decodeSantaPin(code: string): string | null {
  let pin = "";
  let lastDigit = "";
  const re = /\[(\d[+-]*|<)\]/g;
  let block: RegExpExecArray | null;
  while ((block = re.exec(code)) !== null) {
    if (block[1] === "<") {
      pin += lastDigit;
    } else {
      let digit = +block[1][0];
      for (let i = 1; i < block[1].length; i++) {
        digit = (digit + 10 + (block[1][i] === "+" ? 1 : -1)) % 10;
      }
      lastDigit = digit.toString();
      pin += lastDigit;
    }
  }
  return pin.length === 4 ? pin : null;
} // decodeSantaPin()

console.log(decodeSantaPin("[1++][2-][3+][<]"));
console.log(decodeSantaPin("[9+][0-][4][<]"));
console.log(decodeSantaPin("[1+][2-]"));

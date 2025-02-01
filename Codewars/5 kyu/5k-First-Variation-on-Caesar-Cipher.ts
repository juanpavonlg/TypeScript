export const movingShift = (s: string, shift: number) => {
  let cypher = "";
  for (const ch of s) {
    if (ch >= "A" && ch <= "Z") {
      cypher += String.fromCharCode(65 + (ch.charCodeAt(0) + shift) % 65 % 26);
    } else if (ch >= "a" && ch <= "z") {
      cypher += String.fromCharCode(97 + (ch.charCodeAt(0) + shift) % 97 % 26);
    } else {
      cypher += ch;
    }
    shift = (shift + 1) % 26;;
  }
  let len = Math.ceil(cypher.length / 5);
  const runners: string[] = [];
  for (let i = 0; i < 5; i++) {
    runners.push(cypher.slice(i * len, i * len + len));
  }
  return runners;
} // movingShift()

export const demovingShift = (arr: string[], shift: number) => {
  const cypher = arr.join("");
  let s = "";
  for (const ch of cypher) {
    const newCh = ch.charCodeAt(0) - shift;
    if (ch >= "A" && ch <= "Z") {
      s += String.fromCharCode(newCh >= 65 ? newCh : 91 - (65 - newCh));
    } else if (ch >= "a" && ch <= "z") {
      s += String.fromCharCode(newCh >= 97 ? newCh : 123 - (97 - newCh));
    } else {
      s += ch;
    }
    shift = (shift + 1) % 26;
  }
  return s;
} // demovingShift()

console.log(movingShift("I should have known that you would have a perfect answer for me!!!", 1));
console.log(demovingShift(movingShift("I should have known that you would have a perfect answer for me!!!", 1), 1));
console.log(movingShift("I SHOULD HAVE KNOWN THAT YOU WOULD HAVE A PERFECT ANSWER FOR ME!!!", 1));
console.log(demovingShift(movingShift("I SHOULD HAVE KNOWN THAT YOU WOULD HAVE A PERFECT ANSWER FOR ME!!!", 1), 1));
console.log(movingShift("Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.", 1));
console.log(demovingShift(movingShift("Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.", 1), 1));

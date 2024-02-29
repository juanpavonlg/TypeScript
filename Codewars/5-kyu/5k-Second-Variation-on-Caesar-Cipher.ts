export const encodeStr = (s: string, shift: number): string[] => {
  const first = s[0].toLowerCase();
  let cypher = `${first}${String.fromCharCode(97 + (first.charCodeAt(0) + shift) % 97 % 26)}${s.replace(/[a-z]/gi, (ch) => {
    if (ch >= "A" && ch <= "Z") {
      return String.fromCharCode(65 + (ch.charCodeAt(0) + shift) % 65 % 26);
    }
    return String.fromCharCode(97 + (ch.charCodeAt(0) + shift) % 97 % 26);
  })}`;
  return cypher.match(RegExp(`.{1,${Math.ceil(cypher.length / 5)}}`, "g")) ?? [];
}; // encodeStr()

export const decode = (arr: string[]): string => {  
  let cypher = arr.join("");
  const shift = cypher[0] !== 'z' ? cypher.charCodeAt(1) - cypher.charCodeAt(0) : 26 + (cypher.charCodeAt(1) - cypher.charCodeAt(0)); //cypher.charCodeAt(0) - cypher.charCodeAt(1);
  cypher = cypher.slice(2);
  const message = cypher.replace(/[a-z]/gi, (ch) => {
    if (ch >= "A" && ch <= "Z") {
      return String.fromCharCode(65 + (ch.charCodeAt(0) + 91 - shift) % 65 % 26);
    }
    return String.fromCharCode(97 + (ch.charCodeAt(0) + 123 - shift) % 97 % 26);
  });
  return message;
}; // decode()

const rotate = (ch: string, shift: number): string => {
  const delta = ch < "a" ? 65 : 97;
  return String.fromCharCode(delta + (ch.charCodeAt(0) - delta + shift) % 26);
} // rotate()

console.log(encodeStr("12345678901234", 1));
console.log(decode(encodeStr("12345678901234", 1)));
console.log(encodeStr("I should have known that you would have a perfect answer for me!!!", 1));
console.log(decode(encodeStr("I should have known that you would have a perfect answer for me!!!", 1)));
console.log(encodeStr("O CAPTAIN! my Captain! our fearful trip is done;", 1));
console.log(decode(encodeStr("O CAPTAIN! my Captain! our fearful trip is done;", 1)));
console.log(encodeStr("I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)", 25));
console.log(decode(encodeStr("I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)", 1)));

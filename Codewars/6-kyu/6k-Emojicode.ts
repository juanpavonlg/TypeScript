export function toEmojicode(emojis: string): string {
  const emojicodes: string[] = [];
  for (const emoji of emojis) {
    let emojicode = "";
    let code = emoji.codePointAt(0);
    while (code) {
      emojicode = String.fromCodePoint(0x0030 + code % 10, 0xFE0F, 0x20E3) + emojicode;
      code = Math.floor(code / 10);
    }
    emojicodes.push(emojicode);
  }
  return emojicodes.join(" ");
} // toEmojicode()

export function toEmojis(emojicode: string): string {
  let emojis = "";
  for (const emoji of emojicode.split(" ")) {
    let code = 0;
    for (let i = 0; i < emoji.length; i += 3) {
      code = 10 * code + +emoji[i];
    }
    emojis += String.fromCodePoint(code)
  }
  return emojis;
} // toEmojis()

console.log(toEmojicode("😊"));
console.log(toEmojis("1️⃣2️⃣8️⃣5️⃣2️⃣2️⃣"));
console.log(toEmojicode("🙈🙉🙊"));
console.log(toEmojis("1️⃣2️⃣8️⃣5️⃣8️⃣4️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣5️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣6️⃣"));

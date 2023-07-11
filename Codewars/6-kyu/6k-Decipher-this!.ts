export function decipherThis(str: string): string {
  return str ? str.split(" ").map(decryptWord).join(" ") : "";
} // decipherThis()

function decryptWord(word: string): string {
  const first = parseInt(word);
  word = String.fromCharCode(first) + word.substring(first.toString().length);  
  return word.length > 2 ? word[0] + word[word.length - 1] + word.substring(2, word.length - 1) + word[1] : word;
} // encryptWord()

console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka"));

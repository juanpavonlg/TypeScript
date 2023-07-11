export const encryptThis = (str: string): string => {
  return str ? str.split(" ").map(encryptWord).join(" ") : "";
} // encryptThis

function encryptWord(word: string): string {
  const chars: string[] = word.split("");
  chars[0] =  chars[0].charCodeAt(0).toString();
  const last: string = chars[chars.length - 1];
  chars[chars.length - 1] = chars[1];
  chars[1] = last;
  return chars.join("");
} // encryptWord()

console.log(encryptThis("A wise old owl lived in an oak"));

export function lastSurvivors(str: string): string {
  const match = str.match(/(.).*\1/);
  if (match) {
    const i = match.index!;
    const j = i + match[0].length - 1;
    const letter = String.fromCharCode(97 + (str[i].charCodeAt(0) - 96) % 26);
    str = `${str.slice(0, i)}${letter}${str.slice(i + 1, j)}${str.slice(j + 1)}`;
    return lastSurvivors(str);
  }
  return str;
} // lastSurvivors()

console.log(lastSurvivors("zzzab"));
console.log(lastSurvivors("abaa"));
console.log(lastSurvivors("xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"));

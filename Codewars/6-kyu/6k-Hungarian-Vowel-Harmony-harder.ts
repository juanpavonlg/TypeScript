export function instrumental (word: string): string {
  const vowels: { [i: string]: string } = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };
  const digraphs: { [i: string]: string } = { sz: "ssz", zs: "zzs", cs: "ccs" };
  if (/[eéiíöőüűaáoóuú]$/.test(word)) {
    if (/[aeiou]$/.test(word)) {
      word = word.replace(/.$/, vowels[word.match(/.$/)![0]]);
    }
    word += /[aáoóuú]$/.test(word) ? "val" : "vel";
  } else {
    if (/(sz|zs|cs)$/.test(word)) {       
      word = word.replace(/.{2}$/, digraphs[word.match(/.{2}$/)![0]]);
    } else {
      word += word.slice(-1);
    }
    word += /[aáoóuú].+$/.test(word) ? "al" : "el";
  }
  return word;
} // instrumental()

console.log(instrumental("ablak"));
console.log(instrumental("fa"));
console.log(instrumental("gonosz"));
console.log(instrumental("betű"));
console.log(instrumental("kéz"));
console.log(instrumental("szék"));
